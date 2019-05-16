var articles = [
  {
    avatar: '/images/avatar/u1.jpg',
    author:'Tom',
    date: '2019-05-06',
    time:'2天前',
    title: '我是文章标题',
    img: '/images/article/a1.jpg',
    desc: '我是文章描述',
    content:'小花猫特别贪睡,一天到晚总是眯着眼睛打盹,可是睡觉时它的耳朵特别灵敏,只要有声音它的耳朵就会动一下,如果有人走进它,它会突然站起来.小花猫爱清洁讲卫生,经常用舌头舔身子,除去身上的脏物',
    star: 20,
    view: 33,
    articleId:'0', //作为传递的参数
    music: {
      src: 'http://sc1.111ttt.cn:8282/2018/1/03/13/396131212186.mp3?tflag=1546606800&pin=97bb2268ae26c20fe093fd5b0f04be80',
      title: '离人愁',
      coverImgUrl: '/images/music/m1.png'
    }
  },
  {
    avatar: '/images/avatar/u2.jpg',
    author: 'Leo',
    date: '2019-05-07',
    time: '1天前',
    title: '我是文章标题',
    img: '/images/article/a2.jpg',
    desc: '我是文章描述',
    content: '小猫咪披着一件黑白相间的大衣，它有一双灵敏的耳朵，还有一对水汪汪的大眼睛。它脚下有厚厚的肉垫子，走路静悄悄的，老鼠见了都怕它',
    star: 30,
    view: 28,
    articleId: '1',
    music: {
      src: 'http://sc1.111ttt.cn:8282/2018/1/03/13/396131203208.mp3?tflag=1546606800&pin=97bb2268ae26c20fe093fd5b0f04be80',
      title: '广东爱情故事',
      coverImgUrl: 'http://oxoxtpvtn.bkt.clouddn.com/%E9%A3%8E%E5%90%B9%E9%BA%A6%E6%B5%AA.jpg'
    }
  },
  {
    avatar: '/images/avatar/u3.jpg',
    author: 'Amy',
    date: '2019-05-08',
    time: '今天',
    title: '我是文章标题',
    img: '/images/article/a3.jpg',
    desc: '我是文章描述',
    content:'小猫它一身的羽毛洁白如雪，中间夹着数块墨色的细毛，黑白相间美丽极了！它那炯炯有神的眼睛好像两颗黑色的小灯泡，闪呀闪。一条黑白相间的尾巴，躺在地面上悠然自得地摇着。小猫的小牙齿洁白洁白的。在嘴边有几根又长又细的胡须，好像几根细鱼骨头似的，傲傲地动着。它的小脚像小梅花',
    star: 50,
    view: 45,
    articleId: '2',
    music: {
      src: ' http://sc1.111ttt.cn:8282/2018/1/03/13/396131227447.mp3?tflag=1546606800&pin=97bb2268ae26c20fe093fd5b0f04be80',
      title: '红昭愿',
      coverImgUrl: 'http://oxoxtpvtn.bkt.clouddn.com/%E9%82%93%E7%B4%AB%E6%A3%8B%E5%96%9C%E6%AC%A2%E4%BD%A0.jpg'
    }
  }
];

//将数据信息导出去
module.exports = {
  articles:articles
}