// pages/article/article.js
var { articles } = require('../../data/db.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    /*
    articles:[
      {
        avatar:'../../images/avatar/u1.jpg',
        date:'2019-05-06',
        title:'我是文章标题',
        img:'../../images/article/a1.jpg',
        desc:'我是文章描述',
        star:20,
        view:33
      },
      {
        avatar: '../../images/avatar/u2.jpg',
        date: '2019-05-07',
        title: '我是文章标题',
        img: '../../images/article/a2.jpg',
        desc: '我是文章描述',
        star: 30,
        view: 28
      },
      {
        avatar: '../../images/avatar/u3.jpg',
        date: '2019-05-08',
        title: '我是文章标题',
        img: '../../images/article/a3.jpg',
        desc: '我是文章描述',
        star: 50,
        view: 45
      }
    ]
    */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {//推荐在onload中进行，因为options方便拿到数据
    //console.log('article onLoad')
    /*
    var articles = [
      {
        avatar: '../../images/avatar/u1.jpg',
        date: '2019-05-06',
        title: '我是文章标题',
        img: '../../images/article/a1.jpg',
        desc: '我是文章描述',
        star: 20,
        view: 33
      },
      {
        avatar: '../../images/avatar/u2.jpg',
        date: '2019-05-07',
        title: '我是文章标题',
        img: '../../images/article/a2.jpg',
        desc: '我是文章描述',
        star: 30,
        view: 28
      },
      {
        avatar: '../../images/avatar/u3.jpg',
        date: '2019-05-08',
        title: '我是文章标题',
        img: '../../images/article/a3.jpg',
        desc: '我是文章描述',
        star: 50,
        view: 45
      }
    ];
    */
    // console.log("data::",this.data);
    /*
    // Page.prototype.setData(Object data, Function callback)
    // setData 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）
    this.setData({
      articles:articles
    },function(){
      console.log('in cb', this.data.articles)
    }.bind(this))
    console.log('out cb',this.data.articles)
    */
    this.setData({
      articles:articles
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //console.log('article onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //console.log('article onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //console.log('article onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //console.log('article onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //console.log('article onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log('article onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    //console.log('article onShareAppMessage')
  },

  // 文章点击跳转事件
  tapArticleItem:function(ev){
    // console.log('tapArticleItem...');
    // console.log(ev);
    var articleId = ev.currentTarget.dataset.articleId;
    // console.log(articleId);
    wx.navigateTo({
      url: './article-detail/article-detail?articleId=' + articleId,
    })
  }
})