Component({
  data:{
    logoList1: [
      {
        path: '/pages/src/assets/images/logo/logo01.png',
        text: '美食',
        type: 'cate'
      },
      {
        path: '/pages/src/assets/images/logo/logo02.png',
        text: '午餐',
        type: 'lunch'
      },
      {
        path: '/pages/src/assets/images/logo/logo03.png',
        text: '商超便利',
        type: 'shop'
      },
      {
        path: '/pages/src/assets/images/logo/logo04.png',
        text: '果蔬生鲜',
        type: 'fresh'
      },
      {
        path: '/pages/src/assets/images/logo/logo05.png',
        text: '新店特惠',
        type: 'newShop'
      },
      {
        path: '/pages/src/assets/images/logo/logo06.png',
        text: '大牌简餐',
        type: 'famous'    
      },
      {
        path: '/pages/src/assets/images/logo/logo07.png',
        text: '帮买帮送',
        type: 'helpBuy'
      },
      {
        path: '/pages/src/assets/images/logo/logo08.png',
        text: '甜品饮品',
        type: 'drink'
      },
      {
        path: '/pages/src/assets/images/logo/logo09.png',
        text: '医药健康',
        type: 'health'
      },
      {
        path: '/pages/src/assets/images/logo/logo10.png',
        text: '浪漫鲜花',
        type: 'flower'
      }
    ],
    logoList2: [
      {
        path: '/pages/src/assets/images/logo/logo11.png',
        text: '满减好店',
        type: 'enough'
      },
      {
        path: '/pages/src/assets/images/logo/logo12.png',
        text: '快餐便当',
        type: 'fastFood'
      },
      {
        path: '/pages/src/assets/images/logo/logo13.png',
        text: '汉堡薯条',
        type: 'hamburger'
      },
      {
        path: '/pages/src/assets/images/logo/logo14.png',
        text: '炸鸡',
        type: 'chicken'
      },
      {
        path: '/pages/src/assets/images/logo/logo15.png',
        text: '煲仔烧腊',
        type: 'soupRice'
      },
      {
        path: '/pages/src/assets/images/logo/logo16.png',
        text: '火锅烤鱼',
        type: 'fish'
      },
      {
        path: '/pages/src/assets/images/logo/logo17.png',
        text: '准时达',
        type: 'inTime'
      },
      {
        path: '/pages/src/assets/images/logo/logo18.png',
        text: '地方菜系',
        type: 'allPart'
      },
      {
        path: '/pages/src/assets/images/logo/logo19.png',
        text: '异国料理',
        type: 'foreign'
      },
      {
        path: '/pages/src/assets/images/logo/logo20.png',
        text: '麻辣烫',
        type: 'hotPot'
      }
    ]
  },
  methods: {
    tapEvent(val) {
      console.log(val)
      this.triggerEvent('navClick', val.detail)
    }
  }
})