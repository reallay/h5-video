(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-steps-steps"],{"018c":function(e,t,i){"use strict";i.r(t);var n=i("8b18"),o=i("09e4");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("a0f2");var c,r=i("f0c5"),l=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"3682cec8",null,!1,n["a"],c);t["default"]=l.exports},"0602":function(e,t,i){"use strict";var n=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("018c")),a=n(i("88db")),c={components:{uniSection:a.default,uniSteps:o.default},data:function(){return{active:1,list1:[{title:"事件一"},{title:"事件二"},{title:"事件三"},{title:"事件四"}],list2:[{title:"买家下单",desc:"2018-11-11"},{title:"卖家发货",desc:"2018-11-12"},{title:"买家签收",desc:"2018-11-13"},{title:"交易完成",desc:"2018-11-14"}]}},methods:{change:function(){this.active<this.list1.length-1?this.active+=1:this.active=0}}};t.default=c},"09e4":function(e,t,i){"use strict";i.r(t);var n=i("8312"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},"101a":function(e,t,i){var n=i("dba2");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("b5346fae",n,!0,{sourceMap:!1,shadowMode:!1})},"1a67":function(e,t,i){var n=i("3ad6");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("42266534",n,!0,{sourceMap:!1,shadowMode:!1})},"337e":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};t.default=n},3718:function(e,t,i){"use strict";var n=i("1a67"),o=i.n(n);o.a},"3ad6":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'.uni-section[data-v-3a26ef88]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section[data-v-3a26ef88]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n.uni-section__head[data-v-3a26ef88]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-3a26ef88]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-3a26ef88]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-3a26ef88]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-3a26ef88]{font-size:%?28?%;color:#333}.distraction[data-v-3a26ef88]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-3a26ef88]{font-size:%?24?%;color:#999}',""]),e.exports=t},"4e75":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".uni-steps[data-v-3682cec8]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;width:100%;\n\n\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__row[data-v-3682cec8]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__column[data-v-3682cec8]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.uni-steps__row-text-container[data-v-3682cec8]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-steps__column-text-container[data-v-3682cec8]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-steps__row-text[data-v-3682cec8]{\ndisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__column-text[data-v-3682cec8]{padding:6px 0;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#e5e5e5;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__row-title[data-v-3682cec8]{font-size:%?28?%;line-height:16px;text-align:center}.uni-steps__column-title[data-v-3682cec8]{font-size:%?28?%;text-align:left;line-height:18px}.uni-steps__row-desc[data-v-3682cec8]{font-size:12px;line-height:14px;text-align:center}.uni-steps__column-desc[data-v-3682cec8]{font-size:%?24?%;text-align:left;line-height:18px}.uni-steps__row-container[data-v-3682cec8]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-steps__column-container[data-v-3682cec8]{\ndisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;\nwidth:30px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__row-line-item[data-v-3682cec8]{\ndisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:14px;line-height:14px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-steps__column-line-item[data-v-3682cec8]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-steps__row-line[data-v-3682cec8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:1px;background-color:#999}.uni-steps__column-line[data-v-3682cec8]{width:1px;background-color:#999}.uni-steps__row-line--after[data-v-3682cec8]{-webkit-transform:translateX(1px);transform:translateX(1px)}.uni-steps__column-line--after[data-v-3682cec8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transform:translateY(1px);transform:translateY(1px)}.uni-steps__row-line--before[data-v-3682cec8]{-webkit-transform:translateX(-1px);transform:translateX(-1px)}.uni-steps__column-line--before[data-v-3682cec8]{height:6px;-webkit-transform:translateY(-1px);transform:translateY(-1px)}.uni-steps__row-circle[data-v-3682cec8]{width:5px;height:5px;border-radius:100px;background-color:#999;margin:0 3px}.uni-steps__column-circle[data-v-3682cec8]{width:5px;height:5px;border-radius:100px;background-color:#999;margin:4px 0 5px 0}.uni-steps__row-check[data-v-3682cec8]{margin:0 6px}.uni-steps__column-check[data-v-3682cec8]{height:14px;line-height:14px;margin:2px 0}",""]),e.exports=t},"712e":function(e,t,i){"use strict";i.r(t);var n=i("0602"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},8312:function(e,t,i){"use strict";var n=i("ee27");i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("6483")),a={name:"UniSteps",components:{uniIcons:o.default},props:{direction:{type:String,default:"row"},activeColor:{type:String,default:"#1aad19"},deactiveColor:{type:String,default:"#999999"},active:{type:Number,default:0},options:{type:Array,default:function(){return[]}}},data:function(){return{}}};t.default=a},"844c":function(e,t,i){"use strict";i.r(t);var n=i("337e"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},"884d":function(e,t,i){"use strict";var n,o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[e.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:e.type})],1):e._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!e.subTitle}},[e._v(e._s(e.title))]),e.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[e._v(e._s(e.subTitle))]):e._e()],1),e._t("default")],2)},a=[];i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))},"88db":function(e,t,i){"use strict";i.r(t);var n=i("884d"),o=i("844c");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("3718");var c,r=i("f0c5"),l=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"3a26ef88",null,!1,n["a"],c);t["default"]=l.exports},"8b18":function(e,t,i){"use strict";var n={"uni-icons":i("6483").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-steps"},[i("v-uni-view",{class:["column"===e.direction?"uni-steps__column":"uni-steps__row"]},[i("v-uni-view",{class:["column"===e.direction?"uni-steps__column-text-container":"uni-steps__row-text-container"]},e._l(e.options,(function(t,n){return i("v-uni-view",{key:n,class:["column"===e.direction?"uni-steps__column-text":"uni-steps__row-text"]},[i("v-uni-text",{class:["column"===e.direction?"uni-steps__column-title":"uni-steps__row-title"],style:{color:n<=e.active?e.activeColor:e.deactiveColor}},[e._v(e._s(t.title))]),i("v-uni-text",{class:["column"===e.direction?"uni-steps__column-desc":"uni-steps__row-desc"],style:{color:n<=e.active?e.activeColor:e.deactiveColor}},[e._v(e._s(t.desc))])],1)})),1),i("v-uni-view",{class:["column"===e.direction?"uni-steps__column-container":"uni-steps__row-container"]},e._l(e.options,(function(t,n){return i("v-uni-view",{key:n,class:["column"===e.direction?"uni-steps__column-line-item":"uni-steps__row-line-item"]},[i("v-uni-view",{class:["column"===e.direction?"uni-steps__column-line":"uni-steps__row-line","column"===e.direction?"uni-steps__column-line--before":"uni-steps__row-line--before"],style:{backgroundColor:n<=e.active&&0!==n?e.activeColor:0===n?"transparent":e.deactiveColor}}),n===e.active?i("v-uni-view",{class:["column"===e.direction?"uni-steps__column-check":"uni-steps__row-check"]},[i("uni-icons",{attrs:{color:e.activeColor,type:"checkbox-filled",size:"14"}})],1):i("v-uni-view",{class:["column"===e.direction?"uni-steps__column-circle":"uni-steps__row-circle"],style:{backgroundColor:n<e.active?e.activeColor:e.deactiveColor}}),i("v-uni-view",{class:["column"===e.direction?"uni-steps__column-line":"uni-steps__row-line","column"===e.direction?"uni-steps__column-line--after":"uni-steps__row-line--after"],style:{backgroundColor:n<e.active&&n!==e.options.length-1?e.activeColor:n===e.options.length-1?"transparent":e.deactiveColor}})],1)})),1)],1)],1)},a=[];i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))},9228:function(e,t,i){"use strict";i.r(t);var n=i("fd71"),o=i("712e");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("e3b0");var c,r=i("f0c5"),l=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"4cb7caea",null,!1,n["a"],c);t["default"]=l.exports},a0f2:function(e,t,i){"use strict";var n=i("f17f"),o=i.n(n);o.a},dba2:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-4cb7caea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-4cb7caea]{font-size:14px;line-height:inherit}.example[data-v-4cb7caea]{padding:0 15px 15px}.example-info[data-v-4cb7caea]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-4cb7caea]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-4cb7caea]{padding:0 15px}.example-info[data-v-4cb7caea]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-4cb7caea]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-4cb7caea]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-4cb7caea]{font-size:18px;color:#fff}.word-btn[data-v-4cb7caea]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-4cb7caea]{background-color:#4ca2ff}.status-btn[data-v-4cb7caea]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?92?%;margin:%?30?%;background-color:#007aff}.example-body[data-v-4cb7caea]{\ndisplay:block;\npadding:15px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}body.?%PAGE?%[data-v-4cb7caea]{background-color:#efeff4}",""]),e.exports=t},e3b0:function(e,t,i){"use strict";var n=i("101a"),o=i.n(n);o.a},f17f:function(e,t,i){var n=i("4e75");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("4448e729",n,!0,{sourceMap:!1,shadowMode:!1})},fd71:function(e,t,i){"use strict";var n={"uni-section":i("88db").default,"uni-steps":i("018c").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("uni-section",{attrs:{title:"基本用法",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-steps",{attrs:{options:e.list1,"active-color":"#007AFF",active:e.active}})],1),i("uni-section",{attrs:{title:"纵向排列",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-steps",{attrs:{options:e.list2,"active-color":"#007AFF",active:e.active,direction:"column"}})],1),i("v-uni-view",{staticClass:"word-btn",attrs:{"hover-class":"word-btn--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"word-btn-white"},[e._v("改变状态")])],1)],1)},a=[];i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))}}]);