(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-grid-grid"],{"0167":function(t,i,e){"use strict";var n=e("1506"),a=e.n(n);a.a},"0c7c":function(t,i,e){"use strict";e.r(i);var n=e("b657"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},1506:function(t,i,e){var n=e("ccb2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("59ad3f2c",n,!0,{sourceMap:!1,shadowMode:!1})},"1a67":function(t,i,e){var n=e("3ad6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("42266534",n,!0,{sourceMap:!1,shadowMode:!1})},"28ca":function(t,i,e){"use strict";e.r(i);var n=e("486f"),a=e("0c7c");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("6ab6");var o,d=e("f0c5"),c=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"0c70d347",null,!1,n["a"],o);i["default"]=c.exports},"337e":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};i.default=n},3718:function(t,i,e){"use strict";var n=e("1a67"),a=e.n(n);a.a},"3a53":function(t,i,e){"use strict";e.r(i);var n=e("fc2f"),a=e("aa9d");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("7283");var o,d=e("f0c5"),c=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"a5a45f06",null,!1,n["a"],o);i["default"]=c.exports},"3ad6":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'.uni-section[data-v-3a26ef88]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section[data-v-3a26ef88]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n.uni-section__head[data-v-3a26ef88]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-3a26ef88]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-3a26ef88]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-3a26ef88]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-3a26ef88]{font-size:%?28?%;color:#333}.distraction[data-v-3a26ef88]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-3a26ef88]{font-size:%?24?%;color:#999}',""]),t.exports=i},"486f":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.width?e("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[e("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}))},"4d25":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-grid-wrap"},[e("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":t.showBorder},style:{"border-left-style":"solid","border-left-color":t.borderColor,"border-left-width":t.showBorder?"1px":0},attrs:{id:t.elId}},[t._t("default")],2)],1)},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}))},6468:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".uni-grid-wrap[data-v-668b89f1]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\nwidth:100%\n}.uni-grid[data-v-668b89f1]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n\n\t\t/* flex: 1;\n */-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-grid--border[data-v-668b89f1]{border-left-color:#e5e5e5;border-left-style:solid;border-left-width:1px}",""]),t.exports=i},"69b4":function(t,i,e){"use strict";var n=e("9874"),a=e.n(n);a.a},"6aab":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".uni-grid-item[data-v-0c70d347]{\nheight:100%;display:-webkit-box;display:-webkit-flex;display:flex\n}.uni-grid-item__box[data-v-0c70d347]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;width:100%;\nposition:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\n\t\t/* justify-content: center;\n */\n\t\t/* align-items: center;\n */}.uni-grid-item--border[data-v-0c70d347]{position:relative;border-bottom-color:#e5e5e5;border-bottom-style:solid;border-bottom-width:1px;border-right-color:#e5e5e5;border-right-style:solid;border-right-width:1px}.uni-grid-item--border-top[data-v-0c70d347]{border-top-color:#e5e5e5;border-top-style:solid;border-top-width:1px;\nheight:100%;-webkit-box-sizing:border-box;box-sizing:border-box\n}.uni-highlight[data-v-0c70d347]:active{background-color:#f1f1f1}",""]),t.exports=i},"6ab6":function(t,i,e){"use strict";var n=e("7b6d"),a=e.n(n);a.a},7283:function(t,i,e){"use strict";var n=e("7f42"),a=e.n(n);a.a},7958:function(t,i,e){"use strict";var n=e("ee27");e("a434"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("88db")),r=n(e("799c")),o=n(e("28ca")),d=n(e("3a53")),c={components:{uniSection:a.default,uniGrid:r.default,uniGridItem:o.default,uniBadge:d.default},data:function(){return{dynamicList:[],list:[{url:"/static/c1.png",text:"Grid 1",badge:"0",type:"primary"},{url:"/static/c2.png",text:"Grid 2",badge:"1",type:"success"},{url:"/static/c3.png",text:"Grid 3",badge:"99",type:"warning"},{url:"/static/c4.png",text:"Grid 4",badge:"2",type:"error"},{url:"/static/c5.png",text:"Grid 5"},{url:"/static/c6.png",text:"Grid 6"},{url:"/static/c7.png",text:"Grid 7"},{url:"/static/c8.png",text:"Grid 8"},{url:"/static/c9.png",text:"Grid 9"}]}},methods:{change:function(t){var i=t.detail.index;this.list[i].badge&&this.list[i].badge++,uni.showToast({title:"点击第".concat(i+1,"个宫格"),icon:"none"})},add:function(){this.dynamicList.length<9?this.dynamicList.push({url:"/static/c".concat(this.dynamicList.length+1,".png"),text:"Grid ".concat(this.dynamicList.length+1),color:this.dynamicList.length%2===0?"#f5f5f5":"#fff"}):uni.showToast({title:"最多添加9个",icon:"none"})},del:function(){this.dynamicList.splice(this.dynamicList.length-1,1)}}};i.default=c},"799c":function(t,i,e){"use strict";e.r(i);var n=e("4d25"),a=e("bb2b");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("69b4");var o,d=e("f0c5"),c=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"668b89f1",null,!1,n["a"],o);i["default"]=c.exports},"7b6d":function(t,i,e){var n=e("6aab");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("3689c946",n,!0,{sourceMap:!1,shadowMode:!1})},"7f42":function(t,i,e){var n=e("e230");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("603070ef",n,!0,{sourceMap:!1,shadowMode:!1})},"844c":function(t,i,e){"use strict";e.r(i);var n=e("337e"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},"884d":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?e("v-uni-view",{staticClass:"uni-section__head"},[e("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),e("v-uni-view",{staticClass:"uni-section__content"},[e("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?e("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}))},"88db":function(t,i,e){"use strict";e.r(i);var n=e("884d"),a=e("844c");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("3718");var o,d=e("f0c5"),c=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"3a26ef88",null,!1,n["a"],o);i["default"]=c.exports},"94d6":function(t,i,e){"use strict";var n={"uni-section":e("88db").default,"uni-grid":e("799c").default,"uni-grid-item":e("28ca").default,"uni-badge":e("3a53").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"warp"},[e("v-uni-text",{staticClass:"example-info"},[t._v("宫格组件主要使用场景如：商品推荐列表、热门内容等")]),e("uni-section",{attrs:{title:"默认样式（3列）",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-grid",{attrs:{column:3,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(i,n){return e("uni-grid-item",{key:n,attrs:{index:n}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)})),1)],1),e("uni-section",{attrs:{title:"滑动视图",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0}},[e("v-uni-swiper-item",[e("uni-grid",{attrs:{column:3,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(i,n){return e("uni-grid-item",{key:n,attrs:{index:n}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)})),1)],1),e("v-uni-swiper-item",[e("uni-grid",{attrs:{column:3,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(i,n){return e("uni-grid-item",{key:n,attrs:{index:n}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)})),1)],1),e("v-uni-swiper-item",[e("uni-grid",{attrs:{column:3,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(i,n){return e("uni-grid-item",{key:n,attrs:{index:n}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)})),1)],1)],1)],1),e("uni-section",{attrs:{title:"动态加载",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[0!==t.dynamicList.length?e("v-uni-view",{staticClass:"grid-dynamic-box"},[e("uni-grid",{attrs:{column:3,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.dynamicList,(function(i,n){return e("uni-grid-item",{key:n,attrs:{index:n}},[e("v-uni-view",{staticClass:"grid-item-box",style:{backgroundColor:i.color}},[e("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)})),1)],1):t._e(),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.add.apply(void 0,arguments)}}},[t._v("点击添加一个宫格")]),0!==t.dynamicList.length?e("v-uni-button",{staticStyle:{"margin-top":"15px"},attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.del.apply(void 0,arguments)}}},[t._v("点击删除一个宫格")]):t._e()],1),e("uni-section",{attrs:{title:"无边框带角标（3列）",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-grid",{attrs:{column:3,"show-border":!1,square:!1},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(i,n){return n<6?e("uni-grid-item",{key:n,attrs:{index:n}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))]),i.badge?e("v-uni-view",{staticClass:"grid-dot"},[e("uni-badge",{attrs:{text:i.badge,type:i.type}})],1):t._e()],1)],1):t._e()})),1)],1),e("uni-section",{attrs:{title:"矩形宫格（3列）",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-grid",{attrs:{column:3,square:!1,highlight:!1},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(i,n){return e("uni-grid-item",{key:n,attrs:{index:n}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)})),1)],1),e("uni-section",{attrs:{title:"边框颜色（4列 无文字）",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-grid",{attrs:{column:4,"border-color":"#03a9f4"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},[e("uni-grid-item",{attrs:{index:0}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:"/static/c1.png",mode:"aspectFill"}})],1)],1),e("uni-grid-item",{attrs:{index:1}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:"/static/c2.png",mode:"aspectFill"}})],1)],1),e("uni-grid-item",{attrs:{index:2}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:"/static/c3.png",mode:"aspectFill"}})],1)],1),e("uni-grid-item",{attrs:{index:3}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:"/static/c4.png",mode:"aspectFill"}})],1)],1)],1)],1)],1)},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}))},9874:function(t,i,e){var n=e("6468");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("1e6ddee2",n,!0,{sourceMap:!1,shadowMode:!1})},a1c2:function(t,i,e){"use strict";e.r(i);var n=e("7958"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},aa9d:function(t,i,e){"use strict";e.r(i);var n=e("f961"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},b117:function(t,i,e){"use strict";e.r(i);var n=e("94d6"),a=e("a1c2");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("0167");var o,d=e("f0c5"),c=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"50f9dbb8",null,!1,n["a"],o);i["default"]=c.exports},b657:function(t,i,e){"use strict";e("4160"),e("a434"),e("a9e3"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(i,e){i===t&&t.grid.children.splice(e,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};i.default=n},bb2b:function(t,i,e){"use strict";e.r(i);var n=e("dc99"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},ccb2:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-50f9dbb8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-50f9dbb8]{font-size:14px;line-height:inherit}.example[data-v-50f9dbb8]{padding:0 15px 15px}.example-info[data-v-50f9dbb8]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-50f9dbb8]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-50f9dbb8]{padding:0 15px}.example-info[data-v-50f9dbb8]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-50f9dbb8]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-50f9dbb8]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-50f9dbb8]{font-size:18px;color:#fff}.word-btn[data-v-50f9dbb8]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-50f9dbb8]{background-color:#4ca2ff}.image[data-v-50f9dbb8]{width:%?50?%;height:%?50?%}.text[data-v-50f9dbb8]{font-size:%?26?%;margin-top:%?10?%}.example-body[data-v-50f9dbb8]{\ndisplay:block\n}.grid-dynamic-box[data-v-50f9dbb8]{margin-bottom:15px}.grid-item-box[data-v-50f9dbb8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\n\t\t/* position: relative;\n */\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:15px 0}.grid-dot[data-v-50f9dbb8]{position:absolute;top:5px;right:15px}.swiper[data-v-50f9dbb8]{height:420px}body.?%PAGE?%[data-v-50f9dbb8]{background-color:#efeff4}",""]),t.exports=i},dc99:function(t,i,e){"use strict";e("4160"),e("a9e3"),e("d3b7"),e("e25e"),e("ac1f"),e("25f0"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){this.init()},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(i){t.children.forEach((function(t,e){t.width=i}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var i=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(e){i.width=parseInt((e[0].width-1)/i.column)+"px",t(i.width)}))}}};i.default=n},e230:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".uni-badge[data-v-a5a45f06]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:20px;line-height:20px;color:#333;border-radius:100px;background-color:#f1f1f1;background-color:initial;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;padding:0 6px}.uni-badge--inverted[data-v-a5a45f06]{padding:0 5px 0 0;color:#f1f1f1}.uni-badge--default[data-v-a5a45f06]{color:#333;background-color:#f1f1f1}.uni-badge--default-inverted[data-v-a5a45f06]{color:#999;background-color:initial}.uni-badge--primary[data-v-a5a45f06]{color:#fff;background-color:#007aff}.uni-badge--primary-inverted[data-v-a5a45f06]{color:#007aff;background-color:initial}.uni-badge--success[data-v-a5a45f06]{color:#fff;background-color:#4cd964}.uni-badge--success-inverted[data-v-a5a45f06]{color:#4cd964;background-color:initial}.uni-badge--warning[data-v-a5a45f06]{color:#fff;background-color:#f0ad4e}.uni-badge--warning-inverted[data-v-a5a45f06]{color:#f0ad4e;background-color:initial}.uni-badge--error[data-v-a5a45f06]{color:#fff;background-color:#dd524d}.uni-badge--error-inverted[data-v-a5a45f06]{color:#dd524d;background-color:initial}.uni-badge--small[data-v-a5a45f06]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}",""]),t.exports=i},f961:function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};i.default=n},fc2f:function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.text?e("v-uni-text",{staticClass:"uni-badge",class:t.inverted?"uni-badge--"+t.type+" uni-badge--"+t.size+" uni-badge--"+t.type+"-inverted":"uni-badge--"+t.type+" uni-badge--"+t.size,style:t.badgeStyle,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick()}}},[t._v(t._s(t.text))]):t._e()},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}))}}]);