//index.js
//获取应用实例
const app = getApp()

Page({
  tapMotto:function(){
    // console.log('tapMotto...');
    wx.switchTab({
      url: '/pages/article/article',
    })
    /*
    // navigateTo方法，当跳转页面后，会返回
    wx.navigateTo({
      // url: '../article/article',
      url:'/pages/article/article'
    })
    */
    //redirectTo方法，当跳转页面后，不会返回
    // wx.redirectTo({
    //   url: '/pages/article/article',
    // })
  },
  /*
  tapText:function(){
    console.log('tapText...');
  }
  */

})
