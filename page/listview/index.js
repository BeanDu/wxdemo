Page({
  data: {
    toView: 'green'
  },
  onShow: function () {
    console.log('App Show')
    // wx.showToast({
    //       title: '成功',
    //       icon: 'success',
    //       duration: 2000
    //     })
    var that = this
    wx.request({
      //url: 'http://127.0.0.1:8000/bloglist',
      url: 'http://api.app.happyjuzi.com/article/list/channel?accesstoken=e1ddb552837cb75f9cc4cbf7154b8ea1&id=102&net=wifi&page=1&pf=ios&res=320x568&size=20&uid=10072&ver=3.7',
      data: {},
      header: {},
      method: 'GET'.toUpperCase(),
      success: function(res){
        // wx.showToast({
        //   title: '成功',
        //   icon: 'success',
        //   duration: 2000
        // })
        that.setData({
          xxx:res.data.data.list
        })
      },
      fail: function(msg) {
        console.log('reqest error',msg)
        wx.showToast({
          title: msg,
          icon: 'success',
          duration: 2000
        })
      }
    })
    
  },

  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  scrollToTop: function(e) {
    this.setAction({
      scrollTop: 0
    })
  },
  taptosenddata: function(e){
    this.setData({
      xxx: "ddddd"
    })
  },
  tap: function(e) {
    // for (var i = 0; i < order.length; ++i) {
    //   if (order[i] === this.data.toView) {
    //     this.setData({
    //       toView: order[i + 1],
    //       scrollTop: (i + 1) * 200
    //     })
    //     break
    //   }
    // }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
