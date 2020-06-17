//index.js
Page({
  data: {
    item: 0,
    tab: 0,

  },

  // 标签栏点击监听
  changeItem(e) {
    var item = e.currentTarget.dataset.item;
    this.setData({
      item: item
    })
  },
  begin:function() {
    var document=Document;
    document.getElementById("content").innerHTML('<camera device-position="back" flash="off" binderror="error" style="width: 100%; height: 500px;"></camera>')
  },
 
  // 滑块滑动时的监听函数
  changeTab: function (e) {
    console.log(e.detail)
    // e.detail.current为当前显示页面的索引号
    this.setData({
      tab: e.detail.current
    })
  },
})