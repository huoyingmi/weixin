//接收data导出的信息
var { articles } = require('../../../data/db.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 默认音乐的播放状态是false;
    isPlaying:false 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    // 参数的传递
    var articleId = options.articleId;//拿到对应文章的ID,即第几篇文章
    var article = articles[articleId];//拿到对应id的文章内容
    // console.log(article);
   // 处理收藏功能  //获取数据articles_collection是参数
    var articles_collection = wx.getStorageSync('articles_collection');
    // 表示收藏的状态， 默认收藏的状态时false
    var isCollected = false;
    // 判断数据是不是存在
    if (!articles_collection){//当数据不存在时，要新建一个数据
      /*
      * 0:false 未收藏 1:true 已收藏
       */
      var data = {
      }
      //articleId指拿到第几篇文章
      data[articleId] = false; //默认拿到第一篇文章
      // wx.setStorageSync 存储或修改 把数据存储
      wx.setStorageSync("articles_collection", data)
    } else { ////当数据存在时，从已有的数据中拿
      isCollected = !!articles_collection[articleId]
    }
    this.setData({ ...article,isCollected:isCollected});

    // 监听音乐相关事件
    // 获取音乐
    var backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.onPlay(function () {
      this.setData({
        isPlaying: true
      })
    }.bind(this))
    backgroundAudioManager.onPause(function () {
      this.setData({
        isPlaying: false
      })
    }.bind(this))  
  },

  /**
   *  处理收藏功能的点击事件
   */
  tapCollect:function(){
    // 当点击收藏时，获取数据
    var articles_collection = wx.getStorageSync('articles_collection');
    // 表示收藏的状态，
    var isCollected = articles_collection[this.data.articleId];
    //改变storage里面的数据
    articles_collection[this.data.articleId] = !isCollected;
    wx.setStorageSync('articles_collection', articles_collection)
    //改变收藏的视图页面，收藏和未收藏的图片切换
    this.setData({
      isCollected: !isCollected
    },function(){
      // 用户收藏交互的提示信息
      wx.showToast({
        title: isCollected ? '取消收藏' : '收藏成功',
      })
    })
  },
  /**
   * 处理分享功能的点击事件
   */
  tapShare:function(){
    var itemList = ['分享到朋友圈','分享到QQ','分享到微博'];
    wx.showActionSheet({
      itemList: itemList, //需要显示的内容
      success:function(res){
        //console.log(res); //res中有属性tapindex表示itemList中点击哪种分享
        wx.showToast({
          title: itemList[res.tapIndex] + '成功',
        })
      }
    })
  },
  /**
   * 处理阴郁的播放点击事件
   */
  tapMusic:function(){
    // 获取音乐
    var backgroundAudioManager =  wx.getBackgroundAudioManager();
    // 获取播放状态
    var isPlaying = this.data.isPlaying;
    // 判断播放状态是什么
    if(isPlaying){ //true 播放
      backgroundAudioManager.pause();
      this.setData({
        isPlaying: false
      })
    }else{ //没播放
    // 在data中获取music属性
      var music = articles[this.data.articleId].music;

      backgroundAudioManager.src = music.src;
      backgroundAudioManager.coverImgUrl = music.coverImgUrl;
      backgroundAudioManager.title = music.title;

      this.setData({
        isPlaying:true
      })
    }
  }
})