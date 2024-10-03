// pages/detail/detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList: [],
    id: '',
    item: {},
    navs: ['VR', '图片', '户型', '装修灵感'],
    act: 0,
    banners: [],
    icons: {
      ind: 0,
      text: '详情',
      callback_icon: '../../images/detail_image/back.png',
      tohome_icon: '../../images/detail_image/home.png'
    },
    address: ['教育', '交通', '医疗', '生活', '休闲'],
    addressInd: 0
  },
  // 获取数据
  getDetailList() {
    let {
      detailList,
      item
    } = this.data
    // console.log(wx.getStorageSync('list'));
    this.setData({
      item: detailList.find((v, i) => i === this.data.id)
    })
    console.log(item);
    // wx.request({
    //   url: `http://${app.globalData.globalInterface}:4444/details?id=` + this.data.id,
    //   success: (res) => {
    //     console.log(res.data.data);
    //     const item = res.data.data
    //     this.setData({
    //       item: item[0],
    //       banners: [
    //         item[0].img,
    //         item[0].img1,
    //         item[0].img2,
    //         item[0].img3,
    //         item[0].img4,
    //         item[0].img5,
    //       ]
    //     })
    //     // console.log(this.data.banners);
    //   }
    // })
  },
  // 导航切换 
  changeNav(e) {
    let param = e.currentTarget.dataset.param
    let address = e.currentTarget.dataset.address
    this.setData({
      act: param,
      addressInd: address
    })
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
  // 进入vr看房
  toHouseViewing() {
    wx.navigateTo({
      url: '/pages/VRHouse/VRHouse',
    })
  },
  // 跳转地图
  toMapPage() {
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(() => {
      this.setData({
        id: e.id,
        detailList: wx.getStorageSync('list')
      })
      this.setData({
        item: this.data.detailList.find((v, i) => v.id == this.data.id)
      })
      // console.log(item);
      this.setData({
        banners: [
          this.data.item.img,
          this.data.item.img1,
          this.data.item.img2,
          this.data.item.img3,
          this.data.item.img4,
          this.data.item.img5,
        ]
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