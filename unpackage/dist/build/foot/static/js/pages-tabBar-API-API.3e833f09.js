(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-API-API"],{"1cb0":function(a,t,e){"use strict";var n,i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"uni-container"},[a.showSetTabBarPage?[e("set-tab-bar",{on:{unmount:function(t){arguments[0]=t=a.$handleEvent(t),a.leaveSetTabBarPage.apply(void 0,arguments)}}})]:[e("v-uni-view",{staticClass:"uni-header-logo"},[e("v-uni-image",{staticClass:"uni-header-image",attrs:{src:"/static/apiIndex.png"}})],1),e("v-uni-view",{staticClass:"uni-hello-text"},[e("v-uni-text",{staticClass:"hello-text"},[a._v("以下将演示uni-app接口能力，详细文档见：")]),e("u-link",{staticClass:"hello-link",attrs:{href:"https://uniapp.dcloud.io/api/",text:"https://uniapp.dcloud.io/api/",inWhiteList:!0}})],1),a._l(a.list,(function(t,n){return e("v-uni-view",{key:t.id,staticClass:"uni-panel"},[e("v-uni-view",{staticClass:"uni-panel-h",class:t.open?"uni-panel-h-on":"",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.triggerCollapse(n)}}},[e("v-uni-text",{staticClass:"uni-panel-text"},[a._v(a._s(t.name))]),e("v-uni-text",{staticClass:"uni-panel-icon uni-icon",class:t.open?"uni-panel-icon-on":""},[a._v(a._s(t.pages?"":""))])],1),t.open?e("v-uni-view",{staticClass:"uni-panel-c"},a._l(t.pages,(function(n,i){return e("v-uni-view",{key:i,staticClass:"uni-navigate-item",attrs:{url:t.url},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.goDetailPage(n.url)}}},[e("v-uni-text",{staticClass:"uni-navigate-text"},[a._v(a._s(n.name?n.name:n))]),e("v-uni-text",{staticClass:"uni-navigate-icon uni-icon"},[a._v("")])],1)})),1):a._e()],1)}))]],2)},o=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return n}))},"32a3":function(a,t,e){"use strict";e.r(t);var n=e("818c"),i=e.n(n);for(var o in n)"default"!==o&&function(a){e.d(t,a,(function(){return n[a]}))}(o);t["default"]=i.a},"4c43":function(a,t,e){var n=e("24fb");t=n(!1),t.push([a.i,".button[data-v-495c71ae]{margin-top:%?30?%;margin-left:0;margin-right:0}.btn-area[data-v-495c71ae]{padding-top:%?30?%}",""]),a.exports=t},"4e71":function(a,t,e){"use strict";e.r(t);var n=e("d0fa"),i=e("9778");for(var o in i)"default"!==o&&function(a){e.d(t,a,(function(){return i[a]}))}(o);e("50dd");var r,s=e("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"495c71ae",null,!1,n["a"],r);t["default"]=u.exports},"50dd":function(a,t,e){"use strict";var n=e("e59c"),i=e.n(n);i.a},"818c":function(a,t,e){"use strict";var n=e("ee27");e("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(e("caff")),o=n(e("4e71")),r={components:{uLink:i.default,setTabBar:o.default},data:function(){var a=[{name:"图片",url:"image"},{name:"视频",url:"video"}],t=[{id:"page",name:"界面",open:!1,pages:[{name:"设置导航条",url:"set-navigation-bar-title"},{name:"页面跳转",url:"navigator"},{name:"设置TabBar",url:"set-tabbar"},{name:"下拉刷新",url:"pull-down-refresh"},{name:"创建动画",url:"animation"},{name:"创建绘画",url:"canvas"},{name:"节点信息",url:"get-node-info"},{name:"节点布局交互状态",url:"intersection-observer"},{name:"显示操作菜单",url:"action-sheet"},{name:"显示模态弹窗",url:"modal"},{name:"显示加载提示框",url:"show-loading"},{name:"显示消息提示框",url:"toast"}]},{id:"device",name:"设备",open:!1,pages:[{name:"获取手机网络状态",url:"get-network-type"},{name:"获取手机系统信息",url:"get-system-info"},{name:"打电话",url:"make-phone-call"},{name:"监听加速度传感器",url:"on-accelerometer-change"},{name:"监听罗盘数据",url:"on-compass-change"}]},{id:"network",name:"网络",open:!1,pages:[{name:"发起一个请求",url:"request"},{name:"上传文件",url:"upload-file"},{name:"下载文件",url:"download-file"}]},{id:"websocket",name:"websocket",open:!1,pages:[{name:"socketTask",url:"websocket-socketTask"},{name:"全局websocket",url:"websocket-global"}]},{id:"media",name:"媒体",open:!1,pages:a},{id:"location",name:"位置",open:!1,pages:[{name:"获取当前位置",url:"get-location"},{name:"使用地图查看位置",url:"open-location"},{name:"使用地图选择位置",url:"choose-location"},{name:"地图控制",url:"map"}]},{id:"storage",name:"数据",open:!1,pages:[{name:"数据存储（key-value）",url:"storage"}]}];return{showSetTabBarPage:!1,list:t,navigateFlag:!1}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/API/API"}},onNavigationBarButtonTap:function(a){uni.navigateTo({url:"/pages/about/about"})},onLoad:function(){},onReady:function(){},onShow:function(){this.navigateFlag=!1,this.leaveSetTabBarPage()},onHide:function(){this.leaveSetTabBarPage()},methods:{triggerCollapse:function(a){if(this.list[a].pages)for(var t=0;t<this.list.length;++t)this.list[t].open=a===t&&!this.list[a].open;else this.goDetailPage(this.list[a].url)},goDetailPage:function(a){if(!this.navigateFlag)if(this.navigateFlag=!0,"set-tabbar"!==a){var t=~a.indexOf("platform")?a:"/pages/API/"+a+"/"+a;uni.navigateTo({url:t})}else this.showSetTabBarPage=!0},leaveSetTabBarPage:function(){var a=this;setTimeout((function(){a.navigateFlag=!1}),200),this.showSetTabBarPage=!1}}};t.default=r},"8a78":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"tababr",hasSetTabBarBadge:!1,hasShownTabBarRedDot:!1,hasCustomedStyle:!1,hasCustomedItem:!1,hasHiddenTabBar:!1}},destroyed:function(){if(this.hasSetTabBarBadge&&uni.removeTabBarBadge({index:1}),this.hasShownTabBarRedDot&&uni.hideTabBarRedDot({index:1}),this.hasHiddenTabBar&&uni.showTabBar(),this.hasCustomedStyle&&uni.setTabBarStyle({color:"#7A7E83",selectedColor:"#007AFF",backgroundColor:"#F8F8F8",borderStyle:"black"}),this.hasCustomedItem){var a={index:1,text:"接口",iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png"};uni.setTabBarItem(a)}},methods:{navigateBack:function(){this.$emit("unmount")},setTabBarBadge:function(){this.hasShownTabBarRedDot&&(uni.hideTabBarRedDot({index:1}),this.hasShownTabBarRedDot=!this.hasShownTabBarRedDot),this.hasSetTabBarBadge?uni.removeTabBarBadge({index:1}):uni.setTabBarBadge({index:1,text:"1"}),this.hasSetTabBarBadge=!this.hasSetTabBarBadge},showTabBarRedDot:function(){this.hasSetTabBarBadge&&(uni.removeTabBarBadge({index:1}),this.hasSetTabBarBadge=!this.hasSetTabBarBadge),this.hasShownTabBarRedDot?uni.hideTabBarRedDot({index:1}):uni.showTabBarRedDot({index:1}),this.hasShownTabBarRedDot=!this.hasShownTabBarRedDot},hideTabBar:function(){this.hasHiddenTabBar?uni.showTabBar():uni.hideTabBar(),this.hasHiddenTabBar=!this.hasHiddenTabBar},customStyle:function(){this.hasCustomedStyle?uni.setTabBarStyle({color:"#7A7E83",selectedColor:"#007AFF",backgroundColor:"#F8F8F8",borderStyle:"black"}):uni.setTabBarStyle({color:"#FFF",selectedColor:"#007AFF",backgroundColor:"#000000",borderStyle:"black"}),this.hasCustomedStyle=!this.hasCustomedStyle},customItem:function(){var a={index:1,text:"接口",iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png"};this.hasCustomedItem?uni.setTabBarItem(a):(a.text="API",uni.setTabBarItem(a)),this.hasCustomedItem=!this.hasCustomedItem}}};t.default=n},9778:function(a,t,e){"use strict";e.r(t);var n=e("8a78"),i=e.n(n);for(var o in n)"default"!==o&&function(a){e.d(t,a,(function(){return n[a]}))}(o);t["default"]=i.a},c299:function(a,t,e){var n=e("eab3");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var i=e("4f06").default;i("2a68a5a8",n,!0,{sourceMap:!1,shadowMode:!1})},c4e5:function(a,t,e){"use strict";var n=e("c299"),i=e.n(n);i.a},c9b3:function(a,t,e){"use strict";e.r(t);var n=e("1cb0"),i=e("32a3");for(var o in i)"default"!==o&&function(a){e.d(t,a,(function(){return i[a]}))}(o);e("c4e5");var r,s=e("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"5e3b513a",null,!1,n["a"],r);t["default"]=u.exports},d0fa:function(a,t,e){"use strict";var n,i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("page-head",{attrs:{title:a.title}}),e("v-uni-button",{staticClass:"button",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.setTabBarBadge.apply(void 0,arguments)}}},[a._v(a._s(a.hasSetTabBarBadge?"移除tab徽标":"设置tab徽标"))]),e("v-uni-button",{staticClass:"button",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.showTabBarRedDot.apply(void 0,arguments)}}},[a._v(a._s(a.hasShownTabBarRedDot?"移除红点":"显示红点"))]),e("v-uni-button",{staticClass:"button",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.customStyle.apply(void 0,arguments)}}},[a._v(a._s(a.hasCustomedStyle?"移除自定义样式":"自定义Tab样式"))]),e("v-uni-button",{staticClass:"button",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.customItem.apply(void 0,arguments)}}},[a._v(a._s(a.hasCustomedItem?"移除自定义信息":"自定义Tab信息"))]),e("v-uni-button",{staticClass:"button",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.hideTabBar.apply(void 0,arguments)}}},[a._v(a._s(a.hasHiddenTabBar?"显示TabBar":"隐藏TabBar"))]),e("v-uni-view",{staticClass:"btn-area"},[e("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.navigateBack.apply(void 0,arguments)}}},[a._v("返回上一级")])],1)],1)},o=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return n}))},e59c:function(a,t,e){var n=e("4c43");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var i=e("4f06").default;i("2d954da6",n,!0,{sourceMap:!1,shadowMode:!1})},eab3:function(a,t,e){var n=e("24fb");t=n(!1),t.push([a.i,"uni-page-body[data-v-5e3b513a]{min-height:100%;height:auto}\n\n/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */\n.uni-icon[data-v-5e3b513a]{font-family:uniicons;font-weight:400}.uni-container[data-v-5e3b513a]{padding:15px;background-color:#f8f8f8}.uni-header-logo[data-v-5e3b513a]{padding:15px 15px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%}.uni-header-image[data-v-5e3b513a]{width:80px;height:80px}.uni-hello-text[data-v-5e3b513a]{margin-bottom:20px}.hello-text[data-v-5e3b513a]{color:#7a7e83;font-size:14px;line-height:20px}.hello-link[data-v-5e3b513a]{color:#7a7e83;font-size:14px;line-height:20px}.uni-panel[data-v-5e3b513a]{margin-bottom:12px}.uni-panel-h[data-v-5e3b513a]{background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:12px}\n/*\n.uni-panel-h:active {\n    background-color: #f8f8f8;\n}\n */.uni-panel-h-on[data-v-5e3b513a]{background-color:#f0f0f0}.uni-panel-text[data-v-5e3b513a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-panel-icon[data-v-5e3b513a]{margin-left:15px;color:#999;font-size:14px;font-weight:400;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition-duration:0s;transition-duration:0s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.uni-panel-icon-on[data-v-5e3b513a]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-navigate-item[data-v-5e3b513a]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-top-style:solid;border-top-color:#f0f0f0;border-top-width:1px;padding:12px}.uni-navigate-item[data-v-5e3b513a]:active{background-color:#f8f8f8}.uni-navigate-text[data-v-5e3b513a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-navigate-icon[data-v-5e3b513a]{margin-left:15px;color:#999;font-size:14px;font-weight:400}",""]),a.exports=t}}]);