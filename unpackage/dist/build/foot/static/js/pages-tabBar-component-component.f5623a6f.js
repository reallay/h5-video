(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-component-component"],{"0036":function(t,e,n){"use strict";n.r(e);var i=n("2e5d"),a=n("3d79");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("f181");var r,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"685725b0",null,!1,i["a"],r);e["default"]=l.exports},"2e5d":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-container"},[n("v-uni-view",{staticClass:"uni-header-logo"},[n("v-uni-image",{staticClass:"uni-header-image",attrs:{src:"/static/componentIndex.png"}})],1),n("v-uni-view",{staticClass:"uni-hello-text"},[n("v-uni-text",{staticClass:"hello-text"},[t._v("uni-app内置组件，展示样式仅供参考，文档详见：")]),n("u-link",{staticClass:"hello-link",attrs:{href:"https://uniapp.dcloud.io/component/",text:"https://uniapp.dcloud.io/component/",inWhiteList:!0}})],1),t._l(t.list,(function(e,i){return n("v-uni-view",{key:e.id,staticClass:"uni-panel"},[n("v-uni-view",{staticClass:"uni-panel-h",class:e.open?"uni-panel-h-on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.triggerCollapse(i)}}},[n("v-uni-text",{staticClass:"uni-panel-text"},[t._v(t._s(e.name))]),n("v-uni-text",{staticClass:"uni-panel-icon uni-icon",class:e.open?"uni-panel-icon-on":""},[t._v(t._s(e.pages?"":""))])],1),e.open?n("v-uni-view",{staticClass:"uni-panel-c"},t._l(e.pages,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-navigate-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetailPage(e)}}},[n("v-uni-text",{staticClass:"uni-navigate-text"},[t._v(t._s(e.name?e.name:e))]),n("v-uni-text",{staticClass:"uni-navigate-icon uni-icon"},[t._v("")])],1)})),1):t._e()],1)}))],2)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},"3d79":function(t,e,n){"use strict";n.r(e);var i=n("3f01"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"3f01":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("caff")),o={components:{uLink:a.default},data:function(){return{list:[{id:"view",name:"视图容器",open:!1,pages:["view","scroll-view","swiper","movable-view","cover-view"]},{id:"content",name:"基础内容",open:!1,pages:["text","rich-text","progress"]},{id:"form",name:"表单组件",open:!1,pages:["button","checkbox","form","input","label","picker","picker-view","radio","slider","switch","textarea","editor"]},{id:"nav",name:"导航",open:!1,pages:["navigator"]},{id:"media",name:"媒体组件",open:!1,pages:["image","video","audio"]},{id:"map",name:"地图",open:!1,pages:["map"]},{id:"canvas",name:"画布",open:!1,pages:["canvas"]},{id:"web-view",name:"网页",open:!1,pages:["web-view"]}],navigateFlag:!1}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/component/component"}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(t){if(this.list[t].pages)for(var e=0;e<this.list.length;++e)this.list[e].open=t===e&&!this.list[t].open;else this.goDetailPage(this.list[t].url)},goDetailPage:function(t){var e=this;this.navigateFlag||(this.navigateFlag=!0,"string"===typeof t?uni.navigateTo({url:"/pages/component/"+t+"/"+t}):uni.navigateTo({url:t.url}),setTimeout((function(){e.navigateFlag=!1}),200))}}};e.default=o},"93bd":function(t,e,n){var i=n("db6d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7e1656d2",i,!0,{sourceMap:!1,shadowMode:!1})},db6d:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-685725b0]{min-height:100%;height:auto}\n\n/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */\n.uni-icon[data-v-685725b0]{font-family:uniicons;font-weight:400}.uni-container[data-v-685725b0]{padding:15px;background-color:#f8f8f8}.uni-header-logo[data-v-685725b0]{padding:15px 15px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%}.uni-header-image[data-v-685725b0]{width:80px;height:80px}.uni-hello-text[data-v-685725b0]{margin-bottom:20px}.hello-text[data-v-685725b0]{color:#7a7e83;font-size:14px;line-height:20px}.hello-link[data-v-685725b0]{color:#7a7e83;font-size:14px;line-height:20px}.uni-panel[data-v-685725b0]{margin-bottom:12px}.uni-panel-h[data-v-685725b0]{background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:12px}\n/*\n.uni-panel-h:active {\n    background-color: #f8f8f8;\n}\n */.uni-panel-h-on[data-v-685725b0]{background-color:#f0f0f0}.uni-panel-text[data-v-685725b0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-panel-icon[data-v-685725b0]{margin-left:15px;color:#999;font-size:14px;font-weight:400;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition-duration:0s;transition-duration:0s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.uni-panel-icon-on[data-v-685725b0]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-navigate-item[data-v-685725b0]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-top-style:solid;border-top-color:#f0f0f0;border-top-width:1px;padding:12px}.uni-navigate-item[data-v-685725b0]:active{background-color:#f8f8f8}.uni-navigate-text[data-v-685725b0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-navigate-icon[data-v-685725b0]{margin-left:15px;color:#999;font-size:14px;font-weight:400}",""]),t.exports=e},f181:function(t,e,n){"use strict";var i=n("93bd"),a=n.n(i);a.a}}]);