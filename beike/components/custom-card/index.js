// components/costom-card/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    icons:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
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
  }
})