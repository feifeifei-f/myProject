// pages/tellogin/tellogin.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputTel: '',
    inputPass: '',
    inputUser: '',
    inputEmail: '',
    flag: false,
    countnum: 5,
    icons: {
      ind: 1,
      callback_icon: '../../images/login_image/left.png',
      tohome_icon: '../../images/login_image/home.png'
    },
    act: 2,
    register: '',
    login: '',
    userImg: '../../images/login_image/user.png',
    lodingFlag: false
  },
  // 返回上一级
  callback() {
    wx.navigateBack()
  },
  // 返回首页
  toHome() {
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  // 获取输入手机号
  bindTelInput: function (e) {
    this.setData({
      inputTel: e.detail.value
    })
    // console.log(this.data.inputTel);
  },
  // 获取输入密码
  bindPasInput: function (e) {
    this.setData({
      inputPass: e.detail.value
    })
    // console.log(this.data.inputPass);
  },
  // 获取输入账号
  bindUserInput: function (e) {
    this.setData({
      inputUser: e.detail.value
    })
    // console.log(this.data.inputUser);
  },
  // 获取输入邮箱
  bindEmailInput: function (e) {
    this.setData({
      inputEmail: e.detail.value
    })
    // console.log(this.data.inputEmail);
  },
  // 获取验证码
  timekeep() {
    let inputTel = this.data.inputTel
    if (!/^1[3-9]\d{9}$/.test(inputTel)) {
      wx.showToast({
        title: '手机号格式有误',
        duration: 1000,
        icon: "error"
      })
      return
    }
    let inputPass = Math.random().toString(16).slice(2, 8)
    let countnum = this.data.countnum; // 获取倒计时初始值
    let timer = setInterval(() => {
      countnum -= 1;
      this.setData({
        countnum
      });
      if (countnum <= 0) {
        clearInterval(timer); // 取消置顶的 setInterval 函数将要执行的代码
        this.setData({
          inputPass
        })
        console.log(inputPass);
        this.setData({
          countnum: 5,
        });


      }
    }, 1000);
  },
  // 切换账号登录
  toUserLogin() {
    this.setData({
      act: 2
    })
  },
  // 切换账号注册
  toRegister() {
    this.setData({
      act: 3
    })
  },
  // 切换手机号登录
  toTelLogin() {
    this.setData({
      act: 1
    })
  },
  // 提示函数
  showThost(status, msg, time, state) {

    wx.showToast({
      title: msg,
      duration: time,
      icon: state
    })
    this.setData({
      lodingFlag: !this.data.lodingFlag
    })
    if (msg === '注册成功') {
      let users = {
        userImg: this.data.userImg,
        userTel: this.data.inputTel,
        userName: this.data.inputUser
      }
      wx.setStorageSync('users', users)
    } else if (msg === '欢迎回来') {

      wx.reLaunch({
        url: '/pages/user/user',
      })
    }

  },
  // 登录、注册调用
  // post(xxx) {
  //   let {
  //     inputTel,
  //     inputPass,
  //     inputUser,
  //     inputEmail
  //   } = this.data
  //   if (!inputTel || !inputPass) {
  //     wx.showToast({
  //       title: '输入不能为空',
  //       duration: 1500,
  //       icon: 'error'
  //     })
  //     return;
  //   }
  //   // 修改加载状态
  //   this.setData({
  //     lodingFlag: !this.data.lodingFlag
  //   })
  //   // 请求
  //   let that = this
  //   setTimeout(() => {
  //     wx.request({
  //       url: xxx,
  //       method: 'post',
  //       data: {
  //         phone: inputTel,
  //         password: inputPass,
  //         username: inputUser,
  //         email: inputEmail,
  //         type: 'phone'
  //       },
  //       header: {
  //         'content-type': 'application/x-www-form-urlencoded'
  //       },
  //       // 成功
  //       success: function (res) {
  //         console.log(res);
  //         // 请求成功后的处理逻辑
  //         const {
  //           status,
  //           msg,
  //           token
  //         } = res.data
  //         // 判断status
  //         if (status === 200) {
  //           that.showThost(status, msg, 1000, 'success')
  //         } else {
  //           that.showThost(status, msg, 1000, 'error')
  //         }
  //       },
  //       fail: function (err) {
  //         // 请求失败后的处理逻辑
  //         wx.showToast({
  //           title: err,
  //           duration: 1000,
  //           icon: "error"
  //         })
  //       }
  //     })
  //   }, 1000);

  // },
  // 注册
  register() {
    wx.showToast({
      title: '该功能正在维护',
      icon: 'error',
      duration: 2000

    })
    // this.post(this.data.register)


  },
  // 登录
  login() {
    wx.showToast({
      title: '该功能正在维护',
      icon: 'error',
      duration: 2000

    })
    // this.post(this.data.login)


  },


  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad(options) {
  //   this.setData({
  //     register: `http://${app.globalData.globalInterface}:4444/wx/register`,
  //     login: `http://${app.globalData.globalInterface}:4444/wx/login`
  //   })
  //   wx.showLoading({
  //     title: '加载中',
  //   })
  //   setTimeout(() => {
  //     wx.hideLoading()
  //   }, 500);
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {


  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})