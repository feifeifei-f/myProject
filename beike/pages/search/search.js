// pages/search/search.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icons: {
      ind: 1,
      text: '搜索',
      callback_icon: '../../images/login_image/left.png',
      tohome_icon: '../../images/login_image/home.png'
    },
    icon: '../../images/search_image/search.png',
    value: '',
    clear: '../../images/search_image/clear.png',
    eyes: '../../images/search_image/eyes.png',
    uneyes: '../../images/search_image/uneyes.png',
    eyeflag: true,
    search_text: '',
    history_texts: [],
    searchlist: [],
    list:[],
    findText: ['上新', '汤臣一品', '促销', '降价', '20', '四合院', '15', '北京']

  },


  // 输入事件、获取输入值
  getText(e) {
    // console.log(e.detail);
    this.setData({
      search_text: e.detail.value
    })
    // 获取数据
    this.getDetailList()

  },
  // 获取数据
  getDetailList() {
    this.setData({
      list:wx.getStorageSync('list')
    })
    // console.log(this.data.list);
    this.setData({
      searchlist:this.data.list.filter((v)=>v.title.includes(this.data.search_text))
    })
    wx.setStorageSync('searchlist', this.data.searchlist)
    // console.log(this.data.searchlist);
    // wx.request({
    //   url: `http://${app.globalData.globalInterface}:4444/ershoufang/search`,
    //   method: 'POST',
    //   data: {
    //     keywords: this.data.search_text
    //   },
    //   success: (res) => {
    //     console.log(res);
    //     const item = res.data.data
    //     this.setData({
    //       list: item,
    //     })
    //     // console.log(this.data.list);
    //   }
    // })
  },
  // 确定、回车事件
  confirmtap(e) {
    let inp = e.target.dataset.inp
    this.setData({
      history_texts: [...this.data.history_texts, this.data.search_text],
      search_text: ''
    })
    // 数据持久化
    wx.setStorageSync('historys', JSON.stringify(this.data.history_texts))
    wx.navigateTo({
      url: `/pages/seatchList/seatchList?id=${inp}&inp=${inp}`,
    })
  },
  // 清除全部
  clearHistory() {
    wx.removeStorageSync('historys');
    this.setData({
      history_texts: []
    })
  },
  // 点击切换内容
  setInput(e) {
    this.setData({
      search_text: e.target.dataset.input
    })
    // 获取数据
    this.getDetailList()
  },
  // 长按删除
  longClear(e) {
    console.log(e.target.dataset.an);
    let ind = e.target.dataset.an
    this.setData({
      history_texts: this.data.history_texts.filter((v, i) => i !== ind)
    })

    wx.setStorageSync('historys', JSON.stringify(this.data.history_texts))

  },

  // 跳转搜索数据列表页面
  toSearchList(e) {
    // console.log(b);
    let id = e.target.dataset.id
    let inp = e.target.dataset.inp
    // console.log(e);
    wx.navigateTo({
      url: `/pages/seatchList/seatchList?id=${id}&inp=${inp}`,
    })
  },
  // 显示、隐藏
  cahngeEyesFlag() {
    this.setData({
      eyeflag: !this.data.eyeflag
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(() => {
      this.setData({
        history_texts: JSON.parse(wx.getStorageSync('historys')) || []
      })
      wx.hideLoading()
    }, 500);
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