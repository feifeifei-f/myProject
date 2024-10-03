// components/movable/movable.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

    isShow: false,
    animationSave: {},
    animationShare: {},
    animationHome: {},
    animationModal: {},
    animationContainer:{},
    x: wx.getSystemInfoSync().windowWidth - 60, //x的位置，此处的应为当前元素width+right 或left
    y: wx.getSystemInfoSync().windowHeight - 120, //y的位置，此处应为前元素的height+bottom 或top
  },
  /**
   * 组件的方法列表
   */
  methods: {


    // 点击判断开启还是关闭
    contorlAnimate(){
      if(this.data.isShow){
        this.closeAnimate()
      }else{
        this.showAnimate()
      }
    },
    // 点击开启
    closeAnimate() {
      var animationModal = wx.createAnimation({
        duration: 200,
        timingFunction: 'ease-in'
      })
      animationModal.opacity(0).scale(0.0, 0.0).step()

  
      var animationSave = wx.createAnimation({
        duration: 200,
        timingFunction: 'ease-in'
      })
      animationSave.opacity(0).scale(0.0, 0.0).translateX(0).step()
  
      var animationShare = wx.createAnimation({
        duration: 200,
        timingFunction: 'ease-in'
      })
      animationShare.opacity(0).scale(0.0, 0.0).translateX(0).step()
  
      var animationHome = wx.createAnimation({
        duration: 200,
        timingFunction: 'ease-in'
      })
      animationHome.opacity(0).scale(0.0, 0.0).translateX(0).step()
      this.data.isShow = false
      this.setData({
        animationSave: animationSave.export(),
        animationShare: animationShare.export(),
        animationHome: animationHome.export(),
        animationModal: animationModal.export()
      })
    },
    // 点击关闭
    showAnimate() {
      var animationModal = wx.createAnimation({
        duration: 200,
        timingFunction: 'ease-out'
      })
      animationModal.opacity(0.0).scale(300, 300).step()

      var animationSave = wx.createAnimation({
        duration: 200,
        timingFunction: 'ease-out'
      })
      animationSave.opacity(1).scale(0.8, 0.8).translateX(-50).translateY(-20).step()
  
      var animationShare = wx.createAnimation({
        duration: 200,
        timingFunction: 'ease-out'
      })
      animationShare.opacity(1).scale(0.8, 0.8).translateX(-50).translateY(40).step()
  
      var animationHome = wx.createAnimation({
        duration: 200,
        timingFunction: 'ease-out'
      })
      animationHome.opacity(1).scale(0.8, 0.8).translateX(0).translateY(-60).step()
      this.data.isShow = true
      this.setData({
        animationSave: animationSave.export(),
        animationShare: animationShare.export(),
        animationHome: animationHome.export(),
        animationModal: animationModal.export()
      })
    },


    
    clickHome(){
      // 回到顶部
      wx.pageScrollTo({
        scrollTop: 0
      })
    },
    
    clickShare() {
      wx.navigateTo({
        url: '/pages/map/map',
      })
    },
    // 跳转
    clickSave() {
      wx.navigateTo({
        url: '/pages/uploadPage/houseUp/houseUp',
      })
    },
    //点击事件
    // handlerDel() {
    //   console.log('点击事件')
    //   // 回到顶部
    //   wx.pageScrollTo({
    //     scrollTop: 0
    //   })
    //   wx.navigateTo({
    //     url: '/pages/Uploadpage/HouseUp',
    //   })
    // }
  }
})
