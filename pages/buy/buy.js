// pages/buy/buy.js
Page({
 /**
   * 页面的初始数据
   */
  data: {
    tab: 0,
    item: 0,
    dataList:[
      {
        goods_id:1,
        goods_title:'商品标题1',
        goods_img:'http://qc0cp61br.bkt.clouddn.com/image/drug/drug1.jpg',
        goods_xiaoliang:'800',
        goods_price:'60'
      },{
        goods_id:1,
        goods_title:'商品标题2',
        goods_img:'http://qc0cp61br.bkt.clouddn.com/image/drug/drug2.jpg',
        goods_xiaoliang:'2000',
        goods_price:'70'
      }, {
        goods_id: 1,
        goods_title: '商品标题3',
        goods_img: 'http://qc0cp61br.bkt.clouddn.com/image/drug/drug3.jpg',
        goods_xiaoliang: '0',
        goods_price: '80'
      }, {
        goods_id: 1,
        goods_title: '商品标题4',
        goods_img: '/image/buy/drug1.jpg',
        goods_xiaoliang: '0',
        goods_price: '90'
      }
    ],
  },
   // 标签栏点击监听
   changeItem:function(e) {
    this.setData({
      tab: e.currentTarget.dataset.item
    })
  },
  Detail:function(){
    wx.navigateTo({
      url: '/pages/buy/Detail',
    })
  }
})