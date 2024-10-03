// components/list-card/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array
    },
    ind:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    desc:null
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(e){
     
      let id = e.currentTarget.dataset.param
      // console.log(id);
      wx.navigateTo({
        url: '/pages/detail/detail?id='+id,
      })
    }
  }
})