//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  goIndex() {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },
  onLoad: function () {

  },
})
