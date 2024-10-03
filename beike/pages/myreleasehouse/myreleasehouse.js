// pages/myreleasehouse/myreleasehouse.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icons: {
      ind: 1,
      text: '我的发布',
      callback_icon: '../../images/login_image/left.png',
      tohome_icon: '../../images/login_image/home.png'
    },
    list: [],
    status: 0
  },
  getlist() {
    this.setData({
      list:wx.getStorageSync('searchlist')
    })
    // wx.request({
    //   url: `http://${app.globalData.globalInterface}:4444/audit/list`,
    //   method: "post",
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   success: (res) => {
    //     console.log(res.data.data);
    //     const {
    //       data
    //     } = res.data
    //     // console.log(data[5].status);
    //     this.setData({
    //       list: data,
    //       // status:Number(data.status)
    //     })
    //   },
    //   fail: (res) => {
    //     console.log(res);
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getlist()
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