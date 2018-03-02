const app = getApp()
Component({
  data: {
    swiperList: [
      '../../assets/images/swiper/001.jpg',
      '../../assets/images/swiper/002.jpg',
      '../../assets/images/swiper/003.jpg',
      '../../assets/images/swiper/004.jpg',      
    ]
  },
  ready() {
    this.setData({
      imgWidth: `width: ${app.globalData.systemInfo.screenWidth}px;`
    })
  }
})
