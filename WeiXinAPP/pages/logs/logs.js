var app = getApp();
var that;
var Util = require('../../utils/util.js');
Page({
  data: {
    city_name: '',
    title: '',
    red: 'green'
  },
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
    that = this;
    wx.request({
      url: "http://127.0.0.1:5000/transactions/new",
      header: {
        //请求头和ajax写法一样
        "Content-Type": "application/json"
      },
      method: "POST",
      data: JSON.stringify({
        "sender": "d4ee26eee15148ee92c6cd394edd974e",
        "recipient": "someone-other-address",
        "amount": 5
      }),
      complete: function (res) {

        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })

        that.setData({
          red: 'red',
          city_name: res.data.message,
        });
        if (res == null || res.data == null) {
          console.error('网络请求失败');
          return;
        }

        setTimeout(function () {
          wx.hideToast()
        }, 2000)
      }
    })
  }

})  