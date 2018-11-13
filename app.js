const openIdUrl = require('./config').openIdUrl

App({
  onLaunch(opts) {
      wx.getStorage({key: 'noClearData',
          success:function (res) {
              console.log('success noClearData')
          },
          fail () {
              wx.setStorage({
                  key: 'noClearData',
                  data: []
              });
          }
      });
      wx.getStorage({key: 'addKey',
          success:function (res) {
              console.log('success noClearData')
          },
          fail () {
              wx.setStorage({
                  key: 'addKey',
                  data: 0
              });
          }
      });
      wx.getStorage({key: 'allMessage',
          success:function (res) {
              console.log('success allMessage')
          },
          fail () {
              wx.setStorage({
                  key: 'allMessage',
                  data: []
              });
          }
      });
      wx.getStorage({key: 'hasClear',
          success:function (res) {
              console.log('success hasClear')
          },
          fail () {
              wx.setStorage({
                  key: 'hasClear',
                  data: []
              });
          }
      });
    console.log('App Launch', opts)
  },
  onShow(opts) {
    console.log('App Show', opts)
  },
  onHide() {
    console.log('App Hide')
  },
  globalData: {
    billDatas : [],
    hasLogin: false,
    openid: null
  },
  // lazy loading openid
  getUserOpenId(callback) {
    const self = this

    if (self.globalData.openid) {
      callback(null, self.globalData.openid)
    } else {
      wx.login({
        success(data) {
          wx.request({
            url: openIdUrl,
            data: {
              code: data.code
            },
            success(res) {
              console.log('拉取openid成功', res)
              self.globalData.openid = res.data.openid
              callback(null, self.globalData.openid)
            },
            fail(res) {
              console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
              callback(res)
            }
          })
        },
        fail(err) {
          console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
          callback(err)
        }
      })
    }
  }
})
