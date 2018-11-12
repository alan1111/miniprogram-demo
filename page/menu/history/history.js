Page({
  onShareAppMessage() {
    return {
      title: 'navigatePage',
      path: 'page/menu/history/history'
    }
  },
  data:{
      record: []
  },
  onLoad(options) {
      let _this = this;
      wx.getStorage({key: 'allMessage',
          success:function (res) {
              _this.setData({
                  record: res.data
              })
          }
      });
  }
})
