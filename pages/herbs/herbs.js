
Page({
  data: {
    currentTab: 0,  //对应样式变化
    scrollTop: 0,  //用作跳转后右侧视图回到顶部
    picker:{
      arr: ['人参','当归','何首乌','枸杞'],
      index: 0
    },
    herbs:[{
       id:0,
       name:'人参',
       img:'/image/herbs/rensen.jpg',
       from:'本品为五加科植物人参Panax ginseng C. A. Mey.的干燥根。栽培者为“园参”，野生者为“山参”。多于秋季采挖，洗净；园参经晒干或烘干，称“生晒参”；山参经晒干，称“生晒山参”；经水烫，浸糖后干燥，称“白糖参”；蒸熟后晒干或烘干，称“红参”。',
       functions:'大补元气，复脉固脱，补脾益肺，生津，安神。用于体虚欲脱，肢冷脉微，脾虚食少，肺虚喘咳，津伤口渴，内热消渴，久病虚羸，惊悸失眠，阳痿宫冷；心力衰竭，心原性休克。',
       Processing:' 生晒参: 润透，切薄片，干燥。生晒山参: 用时粉碎或捣碎。 白糖参：经水烫，浸糖后干燥。红参：蒸熟后晒干或烘干。',
       usage:' 3～9g，另煎兑入汤剂服；野山参若研粉吞服，一次2g，一日2次。',
      },
      {
        id:1,
        name:'当归',
        img:'/image/herbs/danggui.jpg',
        from:'本品为伞形科植物当归Angelica sinensis （Oliv.） Diels 的干燥根。秋末采挖，除去须根及泥沙，待水分稍蒸发后，捆成小把，上棚，用烟火慢慢熏干。',
        functions:'补血活血，调经止痛，润肠通便。用于血虚萎黄，眩晕心悸，月经不调，经闭痛经，虚寒腹痛，肠燥便秘，风湿痹痛，跌扑损伤，痈疽疮疡。酒当归活血通经。用于经闭痛经，风湿痹痛，跌扑损伤。',
        Processing:' 除去杂质，洗净，润透，切薄片，晒干或低温干燥。',
        usage:' 6～12g',
       },
       {
        id:3,
        name:'何首乌',
        img:'/image/herbs/heshouwu.jpg',
        from:'本品为蓼科植物何首乌Polygonum multiflorum Thunb.的干燥块根，其藤茎称“夜交藤”。秋、冬二季叶枯萎时采挖，削去两端，洗净，个大的切成块，干燥。',
        functions:'解毒，消痈，润肠通便。用于瘰疠疮痈，风疹瘙痒，肠燥便秘；高血脂。',
        Processing:' 除去杂质，洗净，稍浸，润透，切厚片或块，干燥。',
        usage:' 6～12g',
       },
       {
        id:4,
        name:'枸杞',
        img:'/image/herbs/gouqi.jpg',
        from:'本品为茄科植物宁夏枸杞Lycium barbarum L. 的干燥成熟果实。夏、秋二季果实呈红色时采收，热风烘干，除去果梗。或晾至皮皱后，晒干，除去果梗。',
        functions:'滋补肝肾，益精明目。用于虚劳精亏，腰膝酸痛，眩晕耳鸣，内热消渴，血虚萎黄，目昏不明。',
        Processing:' 除去杂质，洗净，稍浸，润透，切厚片或块，干燥。',
        usage:' 6～12g',
       }
    ]
  },
  pickerChange: function(e){
    this.setData({
      'picker.index': e.detail.value
    })
  }
})
