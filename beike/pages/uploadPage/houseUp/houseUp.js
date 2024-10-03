Page({
  data: {
    icons: {
      ind: 1,
      text: '房源发布',
      callback_icon: '../../images/login_image/left.png',
      tohome_icon: '../../images/login_image/home.png'
    },
    itemHouse: {
      "title": "1234",
      " desc": "1234",
      " keyword": "1234",
      " price": "1234",
      "price1": "1234",
      "img": "1234",
      "rob": "1234",
      "img1": "1234",
      "img2": "1234",
      "img3": "1234",
      " img4": "1234",
      " img5": "1234",
      " typehouse": "1234",
      "  year": "1234",
      "  room ": "1234",
      "  bedroomA": "1234",
      "  bedroomB": "1234",
      "  star": "1234"
    },
    //类目一
    titleIndex: 0,
    // 控制显示
    piker1: false,
    // 户型
    huxing: 0,
    // 朝向
    chaoxiang: 0,
    // 楼层
    louceng: 0,
    // 类目二
    titleIndex_2: 0,
    piker2: false,
    // 装修
    zhuangxiu: 0,
    // 供暖
    gongnuan: 0,
    // 电梯
    dianti: 0,
    total: "",
    // 总价
    sell: "",
    // /平
    price: "",
    // rob
    rob: '水上乐园抢手房源榜第4名',
    // desc
    desc: '',
    // 面积
    area: "",

    content: "",
    dong: "",
    danyuan: "",
    lou: "",
    hao: "",
    // 类型
    keyword: "",
    // 年份
    year: "",
    // 标题
    title: "",
    // 地址
    address: "",
    // 房型图
    typehouse: 'https://ke-image.ljcdn.com/hdic-frame/standard_1eee27e5-2a5c-4abb-ba04-5d869c2a4990.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com',
    // room
    room: '16.87m²/南/普通窗',
    // 房源数据
    releaseHouseList: {},
    // 类目三
    piker3: false,
    titleIndex_3: 0,
    images: [],
    // 住宅
    zhuzhai: 0,
    // 商品
    shanpin: 0,
    // 产权
    chanquan: 0,
    name: "",
    number: "",

    formData: {
      piker: [{
          three: ["1室", "2室", "3室", "4室", "5室", "6室"],
          three1: ["0厅", "1厅", "2厅", "3厅", "4厅", "5厅", "6厅"],
          three2: ["0卫", "1卫", "2卫", "3卫", "4卫", "5卫"],
          one: "户型",
          two: "2室2厅1厅",
          one_1: "装修",
          two_1: "简单装修",
          one_2: "房屋类型",
          two_2: "普通住宅"
        },
        {
          three_1: ["东南", "西北", "东北", "南北", "东西", ],
          zhuangxiu: ["毛坯", "简单装修", "中等装修", "精装修", "豪华装修"],
          gongnuan: ["不供暖", "不想供暖", "凭啥供暖", "就不供暖"],
          dianti: ["有电梯", "无电梯", "有电梯", "有电梯", "有电梯", "有电梯"],
          one: "朝向",
          two: "南北",
          one_1: "供暖",
          two_1: "集中供暖",
          one_2: "产权类型",
          two_2: "商品房住宅"
        },
        {
          three_2: ["1层", "2层", "3层", "4层", "5层", "6层", "7层", "8层", "9层", "10层", "11层", "12层", ],
          treee_3: ["共1层", "共2层", "共3层", "共4层", "共5层", "共6层", "共7层", "共8层", "共9层", "共10层", "共11层", "共12层", "共13层", "共14层"],
          putong: ["普通住宅", "公寓", "别墅", "别墅", "别墅", "别墅", "别墅", "别墅"],
          shangpin: ["商品房", "公寓", "宿舍", "宿舍", "宿舍", "宿舍", "宿舍", "宿舍", "宿舍", "宿舍"],
          nianxian: ["70年", "80年", "90年", "80年", "80年", "80年", "80年", "80年", "80年"],
          one: "楼层",
          two: "8/8",
          one_1: "电梯",
          two_1: "有电梯",
          one_2: "产权年限",
          two_2: "70年产权"
        }
      ]
    },
    fileList: [{
      url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      name: '图片1',
      deletable: true,
    }, ]
  },
  //  文件上传
  afterRead(event) {
    let that = this
    const {
      file
    } = event.detail;
    console.log(event.detail.file.url);
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      formData: {
        user: 'test'
      },
      success(res) {
        console.log(res);
        // 上传完成需要更新 fileList
        // const {
        //   fileList = []
        // } = that.data;
        // fileList.push({
        //   ...file,
        //   url: res.data
        // });
        // that.setData({
        //   fileList
        // });
      },
    });
  },
  picker1() {
    this.setData({
      piker1: true
    })
  },
  cancel1() {
    this.setData({
      piker1: false
    })
  },
  confirm1() {
    this.setData({
      piker1: false
    })
  },
  // 第一个选择框
  choose1(e) {
    this.setData({
      titleIndex: e.currentTarget.dataset.index
    })
  },
  // 户型
  bindchange1(e) {
    let val = 'formData.piker[0].two'
    this.setData({
      [val]: this.data.formData.piker[0].three[e.detail.value[0]] + this.data.formData.piker[0].three1[e.detail.value[
        1]] + this.data.formData.piker[0].three2[e.detail.value[2]]
    })
    this.setData({
      huxing: e.detail.value,
    })
  },
  // 朝向
  bindchange1_1(e) {
    let val = 'formData.piker[1].two'
    this.setData({
      [val]: this.data.formData.piker[1].three_1[e.detail.value[0]]
    })
    this.setData({
      chaoxiang: e.detail.value
    })
  },
  // 楼层
  bindchange1_2(e) {
    this.setData({
      total: e.detail.value[1]
    })
    let val = 'formData.piker[2].two'
    this.setData({
      [val]: this.data.formData.piker[2].three_2[e.detail.value[0]] + '/' + this.data.formData.piker[2].treee_3[e.detail
        .value[1]]
    })
    this.setData({
      louceng: e.detail.value
    })
    // 楼层louceng
    console.log(
      // 朝向
      //  户型
      this.data.formData.piker[0].three[this.data.huxing[0]],
      this.data.formData.piker[0].three1[this.data.huxing[1]],
      this.data.formData.piker[0].three2[this.data.huxing[2]],
      // 朝向    
      this.data.formData.piker[1].three_1[this.data.chaoxiang[0]],
      // 楼层louceng
      this.data.formData.piker[2].treee_3[this.data.louceng[0]]
    )
  },
  // 总价
  inputSell(e) {
    this.setData({
      sell: e.detail.value
    })
    // console.log(this.data.sell)
  },
  // /平方
  inputPrice(e) {
    this.setData({
      price: e.detail.value
    })
  },
  // 面积
  inputArea(e) {
    this.setData({
      area: e.detail.value
    })
    console.log(this.data.area)

  },
  content(e) {
    this.setData({
      content: e.detail.value
    })
    console.log(this.data.content)
  },
  dong(e) {
    this.setData({
      dong: e.detail.value
    })
    console.log(this.data.dong)
  },
  danyuan(e) {
    this.setData({
      danyuan: e.detail.value
    })
    console.log(this.data.danyuan)
  },
  lou(e) {
    this.setData({
      lou: e.detail.value
    })
    console.log(this.data.lou)
  },
  hao(e) {
    this.setData({
      hao: e.detail.value
    })
    console.log(this.data.hao)
  },
  // 年份
  inputYear(e) {
    this.setData({
      year: e.detail.value
    })
  },
  // 类型
  inputKeyword(e) {
    this.setData({
      keyword: e.detail.value
    })
  },
  // 标题
  title(e) {
    this.setData({
      title: e.detail.value
    })
  },
  // 地址
  inputAddress(e) {
    this.setData({
      address: e.detail.value
    })
  },
  // 图片
  chooseImage() {
    let that = this;
    wx.chooseImage({
      count: 9,
      success(res) {
        that.setData({
          images: that.data.images.concat(res.tempFilePaths)
        })
        console.log(that.data.images)
      }
    })





  },
  // 图片预览
  previewImage(e) {
    let index = e.currentTarget.dataset.index
    let that = this;
    wx.previewImage({
      urls: that.data.images,
      current: that.data.images[index]
    })
  },
  // 名字
  name(e) {
    this.setData({
      name: e.detail.value
    })
  },
  // 手机号
  numberval(e) {
    console.log(e.detail.value)
    this.setData({
      number: e.detail.value
    })
  },
  bindMultiPickerChange(e) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      releaseHouseList: {
        rob: this.data.rob,
        typehouse: this.data.typehouse,
        room: this.data.room,
        bedroomA: this.data.room,
        bedroomB: this.data.room,
        star: Math.floor(Math.random() * (5 - 1 + 1)) + 1
      }
    })
    // console.log(this.data.releaseHouseList);
  },
  // 名字

  // 下一步
  nextPage() {
    let {
      images,
      sell,
      price,
      year,
      keyword,
      title,
      name,
      number,
      address
    } = this.data
    this.setData({
      desc: this.data.formData.piker[0].three[this.data.huxing[0]] + this.data.formData.piker[0].three1[this.data.huxing[1]] + '/' + this.data.area + 'm²' + '/' + this.data.formData.piker[1].three_1[this.data.chaoxiang[0]] + '/',
      releaseHouseList: {
        ...this.data.releaseHouseList,
        desc: this.data.desc + address,
        price: sell,
        price1: price + '元/平',
        year: year + '年',
        keyword: keyword,
        title: title,
        userID: name,
        phone: number,
        img: images[0],
        img1: images[1],
        img2: images[2],
        img3: images[3],
        img4: images[4],
        img5: images[5],
      }
    })
    // console.log(this.data.releaseHouseList);
    console.log(images, sell, price, year, keyword, title, name, number, address, this.data.desc);
    if (!this.data.desc) {
      wx.showToast({
        title: '输入不能为空',
        duration: 1000,
        icon: 'error'
      })

      return;
    } else {
      wx.setStorageSync('releaseHouseList', this.data.releaseHouseList)
      wx.navigateTo({
        url: "/pages/uploadPage/releasehouse/releasehouse"
      })

    }


  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})