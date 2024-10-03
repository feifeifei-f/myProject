// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: false,
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    checked: false, // 初始化为未选中状态,
    icons: {
      ind: 1,
      callback_icon: '../../images/login_image/left.png',
      tohome_icon: '../../images/login_image/home.png'
    }

  },
  // 获取用户信息
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res.userInfo);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })

    // wx.authorizeForMiniProgram({
    //   scope:'scope.userlocation', 
    //   success() {
    //     // 用户已经同意小程序使用地理位置功能，后续可以调用相关接口获取位置信息
    //     wx.getLocation({ 
    //       success: (res) => {
    //         console.log(res.latitude, res.longitude); 
    //       }
    //     });
    //   }
    // })
  },
 

  // 勾选协议
  checkedtap: function () {
    var checked = this.data.checked;
    this.setData({
      "checked": !checked // 取反来切换选中状态
    })
    // console.log(this.data.checked);
  },
  // 跳转手机号登录
  toTelLogin() {
    if (!this.data.checked) {
      wx.showToast({
        title: '请勾选用户协议',
        icon: 'error',
        duration: 1000
      });
      return;
    }
    wx.navigateTo({
      url: '/pages/tellogin/tellogin',
    })

  },
  
  toUserlogin() {
    if (!this.data.checked) {
      wx.showToast({
        title: '请勾选用户协议',
        icon: 'error',
        duration: 1000
      });
      return;
    }
    wx.navigateTo({
      url: '/pages/userlogin/userlogin',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

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