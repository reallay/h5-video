(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-videoY"],{"0afa":function(t,e,n){"use strict";n.r(e);var o=n("5311"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"0ec1":function(t,e,n){"use strict";var o=n("3007"),i=n.n(o);i.a},"1cea":function(t,e,n){"use strict";var o=n("2fa3"),i=n.n(o);i.a},"2fa3":function(t,e,n){var o=n("700a");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("2abab6f8",o,!0,{sourceMap:!1,shadowMode:!1})},"2fb0":function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?n("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?n("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("天")]):t._e(),n("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.h))]),n("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),n("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.i))]),n("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),n("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():n("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("秒")])],1)},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},3007:function(t,e,n){var o=n("ff0a");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("2d17ba1c",o,!0,{sourceMap:!1,shadowMode:!1})},3048:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniCountdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()}},created:function(t){this.startData()},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,e,n,o){return 60*t*60*24+60*e*60+60*n+o},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,e=0,n=0,o=0,i=0;t>0?(e=Math.floor(t/86400),n=Math.floor(t/3600)-24*e,o=Math.floor(t/60)-24*e*60-60*n,i=Math.floor(t)-24*e*60*60-60*n*60-60*o):this.timeUp(),e<10&&(e="0"+e),n<10&&(n="0"+n),o<10&&(o="0"+o),i<10&&(i="0"+i),this.d=e,this.h=n,this.i=o,this.s=i},startData:function(){var t=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.seconds<=0||(this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3))},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};e.default=o},"408a":function(t,e,n){var o=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},"530a":function(t,e,n){function o(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var n=parseInt(t/60);t%=60;var o=t;return[e,n,o].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function i(t,e,n){var o="",i=e,a=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-"];t&&(i=Math.round(Math.random()*(n-e))+e);for(var r=0;r<i;r++){var d=Math.round(Math.random()*(a.length-1));o+=a[d]}return o}function a(t,e){for(var n=t,o=[],i=0;i<e;i++){if(!(n.length>0))break;var a=Math.floor(Math.random()*n.length);o[i]=n[a],n.splice(a,1)}return o}function r(t){return new Date(Date.parse(t.replace(/-/g,"/"))).getTime()/1e3}function d(t){return(new Date).setTime(Date.parse(t.replace(/-/g,"/"))/1e3+86400-1)}function s(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}n("a15b"),n("d81d"),n("a434"),n("b680"),n("d3b7"),n("acd8"),n("e25e"),n("ac1f"),n("25f0"),n("5319"),n("1276");var c={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var n in this.UNITS)if(t>=this.UNITS[n]){e=Math.floor(t/this.UNITS[n])+n+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),n=Date.now()-e.getTime();if(n<this.UNITS["天"])return this.humanize(n);var o=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+o(e.getMonth()+1)+"/"+o(e.getDate())+"-"+o(e.getHours())+":"+o(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};t.exports={formatTime:o,formatLocation:s,dateUtils:c,randomWord:i,randomOption:a,startUnix:r,endUnix:d}},5311:function(t,e,n){"use strict";(function(t){var o=n("ee27");n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("c8bd")),a=o(n("40db")),r=o(n("d708")),d=(n("530a"),{data:function(){return{videoId:"",video:"",src:"",commentContent:"",commentList:[],activity_id:6,uid:"",nickname:"",token:"",ns_device_id:"",hasComemnts:!1,showVideoBackIcon:!1,showVideoReplayIcon:!1,showVideoErrorIcon:!1,loginAppStatus:!1,mutedValue:!0,controlsValue:!0,mutedActivited:!0,showMutedIcon:!1,hour:0,minute:0,second:0,showCountdown:!1,showCommentInput:!0,danmuList:[],danmuValue:"",videoCurrentTime:"",ioUrl:"http://websockets.hotforest.cn",danmuSockets:""}},components:{uniCountdown:r.default},onReady:function(t){this.videoContext=uni.createVideoContext("myVideo")},destroyed:function(){var t=this,e=t.danmuSockets;e.close()},onLoad:function(e){var n=this;""==n.danmuSockets&&(n.danmuSockets=io(n.ioUrl));var o=n.danmuSockets;o.on("connect",(function(){t.log("connect")})),o.on("danmu message",(function(e){t.log(e);var n=e.content,o=e.nickname,i=document.getElementById("comment-list"),a='<view style="width:100%;color:#ffffff;font-size:16px;">'+o+" ："+n+"</view>";document.getElementById("comment-list").innerHTML+=a,i.scrollTop=i.scrollHeight})),o.on("disconnect",(function(){t.log("disconnect")})),n.videoId=2,n.uid=e.uid,n.token=e.token,n.ns_device_id=e.ns_device_id;var a=new Date("2020/7/8  18:10:00").getTime(),r=(new Date).getTime(),d=Math.round((a-r)/1e3);if(n.second=d,d>=0&&(n.showCountdown=!0),n.controlsValue,n.getVideoDetail(n.videoId),n.getVideoCommentList(n.videoId),n.addVideoLog(),"undefined"!==typeof contact)if(""!==n.uid&&"null"!==n.uid&&void 0!==n.uid){uni.setStorageSync("uid",n.uid),uni.setStorageSync("token",n.token),uni.setStorageSync("ns_device_id",n.ns_device_id),this.loginAppStatus=!0;var s=i.default.bd+"/v3/user/info",c={ns_device_id:n.ns_device_id,uid:n.uid,token:n.token};uni.request({url:s,header:c,method:"GET",success:function(e){if(t.log(e),200==e.statusCode){if(1==e.data.Status){var o=e.data.Data.avatar_url,i=e.data.Data.nickname,a=e.data.Data.phone;n.nickname=i,n.addUserInfo(i,a,o)}}else uni.showToast({title:"服务器错误",icon:"none"})}})}else{n=this;n.loginAppStatus=!1,contact.onLoginDone=function(t,e){uni.reLaunch({url:"/pages/mid/midY?uid="+t+"&token="+e+"&ns_device_id="+n.ns_device_id+"&videoId="+n.videoId})}}},onPullDownRefresh:function(){var t=this,e=t.uid,n=t.token,o=t.ns_device_id,i=t.videoId;setTimeout((function(){uni.reLaunch({url:"/pages/mid/midY?uid="+e+"&token="+n+"&ns_device_id="+o+"&videoId="+i}),uni.stopPullDownRefresh()}),1e3)},methods:{bindTextAreaBlur:function(){t.log("focus")},focusInput:function(){t.log("input focus"),this.showCommentInput=!1},timeUp:function(){t.log("timeup"),this.showCountdown=!1},showVideoTitle:function(){t.log("show"),this.showVideoBackIcon=!0,this.showMutedIcon=!0},hideVideoTitle:function(){t.log("hide");var e=this;e.showCommentInput=!0,setTimeout((function(){e.showVideoBackIcon=!1,e.showMutedIcon=!1}),5e3)},share:function(){var t={types:["wx","wxline","qq","qzone","sina"],fnDoShare:function(t){}};a.default.popup(t)},backIndex:function(){uni.navigateTo({url:"/"})},addUserInfo:function(e,n,o){var a=this,r=a.uid,d=a.activity_id,s=a.ns_device_id,c=1,u={uid:r,name:e,mobile:n,avatar_url:o,activity_id:d,ns_device_id:s,user_type:c,activity_type:d};uni.request({url:i.default.sq+"/activity/api.Users/add",data:u,method:"POST",success:function(e){200==e.statusCode?t.log(e):uni.showToast({title:"服务器错误",icon:"none"})}})},getVideoDetail:function(e){var n=this,o={videoId:e};uni.request({url:i.default.sq+"/activity/api.Video/getVideoDetail",data:o,success:function(e){t.log(e),200===e.statusCode?0==e.data.code?(n.video=e.data.data,1==n.video.is_live&&(n.controlsValue=!1),0==n.video.is_live&&(n.controlsValue=!0)):uni.showToast({title:e.data.info,icon:"none"}):uni.showToast({title:"服务出错",icon:"none"})}})},addDanmu:function(){var t=this,e={activity_id:t.activity_id,uid:t.uid,video_id:t.videoId,parent_id:0,content:t.commentContent,color:t.getRandomColor(),danmu_time:t.videoCurrentTime};uni.request({url:i.default.sq+"/activity/api.Video/addComment",data:e,method:"POST",success:function(e){if(200===e.statusCode)if(0==e.data.code){var n=t.danmuSockets,o={content:t.commentContent,nickname:t.nickname};n.emit("danmu message",o),t.getVideoCommentList(t.videoId),t.commentContent=""}else uni.showToast({title:e.data.info,icon:"none"});else uni.showToast({title:"服务出错",icon:"none"})}})},addComment:function(){var e=this;if("undefined"===typeof contact)uni.showModal({title:"如需留言请下载全民体育",content:"APP留言还可以参加抽奖活动哦~",success:function(e){if(e.confirm){var n=OpenInstall.parseUrlParams();new OpenInstall({appKey:"y346df",onready:function(){var t=this;t.wakeupOrInstall()}},n),t.log("确定")}else e.cancel&&t.log("取消")}});else{var n=e.loginAppStatus;if(n){var o={activity_id:e.activity_id,uid:e.uid,video_id:e.videoId,parent_id:0,content:e.commentContent,color:e.getRandomColor(),danmu_time:e.videoCurrentTime};uni.request({url:i.default.sq+"/activity/api.Video/addComment",data:o,method:"POST",success:function(n){t.log(n),200===n.statusCode?0==n.data.code?(e.videoContext.sendDanmu({text:e.uid+":"+e.commentContent,color:e.getRandomColor()}),e.getVideoDanmuList(e.videoId),e.commentContent=""):uni.showToast({title:n.data.info,icon:"none"}):uni.showToast({title:"服务出错",icon:"none"})}})}else contact.requireLogin()}},getVideoDanmuList:function(e){var n=this,o={activity_id:n.activity_id,video_id:e};uni.request({url:i.default.sq+"/activity/api.Video/getVideoDanmuList",data:o,method:"GET",success:function(e){200==e.statusCode?0==e.data.code&&(n.danmuList=e.data.data,t.log(n.danmuList)):uni.showToast({title:"服务器错误",icon:"none"})}})},getVideoCommentList:function(t){var e=this,n={activity_id:e.activity_id,video_id:t};uni.request({url:i.default.sq+"/activity/api.Video/getVideoCommentList",data:n,method:"GET",success:function(t){200==t.statusCode?0==t.data.code&&(e.commentList=t.data.data,e.commentList.length>0&&(e.hasComemnts=!0)):uni.showToast({title:"服务器错误",icon:"none"})}})},videoErrorCallback:function(e){t.log(e);var n=this;n.showVideoErrorIcon=!0},addVideoLog:function(){var e=this,n={uid:e.uid,activity_id:e.activity_id,video_id:e.videoId};uni.request({url:i.default.sq+"/activity/api.Video/addLog",method:"POST",data:n,success:function(e){t.log(e),200==e.statusCode||uni.showToast({title:"服务器错误",icon:"none"})}})},videoTimeupdate:function(t){this.videoCurrentTime=Math.floor(t.detail.currentTime)},cancelVideoMuted:function(){this.mutedValue=!1,this.mutedActivited=!1},videoMuted:function(){this.mutedValue=!0,this.mutedActivited=!0},videoPlay:function(){t.log("video-play")},videoEnd:function(){t.log("video-end");this.showVideoReplayIcon=!0},videoReplay:function(){t.log("replay"),this.videoContext.play(),this.showVideoReplayIcon=!1},videoErrorReplay:function(){var t=this;t.showVideoErrorIcon=!1;var e=t.uid,n=t.token,o=t.ns_device_id,i=t.videoId;uni.reLaunch({url:"/pages/mid/midY?uid="+e+"&token="+n+"&ns_device_id="+o+"&videoId="+i})},getRandomColor:function(){for(var t=[],e=0;e<3;++e){var n=Math.floor(256*Math.random()).toString(16);n=1==n.length?"0"+n:n,t.push(n)}return"#FFFFFF"}}});e.default=d}).call(this,n("5a52")["default"])},"5a6c":function(t,e,n){"use strict";n.r(e);var o=n("3048"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"700a":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".video-container[data-v-b6497ef0]{width:100%;height:100%;background-color:#fff}[data-v-b6497ef0] .uni-video-cover-play-button{width:%?180?%;height:%?180?%;border-radius:%?180?%;background-image:url(https://aloss.hotforest.cn/video/start.png)!important}[data-v-b6497ef0] .uni-video-cover-duration{display:none}[data-v-b6497ef0] .uni-video-video{\r\n\t/* -webkit-transform: rotate(90deg) !important;\r\n\t\t    -moz-transform: rotate(90deg) !important;\r\n\t\t    -o-transform: rotate(90deg) !important;\r\n\t\t    -ms-transform: rotate(90deg) !important;\r\n\t\t    transform: rotate(90deg) !important; */}.video-bg[data-v-b6497ef0]{height:100%;background-color:#fff}#myVideo[data-v-b6497ef0]{width:100%!important;height:90%!important;overflow:unset}.uni-padding-wrap[data-v-b6497ef0]{width:100%;padding:0;margin:0}.video-title[data-v-b6497ef0]{height:%?50?%;margin-top:%?20?%;font-size:%?28?%;font-family:Lantinghei SC;font-weight:600;color:#333;line-height:%?35?%;padding:0 %?33?% 0 %?22?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.video-description[data-v-b6497ef0]{font-size:%?26?%;font-family:Lantinghei SC;font-weight:200;color:#666;line-height:%?35?%;padding:0 %?33?% 0 %?22?%;height:%?120?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}.comment-container[data-v-b6497ef0]{position:fixed;z-index:1000;bottom:%?140?%;height:30%;width:100%;overflow:scroll;white-space:normal;word-wrap:break-word;word-break:break-all;\r\n\t/* padding-bottom: 160rpx; */background-color:rgba(0,0,0,.3)}.comment-item[data-v-b6497ef0]{padding-top:%?22?%;padding-left:%?22?%;padding-right:%?22?%;padding-bottom:%?22?%;border-bottom:1px solid #f2f2f2\r\n\t/* background-color: #ffffff; */}.comment-t[data-v-b6497ef0]{color:#fff;\r\n\t/* border-top: 1px solid #f2f2f2; */\r\n\t/* margin-top: 20rpx; */padding-left:%?22?%;font-size:%?32?%\r\n\t/* padding-top: 20rpx; */\r\n\t/* padding-bottom: 20rpx; */}.comment-l[data-v-b6497ef0]{width:14%;float:left}.comment-l img[data-v-b6497ef0]{margin-top:%?6?%;width:%?68?%;height:%?68?%;border-radius:%?68?%}.comment-r[data-v-b6497ef0]{width:86%;float:left}.comment-r-1[data-v-b6497ef0]{font-size:%?24?%;font-family:Lantinghei SC;font-weight:200;color:#fff\r\n\t/* color: rgba(102, 102, 102, 1); */}.comment-r-2[data-v-b6497ef0]{font-size:%?24?%;font-family:Lantinghei SC;font-weight:200;color:#fff\r\n\t/* color: rgba(51, 51, 51, 1); */}.comment-input-bg[data-v-b6497ef0]{\r\n\t/* display: none; */position:fixed;z-index:100;bottom:%?0?%;padding-top:%?20?%;padding-bottom:%?40?%;width:100%;background-color:#fff}.comment-input[data-v-b6497ef0]{width:78%;float:left}.comment-input uni-textarea[data-v-b6497ef0]{width:90%;margin:0 auto;\r\n\t/* height: 55rpx !important; */line-height:%?55?%!important;background:#f1f1f1;border-radius:%?20?%;text-indent:%?30?%}.comment-input uni-input[data-v-b6497ef0]{width:90%;margin:0 auto;height:%?55?%;background:#f1f1f1;border-radius:%?28?%;text-indent:%?30?%}.comment-button[data-v-b6497ef0]{width:18%;float:left}.comment-button uni-button[data-v-b6497ef0]{width:%?137?%;height:%?55?%;background:#d84949;border-radius:%?28?%;line-height:%?55?%;font-size:%?24?%;font-family:Lantinghei SC;font-weight:200;color:#fff}\r\n/* .comment-share{\r\n\t\twidth: 12%;\r\n\t\tfloat: left;\r\n\t\ttext-align: center;\r\n\t}\r\n\t.comment-share img{\r\n\t\twidth: 46rpx;\r\n\t\theight: 41rpx;\r\n\t\tmargin-top: 8rpx;\r\n\t} */.back-icon[data-v-b6497ef0]{\r\n\t/* background-color: rgba(0,0,0,1); */padding-top:%?20?%;padding-left:%?26?%;padding-bottom:%?20?%}.back-icon img[data-v-b6497ef0]{width:%?61?%;height:%?65?%}.comment-no-comments[data-v-b6497ef0]{margin-top:%?100?%}.comment-no-comments-img[data-v-b6497ef0]{text-align:center}.comment-no-comments-img img[data-v-b6497ef0]{width:%?146?%;height:%?134?%}.comment-no-comments-text[data-v-b6497ef0]{text-align:center;font-size:%?24?%;font-family:Lantinghei SC;font-weight:200;color:#999}.video-replay[data-v-b6497ef0]{width:%?100?%;height:%?100?%;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0;font-size:%?28?%;color:#0a98d5}.video-replay img[data-v-b6497ef0]{width:100%}.video-error[data-v-b6497ef0]{width:%?100?%;height:%?100?%;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0;font-size:%?28?%;color:#0a98d5}.video-error img[data-v-b6497ef0]{width:100%}.muted-icon[data-v-b6497ef0]{position:absolute;width:%?80?%;height:%?40?%;bottom:%?80?%;right:%?20?%;font-size:%?28?%;text-align:center;line-height:%?40?%;background-color:rgba(0,0,0,.5);color:#eee}.muted-icon-active[data-v-b6497ef0]{color:#0a98d5}.countdown-bg[data-v-b6497ef0]{position:absolute;top:0;background-color:#000;z-index:1;width:100%;height:100%;text-align:center\r\n\t/* display: none; */}.countdown-1[data-v-b6497ef0]{margin-top:%?240?%}.countdown-1 img[data-v-b6497ef0]{width:%?230?%;height:%?175?%}.countdown-2[data-v-b6497ef0]{margin-top:%?82?%;font-size:%?104?%;font-family:Lantinghei SC;font-weight:600;color:#fff;line-height:%?104?%}.countdown-3[data-v-b6497ef0]{margin-top:%?97?%}[data-v-b6497ef0] .uni-countdown{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}[data-v-b6497ef0] .uni-countdown__number{font-size:%?130?%;font-family:Lantinghei SC;font-weight:600;color:#fff;line-height:%?130?%;width:auto;height:auto;color:#fff!important;background-color:unset!important}[data-v-b6497ef0] .uni-countdown__splitor{color:#fff!important;font-size:%?130?%;font-family:Lantinghei SC;font-weight:600;color:#fff;line-height:%?100?%;width:auto;height:auto}[data-v-b6497ef0] .uni-video-danmu p{font-size:%?36?%!important}[data-v-b6497ef0] .uni-video-danmu-item{font-size:%?36?%!important}",""]),t.exports=e},"7e99":function(t,e,n){"use strict";n.r(e);var o=n("8193"),i=n("0afa");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("1cea");var r,d=n("f0c5"),s=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"b6497ef0",null,!1,o["a"],r);e["default"]=s.exports},8193:function(t,e,n){"use strict";var o={uniCountdown:n("d708").default},i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"video-bg"},[o("v-uni-view",{staticClass:"uni-flex uni-column video-container"},[o("v-uni-view",{staticClass:"flex-item",staticStyle:{height:"100%"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.showVideoTitle.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.hideVideoTitle.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt",staticStyle:{height:"100%"}},[t.video?o("v-uni-view",{staticStyle:{height:"100%"}},[o("v-uni-video",{attrs:{id:"myVideo",poster:t.video.cover_url,src:t.video.source_url,controls:t.controlsValue,"enable-danmu":!0,"danmu-btn":!0,"danmu-list":t.danmuList,autoplay:"true","object-fit":"contain","enable-progress-gesture":!1,"page-gesture":!1},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.videoErrorCallback.apply(void 0,arguments)},play:function(e){arguments[0]=e=t.$handleEvent(e),t.videoPlay.apply(void 0,arguments)},ended:function(e){arguments[0]=e=t.$handleEvent(e),t.videoEnd.apply(void 0,arguments)},timeupdate:function(e){arguments[0]=e=t.$handleEvent(e),t.videoTimeupdate.apply(void 0,arguments)}}},[t.showVideoReplayIcon?o("v-uni-cover-view",{staticClass:"video-replay",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.videoReplay.apply(void 0,arguments)}}},[o("img",{attrs:{src:"https://aloss.hotforest.cn/video/start.png",alt:"重播"}})]):t._e(),t.showVideoErrorIcon?o("v-uni-cover-view",{staticClass:"video-error",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.videoErrorReplay.apply(void 0,arguments)}}},[o("img",{attrs:{src:"https://aloss.hotforest.cn/video/start.png",alt:"视频出错"}})]):t._e(),t.showCountdown?o("v-uni-cover-view",{staticClass:"countdown-bg"},[o("v-uni-view",{staticClass:"countdown-1"},[o("img",{attrs:{src:n("8db8"),alt:"logo"}})]),o("v-uni-view",{staticClass:"countdown-2"},[t._v("直播即将开始")]),o("v-uni-view",{staticClass:"countdown-3"},[o("uni-countdown",{attrs:{"show-day":!1,hour:t.hour,minute:t.minute,second:t.second},on:{timeup:function(e){arguments[0]=e=t.$handleEvent(e),t.timeUp.apply(void 0,arguments)}}})],1)],1):t._e()],1)],1):t._e()],1)],1)],1),o("v-uni-view",{staticClass:"uni-flex uni-column comment-container",attrs:{id:"comment-list"}},[o("v-uni-view",{staticClass:"flex-item comment-t"},[t._v("留言抽取 李秋平老师亲笔签名的篮球")])],1),o("v-uni-view",{staticClass:"comment-input-bg"},[o("v-uni-view",{staticClass:"comment-input"},[o("v-uni-input",{attrs:{type:"text",placeholder:"我想说的话"},model:{value:t.commentContent,callback:function(e){t.commentContent=e},expression:"commentContent"}})],1),o("v-uni-view",{staticClass:"comment-button"},[o("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addDanmu()}}},[t._v("发表")])],1)],1)],1)},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},"8db8":function(t,e,n){t.exports=n.p+"static/img/qmty-logo.1f046a53.png"},b680:function(t,e,n){"use strict";var o=n("23e7"),i=n("a691"),a=n("408a"),r=n("1148"),d=n("d039"),s=1..toFixed,c=Math.floor,u=function(t,e,n){return 0===e?n:e%2===1?u(t,e-1,n*t):u(t*t,e/2,n)},l=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},f=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){s.call({})}));o({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,n,o,d,s=a(this),f=i(t),h=[0,0,0,0,0,0],m="",v="0",p=function(t,e){var n=-1,o=e;while(++n<6)o+=t*h[n],h[n]=o%1e7,o=c(o/1e7)},g=function(t){var e=6,n=0;while(--e>=0)n+=h[e],h[e]=c(n/t),n=n%t*1e7},b=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==h[t]){var n=String(h[t]);e=""===e?n:e+r.call("0",7-n.length)+n}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(m="-",s=-s),s>1e-21)if(e=l(s*u(2,69,1))-69,n=e<0?s*u(2,-e,1):s/u(2,e,1),n*=4503599627370496,e=52-e,e>0){p(0,n),o=f;while(o>=7)p(1e7,0),o-=7;p(u(10,o,1),0),o=e-1;while(o>=23)g(1<<23),o-=23;g(1<<o),p(1,1),g(2),v=b()}else p(0,n),p(1<<-e,0),v=b()+r.call("0",f);return f>0?(d=v.length,v=m+(d<=f?"0."+r.call("0",f-d)+v:v.slice(0,d-f)+"."+v.slice(d-f))):v=m+v,v}})},d708:function(t,e,n){"use strict";n.r(e);var o=n("2fb0"),i=n("5a6c");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("0ec1");var r,d=n("f0c5"),s=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"56fe8a40",null,!1,o["a"],r);e["default"]=s.exports},ff0a:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-countdown[data-v-56fe8a40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:%?2?% 0}.uni-countdown__splitor[data-v-56fe8a40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?48?%;padding:%?5?%;font-size:%?24?%}.uni-countdown__number[data-v-56fe8a40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?52?%;height:%?48?%;line-height:%?48?%;margin:%?5?%;text-align:center;font-size:%?24?%}',""]),t.exports=e}}]);