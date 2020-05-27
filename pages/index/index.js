//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
        '/image/index/feiyan01.jpg',
        '/image/index/feiyan02.jpg',
        '/image/index/feiyan03.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 2000,
},
cusImageLoad: function(e){
    var that = this;
    that.setData(WxAutoImage.wxAutoImageCal(e));
},
  examine:function(){
    wx.navigateTo({
      url: '/pages/examine/examine',
    })
  },
  diary:function(){
    wx.navigateTo({
      url: '/pages/diary/diary',
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
  },
  news:function(){
    wx.navigateTo({
      url: '/pages/news/news',
    })
  },
  course:function(){
    wx.navigateTo({
      url: '/pages/course/course',
    })
  },
  buy:function(){
    wx.navigateTo({
      url: '/pages/buy/buy',
    })
  },
  improveSleep:function(){
    wx.navigateTo({
      url: '/pages/improveSleep/improveSleep',
    })
  },
  foodRecommend:function(){
    wx.navigateTo({
      url: '/pages/food/food',
    })
  }
})
