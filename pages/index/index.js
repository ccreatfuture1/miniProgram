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
    recommend:[{
      id:'0',
      title:'人参的功效真的有传说中的那么好吗？',
      img:'/image/index/rensen.jpg',
      txt:' 首先给大家陈列一组我国目前的人群亚健康状况的数据： 我国亚健康人群比例在2017年就高达76% ,真正健康的人仅占不到30%！从亚健康人群的年龄段分布来看, 30岁以上的占比高达75% ,然而这个数字还在持续地增加中。通俗地说，就是这76%的人通常没有器官、组织、功能上的病症和缺陷，但是自我感觉不适，疲劳乏力，反应迟钝、活力降低、适应力下降，经常处在焦虑、烦乱、无聊、无助的状态中，自觉活得很累。 焦虑、烦乱、无聊、无助所导致的身体状况频发，其实这些都是我们现在大多数人的状况，身体疾病越来越多，我们嘴上总是说着要按时睡觉不要熬夜，但是有时候就是迫不得已要加班，要熬夜...... 这时候，养生就该提上日程了，毕竟我们都不再是18岁的少女了，身体的保养一定是一件值得注意的事情了。 而人参，就是很好地养生补品，并且人参的滋补作用远比你知道的还要多。'
    },{
      id:'1',
      title:'中医5个方法让你远离 “宫寒”',
      img:'/image/index/gonghan.jpg',
      txt:'“宫寒”在中医古籍及中医妇科相关专著中并无记载，它是中医“寒凝胞宫”的一个通俗说法，可以理解为由于外来之寒邪或者是人体阳气不足内寒停滞在女性胞宫，使生殖器官的功能受损而发生的一系列疾病症状的统称 “宫寒”热词「深入人心」 热词“宫寒”是一个并非严谨的医学概念，而是把“寒凝胞宫”的实寒证的表现、“下焦虚寒”的虚寒症的表现、“肾阳虚”的虚寒证的表现，用乾坤大挪移综合在一起的一种说法。如今，“宫寒”一词被广泛地运用在日常生活中，很多女性也从不同的途径对这个词有深切的感受和认识，接下来我们一起来探究一下引起“宫寒”的相关病因和养生知识。 为什么会“宫寒”?1.禀赋不足 先天因素：受父母遗传。后天因素：不注意保暖，贪凉、爱吃寒凉食物，过度劳累引起阳气损耗。2. 脾肾阳虚 脾阳虚，会使气血生化无源，气血亏虚，阳气虚衰。 肾阳虚，会使身体虚弱亏损，阳气不足。 3.饮食贪凉女性体质偏寒，如果再贪吃生冷食物，如冰淇淋、冰镇冷饮等，即使是夏天，也会消耗自身阳气，使寒气侵入胞宫。4.外寒侵袭夏天对着空调直吹，身体受凉;穿低腰裤、短上衣，腰腹着凉;冬天穿超短裙，不注意保暖，下肢寒凉;坐“冷”板凳，寒气将直袭胞宫。 5.过度疲劳 身体过度疲劳会损耗体内阳气，导致身体的新陈代谢减慢，身体相应器官的功能减退。自然而然，胞宫也会受此影响。“宫寒”有哪些危害?1. “宫寒”会导致月经失调、周期紊乱、月经量少、痛经、白带稀薄，甚至闭经。 2. “宫寒”在妊娠期间会导致漏胎、胎动不安、先兆流产、腹痛、泄泻，严重时出现胎儿发育迟缓、死胎。. 产后“宫寒”会影响身体恢复，如子宫修复不良、恶露不止和产后腹痛、小便不通、产后怕冷等。 4. “宫寒”还会导致女性较难怀孕、不孕，且与寒性的带下病、盆腔炎、炎有关。 如何预防、调理“宫寒”?1. 全面保暖，驱寒暖宫在阴冷的地方注意保暖，如肩膀、后腰、脖子、腿脚等部位。寒冷季节不要露腿穿短裙，以防寒从脚下生。如果被雨淋、或是湿着头发被冷风吹，一定要及时喝些驱寒的汤水。比如说生姜红糖水。特别提醒：女性流产后，体质相对虚弱，极易受风寒的侵扰，所以要注意保暖，特别是腹部和下肢。2. 保持乐观的心态和充足的睡眠乐观心态化解体内郁气。重视自我保养、调节身心健康，做到起居有规律、营养均衡，及时调节情绪，保持乐观心情和积极的处事态度，这样有利于储藏阳气。“养生之要，当以睡眠居先，睡能养气，睡能调神。”充足的睡眠是保证身体各器官平衡调节的前提，是身体进行自我恢复、调整的重要环节，充足睡眠能恢复体力，增强免疫力，促进生长发育，延缓衰老，平衡内分泌。3. 动则生阳，日常多运动“动则升阳”，合理运动是改善体质的最佳方式。尽量在中午阳光充足的时候到户外活动，接受自然界中的阳气。宫寒的人一般偏于安静沉稳，对于寒性体质者来说特别需要通过运动来改善体质，快步走是最简便的办法。步行，尤其是在卵石路上行走，能刺激足底的经络和穴位，可以疏通经脉、调畅气血、改善血液循环，使全身温暖。4、饮食调理，祛除宫寒不止是冬季，一年四季都要避免吃生冷的食物、喝冰饮。不要过食寒性食物，如梨、西瓜、黄瓜、绿豆、苦瓜等。多吃补气暖身的食物，如核桃、枣、花生、羊肉、狗肉、鸡肉、鳝鱼、洋葱、韭菜、桂圆等。每当遇寒后喝一杯姜枣茶，可以主动化解体内寒凉之气，长期对调理“宫寒”十分有益。5. 利用经络穴位调理宫寒艾条温灸：一般选取肚脐正中直下1.5寸处的气海穴和肚脐正中直下3寸处的关元穴，用艾条每次灸30分钟，长期坚持可以温肾、暖宫、散寒祛除“宫寒”。中药泡脚：艾叶、肉桂、花椒煮水泡脚，每日20分钟，可温经散寒、通络、温暖胞宫，不失为调理“宫寒”的一个不错的选择。'
    }]
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
recommend:function(e){
    console.log(e)
    console.log(e.currentTarget.id);
    var recommendIndex = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/recommend/recommend?recommendIndex='+recommendIndex,
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
