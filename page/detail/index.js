Page({
  onLoad: function(options) {
    console.log(options)
    // wx.showToast({
    //       title: options.title,
    //       icon: 'success',
    //       duration: 2000
    //     })
    this.setData({
      pic: options.pic
    })
  }
})
