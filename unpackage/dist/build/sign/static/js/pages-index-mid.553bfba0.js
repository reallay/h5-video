(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-mid"],{"182f":function(n,e,t){"use strict";t.r(e);var u=t("9ef8"),i=t.n(u);for(var c in u)"default"!==c&&function(n){t.d(e,n,(function(){return u[n]}))}(c);e["default"]=i.a},"5c6e":function(n,e,t){"use strict";t.r(e);var u=t("90c4"),i=t("182f");for(var c in i)"default"!==c&&function(n){t.d(e,n,(function(){return i[n]}))}(c);var r,o=t("f0c5"),a=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,"5f981908",null,!1,u["a"],r);e["default"]=a.exports},"90c4":function(n,e,t){"use strict";var u,i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view")},c=[];t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return u}))},"9ef8":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"mid",onShow:function(){},onLoad:function(n){uni.setStorageSync("uid",n.uid),uni.setStorageSync("token",n.token),uni.setStorageSync("ns_device_id",n.ns_device_id);var e=uni.getStorageSync("uid"),t=uni.getStorageSync("token"),u=uni.getStorageSync("ns_device_id");uni.reLaunch({url:"/?uid="+e+"&token="+t+"&ns_device_id="+u})}};e.default=u}}]);