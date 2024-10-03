// pages/mymsg/mymsg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages_list: [{
        img: '../../images/login_image/cxm.png',
        msg_title: '二组',
        msg_text: '组长在摸鱼'
      },
      {
        img: '../../images/login_image/cxm.png',
        msg_title: '奥巴马',
        msg_text: 'Hey, buddy, would you like to come out for a drink tonight'
      },
      {
        img: '../../images/login_image/cxm.png',
        msg_title: '裴杨',
        msg_text: '你小子又偷学是吧'
      },
      {
        img: '../../images/login_image/cxm.png',
        msg_title: '周文龙',
        msg_text: '嘶··嘶···嘶嘶嘶··汪~汪汪汪~汪'
      }
    ],
    promptflag: false,
    flag: true,
    optionIndex: -1,
    clientX:0,
    clientY:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  // 跳转聊天
  toMessage() {
    // if (this.data.promptflag) {
    //   return;
    // }
    wx.navigateTo({
      url: '/pages/message/message',
    })
  },
  // 长按事件
  onLongPress(e) {
    // console.log(e);
    let {clientX,clientY} = e.touches[0]
    this.setData({
      clientX,
      clientY
    })
    console.log(clientX,clientY);
    console.log(this.data.clientX,this.data.clientY);
    let index = e.currentTarget.dataset.index
    this.setData({
      promptflag: !this.data.promptflag,
      optionIndex: index
    })
    // console.log(this.data.optionIndex);
  },
  // 置顶
  topChat() {
    let {optionIndex,messages_list} = this.data
    let chat = messages_list.splice(optionIndex,1)[0]
    console.log(chat);
    messages_list.unshift(chat)
    this.setData({
      messages_list,
      promptflag: !this.data.promptflag,
    })

    // console.log(10);
  },
  // 删除
  deleteChat() {
    let {optionIndex,messages_list} = this.data
    messages_list.splice(optionIndex,1)
    this.setData({
      messages_list,
      // messages_list:this.data.messages_list.filter((v,i)=>i!==this.data.optionIndex),
      promptflag: !this.data.promptflag,
    })
    console.log(100);
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