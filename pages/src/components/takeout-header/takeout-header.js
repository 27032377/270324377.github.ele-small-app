const app = getApp()
const qqMap = require('../../assets/js/qqmap-wx-jssdk.js') // 只能是相对路径
const alwaysList = ['黄焖鸡米饭', '可乐', '披萨' ,'沙拉', '贡茶', '水果', '盖浇饭' ,'寿司', '牛杂', '煎饼果子', '人参', '大保健']
var mapNew
Component({
  ready() {
    let this_ = this
    this.setData({
      headerImg: app.globalData.userInfo.avatarUrl,
      nickName: app.globalData.userInfo.nickName
    })
    mapNew = new qqMap({
      key: 'UCYBZ-VQ4LU-RQUV3-B3UPN-AJCCO-NWFXY'
    })
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        let {latitude, longitude} = res
        mapNew.reverseGeocoder({
          location: {
            latitude,
            longitude
          },
          success(res) {
            console.log(res)
            this_.setData({
              address: res.result.address
            })
            app.globalData.userInfo.city = res.result.address_component.city
            app.globalData.userInfo.address = res.result.address_component.address            
          },
          error(err) {
            console.log(err)
          }
        })
      },
    })
  },
  data: {
    alwaysList,
    inputVal: ''
  },
  methods: {
    tapHead() {
      wx.switchTab({
        url: '/pages/src/views/my/my',
      })
    },
    addressManage(e) {
      wx.navigateTo({
        url: '/pages/src/views/address-manage/address-manage',
      })
    }
  }
})