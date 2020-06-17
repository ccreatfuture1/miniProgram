//index.js
Page({
  data: {
    item: 0,
    tab: 0,
    hotlist: [],
    playlist: [{
      id: 1,
      title: '海之泪',
      singer: '出羽良彰',
      src: 'http://qc0cp61br.bkt.clouddn.com/music/sleepFive.mp3',
      coverImgUrl: 'http://qc0cp61br.bkt.clouddn.com/image/1.jpg'
    }, {
      id: 2,
      title: '两个人的心情',
      singer: '和田薰',
      src: 'http://qc0cp61br.bkt.clouddn.com/music/sleepFour.mp3',
      coverImgUrl: 'http://qc0cp61br.bkt.clouddn.com/image/2.jpg'
    }, {
      id: 3,
      title: '记忆',
      singer: '三轮寻',
      src: 'http://qc0cp61br.bkt.clouddn.com/music/sleepOne.mp3',
      coverImgUrl: 'http://qc0cp61br.bkt.clouddn.com/image/3.jpg'
    }
    , {
      id: 4,
      title: '爬上月亮',
      singer: '出羽良彰',
      src: 'http://qc0cp61br.bkt.clouddn.com/music/sleepTwo.mp3',
      coverImgUrl: 'http://qc0cp61br.bkt.clouddn.com/image/4.jpg'
    }, {
      id: 5,
      title: '大海的世界',
      singer: '明天',
      src: 'http://qc0cp61br.bkt.clouddn.com/music/sleepTwo.mp3',
      coverImgUrl: 'http://qc0cp61br.bkt.clouddn.com/image/5.jpg'
    }
    , {
      id: 6,
      title: '478促眠呼吸法',
      singer: '',
      src: 'http://qc0cp61br.bkt.clouddn.com/music/sleepFour.mp3',
      coverImgUrl: 'http://qc0cp61br.bkt.clouddn.com/image/2.jpg'
    }, {
      id: 7,
      title: '均等呼吸放松法',
      singer: '',
      src: 'http://qc0cp61br.bkt.clouddn.com/music/sleepOne.mp3',
      coverImgUrl: 'http://qc0cp61br.bkt.clouddn.com/image/3.jpg'
    }
    , {
      id: 8,
      title: '冥想禅修呼吸法',
      singer: '',
      src: 'http://qc0cp61br.bkt.clouddn.com/music/sleepTwo.mp3',
      coverImgUrl: 'http://qc0cp61br.bkt.clouddn.com/image/4.jpg'
    }, {
      id: 9,
      title: '固本培元呼吸法',
      singer: '',
      src: 'http://qc0cp61br.bkt.clouddn.com/music/sleepTwo.mp3',
      coverImgUrl: 'http://qc0cp61br.bkt.clouddn.com/image/5.jpg'
    }
    , {
      id: 10,
      title: '细细春雨',
      singer: '',
      src: 'http://qc0cp61br.bkt.clouddn.com/music/%E7%BA%AF%E9%9F%B3%E4%B9%90%20-%20%E5%85%A5%E7%9C%A0%E9%9B%A8%E5%A3%B0.mp3',
      coverImgUrl: 'http://qc0cp61br.bkt.clouddn.com/image/%E9%9B%A8%E5%A3%B0.jpg'
    }, {
      id: 11,
      title: '海的声音',
      singer: '',
      src: 'http://qc0cp61br.bkt.clouddn.com/music/%E7%BA%AF%E9%9F%B3%E4%B9%90%20-%20%E6%B5%B7%E6%B5%AA%E5%92%8C%E6%B5%B7%E9%B8%A5%E7%9A%84%E5%A3%B0%E9%9F%B3.mp3',
      coverImgUrl: 'http://qc0cp61br.bkt.clouddn.com/image/%E5%AE%81%E9%9D%99.jpg'
    }
  ],
  
    play: { // 当前播放歌曲的信息
      currentTime: '00:00',
      duration: '00:00',
      percent: 0,
      title: '',
      singer: '',
      coverImgUrl: ''
    },
    state: 'paused', // 状态：paused, running
    playIndex: 0, // 当前播放歌曲的索引
    showIndex: 0 // “音乐推荐”页面切换标记，0：显示推荐首页，1：显示云音乐新歌榜
  },

  // 标签栏点击监听
  changeItem(e) {
    var item = e.currentTarget.dataset.item;
    this.setData({
      item: item
    })
  },

  // 滑块滑动时的监听函数
  changeTab: function (e) {
    console.log(e.detail)
    // e.detail.current为当前显示页面的索引号
    this.setData({
      tab: e.detail.current
    })
  },

  audioCtx: null, // 控制播放器的对象，必须在onReady中获取实例，保证页面渲染完成时完成对象实例的获取
  onReady: function () {
    this.audioCtx = wx.createInnerAudioContext();
    // 播放失败监听
    // 在回调函数中this的指向发生了改变，不在指向本页面上下午，指向了全局window上下文，解决方法有两种：
    // 1. 将回调函数改用箭头函数 =>
    // this.audioCtx.onError((res) => {
    //   console.log('播放失败：' + this.audioCtx.src);
    // })
    // 2. 在回调函数调用前先把this保存在某个局部变量中，如_this、that
    var _this = this;
    this.audioCtx.onError(function (res) {
      console.log('播放失败：' + _this.audioCtx.src);
    })
    // 播放完成自动换下一首
    this.audioCtx.onEnded(function () {
      _this.next();
    })

    // 自动更新播放进度
    this.audioCtx.onTimeUpdate(function () {
      _this.setData({
        'play.duration': formatTime(_this.audioCtx.duration), // 当前播放歌曲的总时间，单位为秒，必须格式化
        'play.currentTime': formatTime(_this.audioCtx.currentTime),
        'play.percent': _this.audioCtx.currentTime / _this.audioCtx.duration * 100
      })
    })

    // 设置列表中的第一首为播放器默认歌曲
    this.setMusic(0);

    // 格式化时间
    function formatTime(time) {
      var minute = Math.floor(time / 60) % 60;
      var second = Math.floor(time) % 60;
      return (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second)
    }
  },

  // onLoad: function () {
  //   var _this = this;
  //   wx.request({
  //     url: 'http://127.0.0.1:3001/getList',
  //     success: function (res) {
  //       _this.setData({
  //         playlist: res.data
  //       })
  //     }
  //   })
  // },

  // 拖动进度条
  sliderChange: function (e) {
    console.log(e.detail.value)
    var second = e.detail.value * this.audioCtx.duration / 100;
    // 在开发者工具中拖动进度条有效bug，但是在真机测试时没有问题
    this.audioCtx.seek(second);
  },

  setMusic: function (index) {
    // 根据索引号获取播放列表中歌曲信息
    var music = this.data.playlist[index];
    // 设置待播放的音乐资源
    this.audioCtx.src = music.src;
    // 设置待播放歌曲的一些信息
    this.setData({
      playIndex: index,
      'play.title': music.title,
      'play.singer': music.singer,
      'play.coverImgUrl': music.coverImgUrl,
      'play.currentTime': '00:00',
      'play.duration': '00:00',
      'play.percent': 0
    })
  },


  // 方法2：播放、暂停功能分为两个函数
  play: function () {
    this.audioCtx.play();
    this.setData({
      state: 'running'
    })
  },

  pause: function () {
    this.audioCtx.pause();
    this.setData({
      state: 'paused'
    })
  },

  // 下一首
  next: function () {
    var index = (this.data.playIndex >= this.data.playlist.length - 1) ? 0 : this.data.playIndex + 1;
    this.setMusic(index);
    // 当前如为播放状态，则切换到下一首时自动播放；否则为暂停状态时，不播放歌曲
    if (this.data.state === 'running') {
      this.setData({
        state: 'paused'
      })
      this.play();
    }
  },

  // 点击底部播放器的播放列表按钮
  changePage: function () {
    this.setData({
      item: 2
    })
  },

  // 点击播放列表的歌曲
  change: function (e) {
    var index = e.currentTarget.id;
    console.log(index);
    this.setMusic(index);
    this.play();
  }
 
})