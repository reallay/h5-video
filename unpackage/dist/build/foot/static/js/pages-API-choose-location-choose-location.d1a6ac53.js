(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-choose-location-choose-location"],{"06a5":function(t,n,e){"use strict";var i=e("19c3"),o=e.n(i);o.a},"0ff0":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("c51f"),o=i.formatLocation,a={data:function(){return{title:"chooseLocation",hasLocation:!1,location:{},locationAddress:""}},methods:{chooseLocation:function(){var t=this;uni.chooseLocation({success:function(n){t.hasLocation=!0,t.location=o(n.longitude,n.latitude),t.locationAddress=n.address}})},clear:function(){this.hasLocation=!1}}};n.default=a},"19c3":function(t,n,e){var i=e("ccbd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("8be84610",i,!0,{sourceMap:!1,shadowMode:!1})},"5ae8":function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"40rpx"}},[e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("当前位置信息")]),!1===t.hasLocation?[e("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未选择位置")])]:t._e(),!0===t.hasLocation?[e("v-uni-view",{staticClass:"uni-hello-text uni-center",staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.locationAddress))]),e("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[e("v-uni-text",[t._v("E: "+t._s(t.location.longitude[0])+"°"+t._s(t.location.longitude[1])+"′")]),e("v-uni-text",[t._v("\\nN: "+t._s(t.location.latitude[0])+"°"+t._s(t.location.latitude[1])+"′")])],1)]:t._e()],2),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.chooseLocation.apply(void 0,arguments)}}},[t._v("选择位置")]),e("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clear.apply(void 0,arguments)}}},[t._v("清空")])],1)],1)],1)},a=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))},be79:function(t,n,e){"use strict";e.r(n);var i=e("0ff0"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},c1ae:function(t,n,e){"use strict";e.r(n);var i=e("5ae8"),o=e("be79");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("06a5");var r,u=e("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"0811a906",null,!1,i["a"],r);n["default"]=c.exports},c51f:function(t,n,e){function i(t){if("number"!==typeof t||t<0)return t;var n=parseInt(t/3600);t%=3600;var e=parseInt(t/60);t%=60;var i=t;return[n,e,i].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function o(t,n,e){var i="",o=n,a=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-"];t&&(o=Math.round(Math.random()*(e-n))+n);for(var r=0;r<o;r++){var u=Math.round(Math.random()*(a.length-1));i+=a[u]}return i}function a(t,n){for(var e=t,i=[],o=0;o<n;o++){if(!(e.length>0))break;var a=Math.floor(Math.random()*e.length);i[o]=e[a],e.splice(a,1)}return i}function r(t,n){return"string"===typeof t&&"string"===typeof n&&(t=parseFloat(t),n=parseFloat(n)),t=t.toFixed(2),n=n.toFixed(2),{longitude:t.toString().split("."),latitude:n.toString().split(".")}}e("a15b"),e("d81d"),e("a434"),e("b6802"),e("d3b7"),e("acd8"),e("e25e"),e("ac1f"),e("25f0"),e("1276");var u={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var n="";for(var e in this.UNITS)if(t>=this.UNITS[e]){n=Math.floor(t/this.UNITS[e])+e+"前";break}return n||"刚刚"},format:function(t){var n=this.parse(t),e=Date.now()-n.getTime();if(e<this.UNITS["天"])return this.humanize(e);var i=function(t){return t<10?"0"+t:t};return n.getFullYear()+"/"+i(n.getMonth()+1)+"/"+i(n.getDate())+"-"+i(n.getHours())+":"+i(n.getMinutes())},parse:function(t){var n=t.split(/[^0-9]/);return new Date(n[0],n[1]-1,n[2],n[3],n[4],n[5])}};t.exports={formatTime:i,formatLocation:r,dateUtils:u,randomWord:o,randomOption:a}},ccbd:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".page-body-info[data-v-0811a906]{padding-bottom:0;height:%?440?%}",""]),t.exports=n}}]);