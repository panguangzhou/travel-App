//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   src:"../../icon/logo.png",
   src1:"../../icon/待付款.png",
    src2: "../../icon/待发货.png",
    src3: "../../icon/已发货.png",
    src4: "../../icon/已完成.png",
   bool:true,
   logoBool:false,
   moreCard:[
     {
      title:"我的会员卡"
     },{
       title:"我的返现"
     },
     {
       title:"我的礼品卡"
     },
     {
       title:"我的存储卡"
     },
     {
       title: "我的积分"
     },
     {
       title: "我的优惠券"
     },
     {
       title: "我的优惠码"
     },
     {
       title: "我的礼物"
     },
     {
       title: "分销员中心"
     },
     {
       title: "我购买的专栏和内容"
     },
   ]
  },
  getTouXiang(){
    this.setData({
      bool:false,
      logoBool:true
    })
  },
  onLoad: function () {
    
  },
})
