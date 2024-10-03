// pages/seatchList/seatchList.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icons: {
      ind: 1,
      text: '列表',
      callback_icon: '../../images/login_image/left.png',
      tohome_icon: '../../images/login_image/home.png'
    },
    icon: '../../images/search_image/search.png',
    inp: '',
    id: '',
    list: [],
    searchlist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    wx.showLoading({
      title: '加载中',
    });
    setTimeout(() => {
      this.setData({
        inp: e.inp,
        list: wx.getStorageSync('list')
      })

      this.getDetailList()
      // this.getList()
      wx.hideLoading()
    }, 500);

    // console.log(this.data.inp);

  },
  // 获取搜索数据
  getDetailList() {
    this.setData({
      searchlist: wx.getStorageSync('searchlist')
    })
    // console.log(this.data.searchLists);
    // wx.request({
    //   url: `http://${app.globalData.globalInterface}:4444/ershoufang/search`,
    //   method: 'POST',
    //   data: {
    //     keywords: this.data.inp
    //   },
    //   success: (res) => {
    //     // console.log(res);
    //     this.setData({
    //       searchList: res.data.data,
    //     })
    //   }
    // })
  },
  // 聚焦返回
  tosSarch() {
    wx.navigateBack()
  },
  // 获取数据
  // getList() {
  //   wx.request({
  //     url: `http://${app.globalData.globalInterface}:4444/ershoufang`,
  //     success: (res) => {
  //       // console.log(res.data.data);
  //       const {
  //         data
  //       } = res.data
  //       // console.log(data);
  //       this.setData({
  //         list: data
  //       })
  //     }
  //   })
  // },
  // 跳转详情
  toDetail(e) {
    let id = e.currentTarget.dataset.param
    // console.log(id);
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
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