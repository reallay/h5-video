(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-background-audio-background-audio"],{"4ab6":function(t,a,i){"use strict";var e,n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"uni-center"},[i("v-uni-text",{staticClass:"time-big"},[t._v(t._s(t.formatedPlayTime))])],1),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-slider",{staticClass:"slider",attrs:{min:"0",max:"21",step:"1",value:t.playTime},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.seek.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"play-time"},[i("v-uni-text",[t._v("00:00")]),i("v-uni-text",[t._v("00:21")])],1),i("v-uni-view",{staticClass:"uni-hello-text"},[t._v("注意：离开当前页面后背景音乐将保持播放，但退出uni-app将停止")]),i("v-uni-view",{staticClass:"page-body-buttons"},[t.playing?[i("v-uni-view",{staticClass:"page-body-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.stop.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/stop.png"}})],1),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.pause.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/pause.png"}})],1)]:t._e(),t.playing?t._e():[i("v-uni-view",{staticClass:"page-body-button"}),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.play.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/play.png"}})],1)],i("v-uni-view",{staticClass:"page-body-button"})],2)],1)],1)},o=[];i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}))},6784:function(t,a,i){var e=i("7405");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("6b971e2f",e,!0,{sourceMap:!1,shadowMode:!1})},7405:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"uni-image[data-v-62c99ee0]{width:%?150?%;height:%?150?%}.page-body-text[data-v-62c99ee0]{padding:0 %?30?%}.page-body-wrapper[data-v-62c99ee0]{margin-top:0}.page-body-info[data-v-62c99ee0]{padding-bottom:%?50?%}.time-big[data-v-62c99ee0]{font-size:%?60?%;margin:%?20?%}.slider[data-v-62c99ee0]{width:%?630?%}.play-time[data-v-62c99ee0]{font-size:%?28?%;width:100%;padding:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box}.page-body-buttons[data-v-62c99ee0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;margin-top:%?100?%}.page-body-button[data-v-62c99ee0]{width:%?250?%;text-align:center}",""]),t.exports=a},"79f36":function(t,a,i){"use strict";var e=i("6784"),n=i.n(e);n.a},9771:function(t,a,i){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i("ce9c"),n={data:function(){return{title:"backgroundAudio",bgAudioMannager:null,dataUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3",playing:!1,playTime:0,formatedPlayTime:"00:00:00"}},onLoad:function(){var a=this;this.playing=this.$backgroundAudioData.playing,this.playTime=this.$backgroundAudioData.playTime,this.formatedPlayTime=this.$backgroundAudioData.formatedPlayTime;var i=uni.getBackgroundAudioManager();i.title||(i.title="致爱丽丝"),i.singer||(i.singer="暂无"),i.coverImgUrl||(i.coverImgUrl="https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg"),i.onPlay((function(){t.log("开始播放"),a.$backgroundAudioData.playing=a.playing=!0})),i.onPause((function(){t.log("暂停播放"),a.$backgroundAudioData.playing=a.playing=!1})),i.onEnded((function(){a.playing=!1,a.$backgroundAudioData.playing=!1,a.$backgroundAudioData.playTime=a.playTime=0,a.$backgroundAudioData.formatedPlayTime=a.formatedPlayTime=e.formatTime(0)})),i.onTimeUpdate((function(t){Math.floor(i.currentTime)>Math.floor(a.playTime)&&(a.$backgroundAudioData.formatedPlayTime=a.formatedPlayTime=e.formatTime(Math.floor(i.currentTime))),a.$backgroundAudioData.playTime=a.playTime=i.currentTime})),this.bgAudioMannager=i},methods:{play:function(t){this.bgAudioMannager.src?(this.bgAudioMannager.seek(this.playTime),this.bgAudioMannager.play()):(this.bgAudioMannager.startTime=this.playTime,this.bgAudioMannager.src=this.dataUrl)},seek:function(t){this.bgAudioMannager.seek(t.detail.value)},pause:function(){this.bgAudioMannager.pause()},stop:function(){this.bgAudioMannager.stop(),this.$backgroundAudioData.playing=this.playing=!1,this.$backgroundAudioData.playTime=this.playTime=0,this.$backgroundAudioData.formatedPlayTime=this.formatedPlayTime=e.formatTime(0)}}};a.default=n}).call(this,i("5a52")["default"])},ce9c:function(t,a,i){function e(t){if("number"!==typeof t||t<0)return t;var a=parseInt(t/3600);t%=3600;var i=parseInt(t/60);t%=60;var e=t;return[a,i,e].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function n(t,a,i){var e="",n=a,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-"];t&&(n=Math.round(Math.random()*(i-a))+a);for(var r=0;r<n;r++){var u=Math.round(Math.random()*(o.length-1));e+=o[u]}return e}function o(t,a){for(var i=t,e=[],n=0;n<a;n++){if(!(i.length>0))break;var o=Math.floor(Math.random()*i.length);e[n]=i[o],i.splice(o,1)}return e}function r(t,a){return"string"===typeof t&&"string"===typeof a&&(t=parseFloat(t),a=parseFloat(a)),t=t.toFixed(2),a=a.toFixed(2),{longitude:t.toString().split("."),latitude:a.toString().split(".")}}i("a15b"),i("d81d"),i("a434"),i("b6802"),i("d3b7"),i("acd8"),i("e25e"),i("ac1f"),i("25f0"),i("1276");var u={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var a="";for(var i in this.UNITS)if(t>=this.UNITS[i]){a=Math.floor(t/this.UNITS[i])+i+"前";break}return a||"刚刚"},format:function(t){var a=this.parse(t),i=Date.now()-a.getTime();if(i<this.UNITS["天"])return this.humanize(i);var e=function(t){return t<10?"0"+t:t};return a.getFullYear()+"/"+e(a.getMonth()+1)+"/"+e(a.getDate())+"-"+e(a.getHours())+":"+e(a.getMinutes())},parse:function(t){var a=t.split(/[^0-9]/);return new Date(a[0],a[1]-1,a[2],a[3],a[4],a[5])}};t.exports={formatTime:e,formatLocation:r,dateUtils:u,randomWord:n,randomOption:o}},f625:function(t,a,i){"use strict";i.r(a);var e=i("4ab6"),n=i("fd27");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("79f36");var r,u=i("f0c5"),s=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"62c99ee0",null,!1,e["a"],r);a["default"]=s.exports},fd27:function(t,a,i){"use strict";i.r(a);var e=i("9771"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a}}]);