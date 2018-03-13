Component({
  properties: {
    isShow: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    domHeight: Number
  },
  data: {

  },
  methods: {
    cancel () {
      this.setData({
        isShow: false
      })
    },
    sure () {
      this.triggerEvent('deleteList')
    }
  }
})
