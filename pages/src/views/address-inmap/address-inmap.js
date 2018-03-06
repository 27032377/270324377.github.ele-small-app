const app = getApp()
Page({
  data: {
  
  },
  onLoad (options) {
    let { latitude, longitude } = options
    let markers = [
      {
        latitude,
        longitude
      }
    ]
    this.setData({
      latitude,
      longitude,
      markers
    })
  },
  tapEvent (e) {
    console.log(e)
  }
})