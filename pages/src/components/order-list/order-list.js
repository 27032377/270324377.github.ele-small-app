Component({
  properties: {
    list: {
      type: Array,
      value: []
    }
  },
  data: {

  },
  methods: {
    touchStart (e) {
      let startX = e.changedTouches[0].pageX
      this.setData({
        startX
      })
    },
    touchEnd (e) {
      let startX = this.data.startX
      let endX = e.changedTouches[0].pageX
      let left = endX - startX
      let id = e.currentTarget.dataset.id.replace('food-', '')
      this.setData({
        endX
      })
      if (left > 100 || left < -100) {
        this.triggerEvent('deleteEvent', id)
      }
    }
  }
})
