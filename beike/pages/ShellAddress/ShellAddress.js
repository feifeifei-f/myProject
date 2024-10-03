// pages/ShellInformation/ShellInformation.js
import cityList from "./city";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    citylistdata: cityList.city,
    cityText: '上海',
    value1: '',
    citlist: [],
  },
  getData(e) {
    this.setData({
      value1: e.detail.value
    })
    console.log(this.data.value1);
    this.searlist()

  },
  // 城市搜索功能 防抖
  //    :util.debounce(function
  searlist() {
    var lis = this.data.citylistdata.map((item) => {
      return item.lists.filter(item => JSON.stringify(item).includes(this.data.value1))
    })
    // 判断是否为空
    var lisMax = lis.find(item => item.length > 0 ? item : '')

    if (lis.find(item => item.length > 0 && this.data.value1 !== '')) {
      this.setData({
        citlist: lisMax
      })
    } else {
      this.setData({
        citlist: []
      })
    }
    wx.setStorageSync('citlists', this.data.citlist)
    console.log(this.data.citlist);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  Cityblock(e) {
    // console.log(e._relatedInfo.anchorTargetText);
    this.setData({
      cityText: e._relatedInfo.anchorTargetText
    });
    wx.setStorageSync('cityText', this.data.cityText)
    wx.reLaunch({
      url: '/pages/home/home?cit=' + this.data.cityText,
    })

  },


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