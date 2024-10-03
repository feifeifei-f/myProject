Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scrollTop: {
      type: Number
    },
    position: {
      type: Object,
      value: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
      } // left、top、right、bottom
    },
    left: {
      type: Number,
      value: 0
    },
    right: {
      type: Number,
      value: 0
    },
    top: {
      type: Number,
      value: 0
    },
    bottom: {
      type: Number,
      value: 0
    },
    hMargin: { // 拖动后的水平方向最小边距（左右边距）
      type: Number,
      value: 10
    },
    vMargin: { // 拖动后的垂直方向最小边距(上下边距)
      type: Number,
      value: 10
    }
  },
  data: {
    x: 410,
    y: 550,
    windowWidth: wx.getSystemInfoSync().windowWidth,
    windowHeight: wx.getSystemInfoSync().windowHeight,
    elementWidth: 0,
    elementHeight: 0,
    animation: false,
    isMoved: false ,// 是否拖动
  },

  lifetimes: {
    attached() {
      // 初始化位置
      wx.createSelectorQuery().in(this).select('.float_box').boundingClientRect().exec((res) => {
        console.log(233, res);
        this.data.elementWidth = res[0].width;
        this.data.elementHeight = res[0].height;
        if (this.properties.position.left || this.properties.left) {
          this.data.x = this.properties.position.left || this.properties.left;
        }
        if (this.properties.position.right || this.properties.right) {
          this.data.x = this.data.windowWidth - this.data.elementWidth - (this.properties.position.right ? this.properties.position.right : this.properties.right);
        }
        if (this.properties.position.top || this.properties.top) {
          this.data.y = this.properties.position.top || this.properties.top;
        }
        if (this.properties.position.bottom || this.properties.bottom) {
          this.data.y = this.data.windowHeight - this.data.elementHeight - (this.properties.position.bottom ? this.properties.position.bottom : this.properties.bottom);
        }

        this.setData({
          elementWidth: this.data.elementWidth,
          elementHeight: this.data.elementHeight,
          x: this.data.x,
          y: this.data.y
        });
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTouchend(e) {
      // console.log(this.data.scrollTop);
      wx.pageScrollTo({
        scrollTop: 0
      })
      // console.log(this.data.isMoved, this.data.x, e.changedTouches[0].clientX, this.data.elementWidth);
      if (!this.data.isMoved) return;
      const currentX = e.changedTouches[0].clientX;
      let currentY = e.changedTouches[0].clientY;
      if (currentY <= this.properties.vMargin) {
        currentY = this.properties.vMargin + this.data.elementHeight / 2;
      }
      if (currentY >= this.data.windowHeight - this.properties.vMargin) {
        currentY = this.data.windowHeight - this.properties.vMargin - this.data.elementHeight / 2;
      }
      if (currentX + this.data.elementWidth / 2 > this.data.windowWidth / 2) {
        this.setData({
          x: this.data.windowWidth - this.properties.hMargin - this.data.elementWidth,
          y: currentY - this.data.elementHeight / 2
        });
      }
      if (currentX + this.data.elementWidth / 2 <= this.data.windowWidth / 2) {
        this.setData({
          x: this.properties.hMargin,
          y: currentY - this.data.elementHeight / 2
        });
      }

    },
    addAnimation() {
      this.data.isMoved = false;
      if (!this.data.animation) {
        this.setData({
          animation: true
        });
      }
    },
    onTouchMove() {
      this.data.isMoved = true;
    },
   
  }
});