Page({
  onLoad: function(options) {
    console.log(options)
    // wx.showToast({
    //       title: options.title,
    //       icon: 'success',
    //       duration: 2000
    //     })
    this.setData({
      options: options
    })
  },
  testTap: function(e) {
    wx.showToast({
          title: "点击成功",
          icon: 'success',
          duration: 2000
        })
  }
})
