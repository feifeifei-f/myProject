// pages/publish/sell/detail/entrust/entrust.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ischecked: true,
    isShow: false,
    // 房源信息
    releaseHouseList: {},
    show: false,
    radio: 1,
    icons: {
      ind: 1,
      text: '支付',
      callback_icon: '../../images/login_image/left.png',
      tohome_icon: '../../images/login_image/home.png'
    },
    payloading: false,
    inputShow: false,
    releaseHouse:[],
    // ———————————————密文数据————————————————
    isFocus: false, //控制input 聚焦
    wallets_password_flag: false, //密码输入遮罩
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      releaseHouseList: wx.getStorageSync('releaseHouseList') || {},
    })
  },
  tab(e) {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  publish() {
    let that = this
    let token = wx.getStorageSync('token');
    if (token == "") {
      wx.showModal({
        title: '请登录',
        content: '仅对注册用户开放。'
      })
      return;
    }
    wx.showModal({
      title: '确定发布',
      content: '请检查信息，确定发布吗',
      success(res) {

        if (res.confirm) {
          that.setData({
            show: !that.data.show
          })

        }
      }
    })

  },
  // 点击空白区域
  onClose() {
    this.setData({
      show: false,
      inputShow: false
    });
  },
  // 支付x号
  inputClose() {
    this.setData({
      inputShow: false
    });
  },
  // 点击X号
  close_van_popup() {
    this.onClose()
  },
  // 发布接口
  publishHouse() {

    // let {
    //   releaseHouseList
    // } = this.data
    // wx.request({
    //   url: `http://${app.globalData.globalInterface}:4444/wx/secondary/publish`,
    //   method: "post",
    //   data: releaseHouseList,
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   success: (res) => {
    //     console.log(res);
    //   },
    //   fail: (res) => {
    //     console.log(res);
    //   }
    // })

  },
  // 支付方式
  onChange(e) {
    this.setData({
      radio: e.detail,
    })
  },
  // 支付
  toPay() {
    // 加载效果
    this.setData({
      payloading: !this.data.payloading
    })
    setTimeout(() => {
      this.setData({
        payloading: !this.data.payloading,
        show: !this.data.show,
        inputShow: !this.data.inputShow
      })
    }, 800);
  },

  // ************************************************************** 支付密文输入

  set_wallets_password(e) { //获取钱包密码
    this.setData({
      wallets_password: e.detail.value
    });
    if (this.data.wallets_password.length == 6) { //密码长度6位时，自动验证钱包支付结果

      wx.showToast({
        title: '正在支付',
        duration: 1000,
        icon: 'loading'
      })
      this.setData({
        isFocus: false
      })
      setTimeout(() => {
        wx.navigateTo({
          url: '/pages/uploadPage/paymentSuccessful/paymentSuccessful',
        })
        this.setData({
          inputShow: !this.data.inputShow
        })
        this.setData({
          wallets_password: []
        });
        // 调用发布
        this.publishHouse()
      }, 1000);
    }
  },
  set_Focus() { //聚焦input
    console.log('isFocus', this.data.isFocus)
    this.setData({
      isFocus: true
    })
  },
  set_notFocus() { //失去焦点
    this.setData({
      isFocus: false
    })
  },
  close_wallets_password() { //关闭钱包输入密码遮罩
    this.setData({
      isFocus: false, //失去焦点
      wallets_password_flag: false,
    })
  },
  pay() { //去支付
    pay(this)
  },


  // --——————————————————————————————————————————————————————————————


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // wx.navigateBack({
    //   delta: 1 // 返回的页面数，‌如果delta大于现有页面数，‌则返回到首页
    // });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})