const photoBusiness = require('./utils/photoBusiness')
// canvas id
const canvasId = 'canvas1';
// A panorama image size should be 2048 x 1024.
const imageUrl = '../utils/sample.jpg';

var imgArr=[
    "./utils/cloakroom/mobile_r.jpg",
    "./utils/cloakroom/mobile_l.jpg",
    "./utils/cloakroom/mobile_u.jpg",
    "./utils/cloakroom/mobile_d.jpg",
    "./utils/cloakroom/mobile_f.jpg",
   "./utils/cloakroom/mobile_b.jpg",
]


// if device motion
var isDeviceMotion = false;
var isIOS = false;

Page({
  data: {
  },
  onLoad() {
    const system = wx.getSystemInfoSync().system;
    // if iOS
    if (system.indexOf('iOS') !== -1) {
      isIOS = true;
    }
    setTimeout(function () {
      photoBusiness.initThree(canvasId, imgArr, isIOS);
    }, 150);
  },
  onUnload() {
    photoBusiness.stopAnimate();
    photoBusiness.stopDeviceMotion();
  },
  bindtouchstart_callback(event) {
    // stop the Device Motion
    if (isDeviceMotion) {
      photoBusiness.stopDeviceMotion();
    }

    photoBusiness.onTouchstart(event);
  },
  bindtouchmove_callback(event) {
    photoBusiness.onTouchmove(event);
  },

  toggleDeviceMotion() {
    if (isDeviceMotion) {
      photoBusiness.stopDeviceMotion();
    } else {
      photoBusiness.startDeviceMotion();
    }
    isDeviceMotion = !isDeviceMotion;
  },
  scanQRCode() {
    wx.scanCode({
      success(res) {
        console.log('scanCode', res);
        // the url of panorama image
        var imgArr = res.result;
        // the rotation of Y
        var deg = -90;
        photoBusiness.updatePanorama(imgArr, deg);
      }
    });
  }
});
