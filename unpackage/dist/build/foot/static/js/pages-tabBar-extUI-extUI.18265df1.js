(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-extUI-extUI"],{"431b":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-25bfbe96]{min-height:100%;height:auto}\n\n/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */\n.uni-icon[data-v-25bfbe96]{font-family:uniicons;font-weight:400}.uni-container[data-v-25bfbe96]{padding:15px;background-color:#f8f8f8}.uni-header-logo[data-v-25bfbe96]{padding:15px 15px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%}.uni-header-image[data-v-25bfbe96]{width:80px;height:80px}.uni-hello-text[data-v-25bfbe96]{margin-bottom:20px}.hello-text[data-v-25bfbe96]{color:#7a7e83;font-size:14px;line-height:20px}.hello-link[data-v-25bfbe96]{color:#7a7e83;font-size:14px;line-height:20px}.uni-panel[data-v-25bfbe96]{margin-bottom:12px}.uni-panel-h[data-v-25bfbe96]{background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:12px}\n/*\n.uni-panel-h:active {\n    background-color: #f8f8f8;\n}\n */.uni-panel-h-on[data-v-25bfbe96]{background-color:#f0f0f0}.uni-panel-text[data-v-25bfbe96]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-panel-icon[data-v-25bfbe96]{margin-left:15px;color:#999;font-size:14px;font-weight:400;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition-duration:0s;transition-duration:0s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.uni-panel-icon-on[data-v-25bfbe96]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-navigate-item[data-v-25bfbe96]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-top-style:solid;border-top-color:#f0f0f0;border-top-width:1px;padding:12px}.uni-navigate-item[data-v-25bfbe96]:active{background-color:#f8f8f8}.uni-navigate-text[data-v-25bfbe96]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-navigate-icon[data-v-25bfbe96]{margin-left:15px;color:#999;font-size:14px;font-weight:400}",""]),e.exports=t},"7ebf":function(e,t,n){"use strict";var a=n("ab59"),i=n.n(a);i.a},9658:function(e,t,n){"use strict";var a=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("caff")),o={components:{uLink:i.default},data:function(){return{navigateFlag:!1,lists:[{name:"Badge 数字角标",url:"badge"},{name:"Calendar 日历",url:"calendar"},{name:"Card 卡片",url:"card"},{name:"Collapse 折叠面板",url:"collapse"},{name:"Combox 组合框",url:"combox"},{name:"Countdown 倒计时",url:"countdown"},{name:"Drawer 抽屉",url:"drawer"},{name:"Fab 悬浮按钮",url:"fab"},{name:"Fav 收藏按钮",url:"fav"},{name:"GoodsNav 商品导航",url:"goods-nav"},{name:"Grid 宫格",url:"grid"},{name:"Icons 图标",url:"icons"},{name:"IndexedList 索引列表",url:"indexed-list"},{name:"Link 超链接",url:"link"},{name:"List 列表",url:"list"},{name:"LoadMore 加载更多",url:"load-more"},{name:"NavBar 自定义导航栏",url:"nav-bar"},{name:"NoticeBar 通告栏",url:"notice-bar"},{name:"NumberBox 数字输入框",url:"number-box"},{name:"Pagination 分页器",url:"pagination"},{name:"PopUp 弹出层",url:"popup"},{name:"Rate 评分",url:"rate"},{name:"SearchBar 搜索栏",url:"search-bar"},{name:"SegmentedControl 分段器",url:"segmented-control"},{name:"Steps 步骤条",url:"steps"},{name:"SwipeAction 滑动操作",url:"swipe-action"},{name:"SwiperDot 轮播图指示点",url:"swiper-dot"},{name:"Tag 标签",url:"tag"},{name:"Transition 过渡动画",url:"transition"}]}},onLoad:function(){},onReady:function(){},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/extUI/extUI"}},onNavigationBarButtonTap:function(e){uni.navigateTo({url:"/pages/about/about"})},methods:{goDetailPage:function(e){var t=this;this.navigateFlag||(this.navigateFlag=!0,uni.navigateTo({url:"/pages/extUI/"+e+"/"+e}),setTimeout((function(){t.navigateFlag=!1}),200))}}};t.default=o},9963:function(e,t,n){"use strict";n.r(t);var a=n("acce"),i=n("ee35");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("7ebf");var r,l=n("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"25bfbe96",null,!1,a["a"],r);t["default"]=u.exports},ab59:function(e,t,n){var a=n("431b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("d7fa8b06",a,!0,{sourceMap:!1,shadowMode:!1})},acce:function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-container"},[n("v-uni-view",{staticClass:"uni-header-logo"},[n("v-uni-image",{staticClass:"uni-header-image",attrs:{src:"/static/extuiIndex.png"}})],1),n("v-uni-view",{staticClass:"uni-hello-text"},[n("v-uni-text",{staticClass:"hello-text"},[e._v("以下是uni-app扩展组件示例，更多组件见插件市场：")]),n("u-link",{staticClass:"hello-link",attrs:{href:"https://ext.dcloud.net.cn/",text:"https://ext.dcloud.net.cn",inWhiteList:!0}})],1),e._l(e.lists,(function(t){return n("v-uni-view",{key:t.url,staticClass:"uni-panel"},[n("v-uni-view",{staticClass:"uni-panel-h",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.goDetailPage(t.url)}}},[n("v-uni-text",{staticClass:"uni-panel-text"},[e._v(e._s(t.name))]),n("v-uni-text",{staticClass:"uni-panel-icon uni-icon"},[e._v("")])],1)],1)}))],2)},o=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}))},ee35:function(e,t,n){"use strict";n.r(t);var a=n("9658"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a}}]);