Page({
  data: {
    foodList: [
      {
        title: '限量抢购',
        color: 'text-red',
        intro1: '超值美味 9.9元起',
        intro2: '2080人正在抢',
        path: '/pages/src/assets/images/image/food01.jpg'
      },
      {
        title: '品质套餐',
        color: 'text-normal',
        intro1: '搭配齐全吃得好',
        intro2: '立即抢购',
        path: '/pages/src/assets/images/image/food02.jpg'
      }
    ]
  },
  navTapEvent(val) {
    console.log(val)
    wx.showModal({
      title: '点击target类型为',
      content: val.detail.target,
      success(val) {
        let title
        let mask
        if (val.confirm) {
          title = '点击了确定'
          mask = true
        } else {
          title = '点击了取消'
          mask = false          
        }
        wx.showToast({
          title,
          mask
        })
      }
    })
  }
})