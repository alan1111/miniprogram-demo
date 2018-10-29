Page({
  onShareAppMessage() {
    return {
      title: 'navigatePage',
      path: 'page/component/pages/navigator/navigate'
    }
  },
  data:{
      title: 'test'
  },
  onLoad(options) {
    console.log(options)
    this.setData({
      title: options.title
    })
  },
    test() {
        let count = 1;
        let that = this;
        this.interval = setInterval(function() {
            count++;
            that.setData({
                title: count+'1122'
            })
        }, 1000)
    },

    clear() {
        clearInterval(this.interval)
    }

})
