
Page({
  data: {
    currentTab: 0,  //对应样式变化
    scrollTop: 0,  //用作跳转后右侧视图回到顶部
    picker:{
      arr: ['当归','人参','何首乌','地莲','枸杞'],
      index: 1
    },
    screenArray: [
      {
        screenId:1,
        screenName:'人参'
      },
      {
        screenId: 2,
        screenName: '枸杞'
      },
      {
        screenId: 3,
        screenName: '当归'
      },
      {
        screenId: 4,
        screenName: '钝叶草'
      },
    ], //左侧导航栏内容
    screenId: "",  //后台查询需要的字段
    childrenArray: {
      showImageUrl: 'http://img3.imgtn.bdimg.com/it/u=1798233457,4143585420&fm=26&gp=0.jpg',
      childrenScreenArray: [
        {
          screenName: '休闲零食',
          childrenScreenArray: [
            {
              screenId: 1,
              showImageUrl: 'http://img0.imgtn.bdimg.com/it/u=921197123,1741426939&fm=26&gp=0.jpg',
              screenName: '糖果'
            },
            {
              screenId: 2,
              showImageUrl: 'http://img3.imgtn.bdimg.com/it/u=46574630,3801160495&fm=26&gp=0.jpg',
              screenName: '新疆核桃'
            },
            {
              screenId: 2,
              showImageUrl: 'http://img3.imgtn.bdimg.com/it/u=46574630,3801160495&fm=26&gp=0.jpg',
              screenName: '新疆核桃'
            },
            {
              screenId: 2,
              showImageUrl: 'http://img3.imgtn.bdimg.com/it/u=46574630,3801160495&fm=26&gp=0.jpg',
              screenName: '新疆核桃'
            },
          ]
        },
       ]
    }, //右侧内容
  },
  pickerChange: function(e){
    this.setData({
      'picker.index': e.detail.value
    })
  },

  onLoad: function (options) {
    var that = this;
    
  },

  navbarTap: function (e) {
    var that = this;
    console.log(e);
    this.setData({
      currentTab: e.currentTarget.id,   //按钮CSS变化
      screenId: e.currentTarget.dataset.screenid,
      scrollTop: 0,   //切换导航后，控制右侧滚动视图回到顶部
    })
    //刷新右侧内容的数据
    var screenId = this.data.screenId;

  },
})
