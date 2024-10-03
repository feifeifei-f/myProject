Page({
  data: {
    isFocus: false, //控制input 聚焦
    wallets_password_flag: false //密码输入遮罩
  },

  set_wallets_password(e) { //获取钱包密码
    this.setData({
      wallets_password: e.detail.value
    });
    if (this.data.wallets_password.length == 6) { //密码长度6位时，自动验证钱包支付结果
      wallet_pay(this)
    }
  },
  set_Focus() { //聚焦input
    console.log('isFocus', this.data.isFocus)
    this.setData({
      isFocus: true
    })
  },
  set_notFocus() { //失去焦点
    this.setData({
      isFocus: false
    })
  },
  close_wallets_password() { //关闭钱包输入密码遮罩
    this.setData({
      isFocus: false, //失去焦点
      wallets_password_flag: false,
    })
  },
  pay() { //去支付
    pay(this)
  }
})
/*-----------------------------------------------*/
/*支付*/
function pay(_this) {
  
    _this.setData({
      wallets_password_flag: true,
      isFocus: true
    })
  

}
// 钱包支付
function wallet_pay(_this) {
  console.log('钱包支付请求函数')
}