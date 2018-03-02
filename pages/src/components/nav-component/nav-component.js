// pages/src/components/nav-component/nav-component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listData: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    logoTap(e) {
      let params = {
        target: e.currentTarget.dataset.name
      }
      this.triggerEvent('navTap', params)
    }
  }
})
