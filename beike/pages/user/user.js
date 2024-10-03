// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    users: {
      userImg: '../../images/user_image/nologin.png',
      userName: '点击注册/登录'
    },

  },
  // 跳转登录
  handelLogin() {
    if (this.data.users.userName === '点击注册/登录') {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } else {
      wx.navigateTo({
        url: '/pages/userPage/userPage',
      })
    }

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    let userInfo = wx.getStorageSync('users')
    // console.log(userInfo);
    if (typeof userInfo == 'string') {
      wx.setStorageSync('users', this.data.users)
    } else {
      this.setData({
        users: userInfo
      })
    }
  },
  toMyrelease(){
    wx.navigateTo({
      url: '/pages/myreleasehouse/myreleasehouse',
    })
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