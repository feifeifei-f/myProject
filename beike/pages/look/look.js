// pages/userPage/userPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTime: '',
    rankList: [{
        headimgurl: 'http://cdn.zhoukaiwen.com/head4.jpg',
        name: '张美丽',
        post: '全栈工程师',
        text:'宜居房产',
        city: '深圳',
        salary: '17500'
      }, {
        headimgurl: 'http://cdn.zhoukaiwen.com/head5.jpg',
        name: '李宏阳',
        post: 'Java后台工程师',
        text:'腾达房产',
        city: '杭州',
        salary: '17000'
      }, {
        headimgurl: 'http://cdn.zhoukaiwen.com/head6.png',
        name: '吕王浩',
        post: 'Web前端工程师',
        text:'背板房产',
        city: '西安',
        salary: '16000'
      },
      {
        headimgurl: 'http://cdn.zhoukaiwen.com/head7.jpg',
        name: '张致鹏',
        post: 'Web前端工程师',
        text:'快破房产',
        city: '西安',
        salary: '15500'
      },
      {
        headimgurl: 'http://cdn.zhoukaiwen.com/head8.jpg',
        name: '李美静',
        post: 'Web前端工程师',
        text:'阿巴房产',
        city: '西安',
        salary: '15000'
      },
      {
        headimgurl: 'http://cdn.zhoukaiwen.com/head9.jpg',
        name: '周胜德',
        post: 'Web前端工程师',
        text:'嘎嘎房产',
        city: '西安',
        salary: '14000'
      },
      {
        headimgurl: 'http://cdn.zhoukaiwen.com/head10.jpeg',
        name: '赵敏',
        post: 'Web前端工程师',
        text:'我行房产',
        city: '西安',
        salary: '13500'
      }
    ]
  },
  getTime: function () {

    var date = new Date(),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate(),
      hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
      minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
      second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    month >= 1 && month <= 9 ? (month = "0" + month) : "";
    day >= 0 && day <= 9 ? (day = "0" + day) : "";
    var timer = year + '-' + month + '-' + day + ' ' + hour + ':00';
    this.nowTime = timer
    console.log(this.nowTime);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  closelogin() {
    wx.removeStorageSync('users')
    wx.reLaunch({
      url: '/pages/home/home',
    })
  },
  onLoad(options) {
    let users = wx.getStorageSync('users')
    this.setData({
      userTel: users.userTel
    })
    this.getTime()
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