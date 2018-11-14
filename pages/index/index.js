//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    inputShowed: true,
    page: 0,
    listCard: [{
        name: "主题旅行",
        ids:0
      },
      {
        name: "境外精选",
        ids: 1
      },
      {
        name: "东北",
        ids: 2
      },
      {
        name: "四川",
        ids: 3
      },
      {
        name: "云南",
        ids: 4
      },
      {
        name: "大西北",
        ids: 5
      },
      {
        name: "西藏",
        ids: 6
      },
      {
        name: "新疆",
        ids: 7
      },
      {
        name: "贵州",
        ids: 8
      },
      {
        name: "cityWalk",
        ids: 9
      },
      {
        name: "一日/两日",
        ids: 10
      },
      {
        name: "三日/四日",
        ids: 11
        
      },
      {
        name: "五日",
        ids: 12
      },
      {
        name: "六日",
        ids: 13
      },
      {
        name: "七日",
        ids: 14
      },
      {
        name: "八日",
        ids: 15
      }
    ],
    zhuti:[],
    jingwai:[],
    dongbei:[],
    sichuang:[],
    yunnan:[]
  },
  showInput() {
    this.setData({
      inputShowed: false
    })
  },
  hideInput() {
    this.setData({
      inputShowed: true
    })
  },
  // 点击切换标签
  clickChange(e) {
    this.setData({
      page: e.target.id
    })
  },
  // 获取数据渲染到页面上去
  getDongBei(){
    let that = this;
    wx.request({
      url:'http://localhost:9997/goods',
      data: {
        data:"dongbei"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          dongbei:res.data
        })
      }
    })
  },
  getJingWai(){
    let that = this;
    wx.request({
      url: 'http://localhost:9997/goods',
      data: {
        data: "jingwai"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          jingwai: res.data
        })
      }
    })
  },
  getZhuTi(){
    let that = this;
    wx.request({
      url: 'http://localhost:9997/goods',
      data: {
        data: "zhuti"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          zhuti: res.data
        })
      }
    })
  },
  getSiChuang(){
    let that = this;
    wx.request({
      url: 'http://localhost:9997/goods',
      data: {
        data: "sichuang"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          sichuang: res.data
        })
      }
    })
  },
  getYunNan(){
    let that = this;
    wx.request({
      url: 'http://localhost:9997/goods',
      data: {
        data: "yunnan"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          yunnan: res.data
        })
      }
    })
  },
  onLoad: function() {
    this.getDongBei();
    this.getJingWai();
    this.getZhuTi();
    this.getSiChuang();
    this.getYunNan();
  },
})

