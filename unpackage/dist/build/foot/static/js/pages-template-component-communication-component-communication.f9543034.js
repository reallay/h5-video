(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-component-communication-component-communication"],{"0922":function(e,t,n){"use strict";var r,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"sender-container"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.send.apply(void 0,arguments)}}},[e._v("点击发送消息")])],1)},u=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}))},"0e1e":function(e,t,n){"use strict";var r,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:"组件通讯示例"}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-btn-v"},[n("reciver"),n("sender"),n("sender-bus")],1)],1)],1)},u=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}))},"1b68":function(e,t,n){"use strict";var r=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("89f6")),u={data:function(){return{msg:""}},created:function(){uni.$on("cc",this.recive),a.default.$on("cc",this.recive)},beforeDestroy:function(){uni.$off("cc",this.recive),a.default.$off("cc",this.recive)},methods:{recive:function(e){this.msg=e.msg}}};t.default=u},"2cca":function(e,t,n){"use strict";n.r(t);var r=n("b769"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},"45be":function(e,t,n){"use strict";n.r(t);var r=n("0e1e"),a=n("9d55");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);var i,c=n("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"2253567a",null,!1,r["a"],i);t["default"]=o.exports},"4d35":function(e,t,n){"use strict";var r=n("7636"),a=n.n(r);a.a},"5a5a":function(e,t,n){"use strict";var r,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"sender-container"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.send.apply(void 0,arguments)}}},[e._v("自定义EventBus")])],1)},u=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}))},"5bfc":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".sender-container[data-v-e2b10918]{padding:20px}",""]),e.exports=t},7636:function(e,t,n){var r=n("5bfc");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("ec1b2412",r,!0,{sourceMap:!1,shadowMode:!1})},"89f6":function(e,t,n){"use strict";var r=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("e143")),u=new a.default;t.default=u},"912c":function(e,t,n){"use strict";var r=n("d29b"),a=n.n(r);a.a},"92e1":function(e,t,n){"use strict";n.r(t);var r=n("5a5a"),a=n("ca7d");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("4d35");var i,c=n("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"e2b10918",null,!1,r["a"],i);t["default"]=o.exports},"9d55":function(e,t,n){"use strict";n.r(t);var r=n("b7de"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},a116:function(e,t,n){"use strict";var r,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"reciver"},[e._v(e._s(""===e.msg?"等待发送":"收到消息：")+e._s(e.msg))])],1)},u=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}))},aa12:function(e,t,n){"use strict";n.r(t);var r=n("a116"),a=n("b85a");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("f8e5");var i,c=n("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"4e0cd362",null,!1,r["a"],i);t["default"]=o.exports},b004:function(e,t,n){var r=n("d747");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("0d40f120",r,!0,{sourceMap:!1,shadowMode:!1})},b769:function(e,t,n){"use strict";n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={methods:{send:function(){var e=parseInt(1e4*Math.random());uni.$emit("cc",{msg:"From uni.$emit -> "+e})}}};t.default=r},b7de:function(e,t,n){"use strict";var r=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("aa12")),u=r(n("c7e3")),i=r(n("92e1")),c={components:{reciver:a.default,sender:u.default,senderBus:i.default},data:function(){return{}},methods:{}};t.default=c},b85a:function(e,t,n){"use strict";n.r(t);var r=n("1b68"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},b968:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".sender-container[data-v-77638b78]{padding:20px}",""]),e.exports=t},c7e3:function(e,t,n){"use strict";n.r(t);var r=n("0922"),a=n("2cca");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("912c");var i,c=n("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"77638b78",null,!1,r["a"],i);t["default"]=o.exports},ca7d:function(e,t,n){"use strict";n.r(t);var r=n("fa31"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},d29b:function(e,t,n){var r=n("b968");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("f18a3856",r,!0,{sourceMap:!1,shadowMode:!1})},d747:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".reciver[data-v-4e0cd362]{padding:40px 0;text-align:center;line-height:40px}",""]),e.exports=t},f8e5:function(e,t,n){"use strict";var r=n("b004"),a=n.n(r);a.a},fa31:function(e,t,n){"use strict";var r=n("ee27");n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("89f6")),u={methods:{send:function(){var e=parseInt(1e4*Math.random());a.default.$emit("cc",{msg:"From event bus -> "+e})}}};t.default=u}}]);