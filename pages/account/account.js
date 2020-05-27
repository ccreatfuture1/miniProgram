//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  
  },
  car:function(){
    wx.navigateTo({
      url: '/pages/car/car',
    })
  }
})
