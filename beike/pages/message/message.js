const app = getApp()


Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '', // 输入框的值
    messages: [], // 聊天记录
    scrollIntoView: '', // 滚动到指定位置
    socketOpen: false, // WebSocket连接状态
    socketMsgQueue: [], // WebSocket消息队列
    url: 'wss://172.20.10.2:3000', // WebSocket服务器地址,
    voiceflag: true,
    btnflag: true,
    heartIterval: null,
    head: {
      self: '../../images/login_image/user.png',
      server: '../../images/login_image/cxm.png'
    },
    icons: {
      ind: 1,
      text: '聊天',
      callback_icon: '../../images/login_image/left.png',
      tohome_icon: '../../images/login_image/home.png'
    }
  },
  /**
   * 生命周期函数--监听页面加载,
   */
  onLoad: function (options) {
    this.connectWebSocket() // 连接WebSocket服务器
  },
  // 切换状态
  changeVoice() {
    this.setData({
      voiceflag: !this.data.voiceflag,
      btnflag: !this.data.btnflag,
      inputValue: ''
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.closeSocket() // 关闭WebSocket连接
  },
  /**
   * 连接WebSocket服务器
   */
  // connectWebSocket: function () {
  //   var that = this
  //   // 连接
  //   wx.connectSocket({
  //     url: `ws://${app.globalData.globalInterface}:3000`,
  //     success: function (res) {
  //       console.log('WebSocket连接成功')
  //     },
  //     fail: function (res) {
  //       console.log('WebSocket连接失败:', res)
  //     }
  //   })
  //   wx.onSocketOpen(function (res) {
  //     console.log('WebSocket连接已打开')
  //     that.setData({
  //       socketOpen: true
  //     })
  //     let HeartbeatText = '连接正常，开始检测'
  //     if (!that.data.socketOpen) {
  //       clearInterval(arr)
  //       wx.showToast({
  //         title: '连接已断开，心跳检测停止',
  //       })
  //       return
  //     }
  //     var arr = setInterval(() => {
  //       that.sendSocketMessage(JSON.stringify(HeartbeatText))
  //     }, 5000);

  //     // for (var i = 0; i < that.data.socketMsgQueue.length; i++) {
  //     //   that.sendSocketMessage(that.data.socketMsgQueue[i])
  //     // }
  //     that.setData({
  //       socketMsgQueue: []
  //     })
  //   })
  //   wx.onSocketError(function (res) {
  //     console.log('WebSocket连接打开失败:', res)
  //   })
  //   wx.onSocketClose(function (res) {
  //     console.log('WebSocket连接已关闭:', res)
  //     that.setData({
  //       socketOpen: false
  //     })
  //   })
  //   // 接收的数据
  //   wx.onSocketMessage(function (res) {
  //     // console.log('接收到服务器发送的数据:', JSON.parse(res.data))
  //     // console.log(res.data);
  //     var messages = that.data.messages
  //     let backText = JSON.parse(res.data)
  //     // console.log(backText);
  //     if (typeof backText == 'string') {
  //       console.log(backText);
  //     } else {
  //       messages.push(backText)
  //     }

  //     that.setData({
  //       messages: messages,
  //       scrollIntoView: 'message-' + messages.length
  //     })
  //     // console.log(that.data.messages);
  //   })
  // },
  /**
   * 发送消息
   */
  // sendMessage: function () {
  //   // 判断连接
  //   if (!this.data.socketOpen) {
  //     wx.showToast({
  //       title: 'WebSocket未连接',
  //       icon: 'none'
  //     })
  //     return
  //   }
  //   // var message = this.data.inputValue
  //   let users = {
  //     userId: '飞飞飞',
  //     text: this.data.inputValue,
  //     role: 'self',

  //   }
  //   this.sendSocketMessage(users)
  //   this.setData({
  //     inputValue: ''
  //   })
  // },
  /**
   * 发送WebSocket消息
   */
  // sendSocketMessage: function (message) {
  //   // console.log(message);
  //   if (this.data.socketOpen) {
  //     console.log(true);
  //     wx.sendSocketMessage({
  //       data: JSON.stringify(message)
  //     })
  //   } else {
  //     this.data.socketMsgQueue.push(message)
  //     console.log(false);
  //   }
  // },
  /**
   * 监听输入框变化
   */
  onInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  }
})


// Page({
//   data: {
//     infolist: [],  // 聊天消息列表
//     message: '',  // 输入框中的消息
//     scrolltop: 0,  // 滚动条位置
//     head: {
//       self: 'https://example.com/self_head.jpg',  // 自己的头像链接
//       server: 'https://example.com/server_head.jpg'  // 对方的头像链接
//     }
//   },

//   onLoad: function () {
//     // 初始化 WebSocket 连接
//     this.socket = new WebSocket('ws://192.168.43.171:3000');

//     // 连接成功的处理
//     this.socket.onopen = () => {
//       console.log('WebSocket 连接成功');
//     };

//     // 接收消息的处理
//     this.socket.onmessage = (event) => {
//       const message = JSON.parse(event.data);
//       this.data.infolist.push({
//         role:'server',
//         content: message.content
//       });
//       this.setData({
//         infolist: this.data.infolist
//       });
//       this.scrollToBottom();
//     };

//     // 连接关闭的处理
//     this.socket.onclose = () => {
//       console.log('WebSocket 连接关闭');
//     };

//     // 发生错误的处理
//     this.socket.onerror = (error) => {
//       console.error('WebSocket 错误:', error);
//     };
//   },

//   // 输入框内容改变时的处理
//   handlechange: function (e) {
//     this.setData({
//       message: e.detail.value
//     });
//   },

//   // 发送消息的处理
//   handlesend: function () {
//     if (this.data.message) {
//       this.socket.send(JSON.stringify({
//         content: this.data.message
//       }));
//       this.data.infolist.push({
//         role:'self',
//         content: this.data.message
//       });
//       this.setData({
//         infolist: this.data.infolist,
//         message: ''
//       });
//       this.scrollToBottom();
//     }
//   },

//   // 滚动到聊天底部
//   scrollToBottom: function () {
//     const query = wx.createSelectorQuery();
//     query.select('.content-info').boundingClientRect((rect) => {
//       if (rect) {
//         this.setData({
//           scrolltop: rect.height
//         });
//       }
//     }).exec();
//   }
// });