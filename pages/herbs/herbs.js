
Page({
  data: {
    currentTab: 0,  //对应样式变化
    scrollTop: 0,  //用作跳转后右侧视图回到顶部
    picker:{
      arr: ['人参','当归','何首乌','枸杞'],
      index: 0
    },
    
  },

  pickerChange: function(e){
    this.setData({
      'picker.index': e.detail.value
    })
  },
 //从服务器中加载数据
    onLoad: function () {
      var _this = this;
      wx.request({
        url: 'http://127.0.0.1:8081/web/Herbs/showUserInfo',
        success: function (res) {
          _this.setData({
            herbs: res.data,
          })
        }
      })
    },
})
    
