(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0897":function(t,e,i){"use strict";var n=i("3905"),a=i.n(n);a.a},3905:function(t,e,i){var n=i("b1bf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("48faac12",n,!0,{sourceMap:!1,shadowMode:!1})},"52b7":function(t,e,i){"use strict";i.r(e);var n=i("8c61"),a=i("5927");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("0897");var d,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"15bdeef5",null,!1,n["a"],d);e["default"]=u.exports},5927:function(t,e,i){"use strict";i.r(e);var n=i("e9f9"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"8c61":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"index-bg"},t._l(t.videoList,(function(e,n){return t.videoList?i("v-uni-view",{key:n,staticClass:"uni-flex uni-column video-item"},[i("v-uni-view",{staticClass:"flex-item"},[i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",[i("v-uni-video",{staticClass:"myVideo",attrs:{id:e.id+"",poster:e.cover_url,src:e.source_url,title:e.title,"object-fit":"contain","data-id":e.id+""},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.videoErrorCallback.apply(void 0,arguments)},fullscreenchange:function(e){arguments[0]=e=t.$handleEvent(e),t.fullscreenchange.apply(void 0,arguments)},play:function(e){arguments[0]=e=t.$handleEvent(e),t.playing.apply(void 0,arguments)}}})],1)],1)],1),i("v-uni-view",{staticClass:"flex-item video-title"},[i("v-uni-text",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.turnVideoDetail(e.id)}}},[t._v(t._s(e.title))])],1)],1):t._e()})),1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},b1bf:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".index-bg[data-v-15bdeef5]{height:100%;background-color:#fff}.video-item[data-v-15bdeef5]{background-color:#fff}.myVideo[data-v-15bdeef5]{width:100%!important\r\n\t/* height: 420rpx; */}.uni-padding-wrap[data-v-15bdeef5]{width:100%;padding:0;margin:0}.video-title[data-v-15bdeef5]{font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#333;padding:%?10?% %?33?% %?20?% %?22?%}.back-icon[data-v-15bdeef5]{margin-top:%?30?%;padding-left:%?26?%}.back-icon img[data-v-15bdeef5]{width:%?55?%;height:%?55?%}[data-v-15bdeef5] .uni-video-cover-play-button{width:%?180?%;height:%?180?%;border-radius:%?180?%;background-image:url(https://aloss.hotforest.cn/video/start.png)!important}[data-v-15bdeef5] .uni-video-cover-duration{display:none}",""]),t.exports=e},e9f9:function(t,e,i){"use strict";(function(t){var n=i("ee27");i("a15b"),i("d3b7"),i("e25e"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("c8bd")),o={data:function(){return{videoList:[],src:""}},onReady:function(t){},onLoad:function(t){var e=this;e.getVideoList()},methods:{getVideoList:function(){var e=this;uni.request({url:a.default.sq+"/activity/api.Video/getList",success:function(i){t.log(i),200===i.statusCode?0==i.data.code?e.videoList=i.data.data:uni.showToast({title:i.data.info,icon:"none"}):uni.showToast({title:"服务出错",icon:"none"})}})},turnVideoDetail:function(e){t.log(e),uni.navigateTo({url:"/pages/index/video?id="+e})},playing:function(t){var e=t.currentTarget.dataset.id;this.videoContent=uni.createVideoContext(e);for(var i=this.videoList,n=0;n<i.length;n++){var a=i[n].id;a!==parseInt(e)&&uni.createVideoContext(a+"").pause()}},sendDanmu:function(){this.videoContext.sendDanmu({text:this.danmuValue,color:this.getRandomColor()}),this.danmuValue=""},videoErrorCallback:function(t){uni.showModal({content:t.target.errMsg,showCancel:!1})},fullscreenchange:function(t){},getRandomColor:function(){for(var t=[],e=0;e<3;++e){var i=Math.floor(256*Math.random()).toString(16);i=1==i.length?"0"+i:i,t.push(i)}return"#"+t.join("")},sliderChange:function(e){t.log("value 发生变化："+e.detail.value)}}};e.default=o}).call(this,i("5a52")["default"])}}]);