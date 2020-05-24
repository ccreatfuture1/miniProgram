//index.js
//获取应用实例
const app = getApp()

Page({
  examine:function(){
    wx.navigateTo({
      url: '/pages/examine/examine',
    })
  },
  diary:function(){
    wx.navigateTo({
      url: '/pages/index/diary',
    })
  },
  drugs:function(){
    wx.navigateTo({
      url: '/pages/drugs/drugs',
    })
  },
  chineseHeal:function(){
    wx.navigateTo({
      url: '/pages/chineseHealth/index',
    })
  },
  askDoctor:function(){
    wx.navigateTo({
      url: '/pages/askDoctor/index',
    })
  },
  recommend:function(){
    wx.navigateTo({
      url: '/pages/recommend/recommend',
    })
  },
  feiyan:function(){
    wx.navigateTo({
      url: '/pages/feiyan/feifan',
    })
  }
})
