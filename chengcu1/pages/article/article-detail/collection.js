var { articles } = require('../../../data/db.js')
Page({
  // 处理收藏功能
  tapcollect: function () {
    // wx.setStorageSync 存储或修改
    wx.setStorageSync("key1", 123);
    wx.setStorageSync("key2", 'hello');
    wx.setStorageSync("key3", { 
      name: "Tom" 
    });
    wx.setStorageSync("key1", 5);
    // wx.getStorageSync 获取
    console.log(wx.getStorageSync('key1'))
    console.log(wx.getStorageSync('key2'))
    console.log(wx.getStorageSync('key3'))
    // wx.clearStorageSync 删除全部
    // wx.removeStorageSync('key1')
    wx.clearStorageSync();
  }
})