(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sports-sports"],{"23c0":function(t,e,n){"use strict";n.r(e);var a=n("9991"),i=n("a4a6a");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("3192");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"4923aac5",null,!1,a["a"],o);e["default"]=c.exports},3192:function(t,e,n){"use strict";var a=n("56f6"),i=n.n(a);i.a},4127:function(t,e,n){"use strict";var a=n("d233"),i=n("b313"),r={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},o=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,serializeDate:function(t){return o.call(t)},skipNulls:!1,strictNullHandling:!1},c=function t(e,n,i,r,o,c,l,u,d,f,p,g){var v=e;if("function"===typeof l)v=l(n,v);else if(v instanceof Date)v=f(v);else if(null===v){if(r)return c&&!g?c(n,s.encoder):n;v=""}if("string"===typeof v||"number"===typeof v||"boolean"===typeof v||a.isBuffer(v)){if(c){var h=g?n:c(n,s.encoder);return[p(h)+"="+p(c(v,s.encoder))]}return[p(n)+"="+p(String(v))]}var m,y=[];if("undefined"===typeof v)return y;if(Array.isArray(l))m=l;else{var b=Object.keys(v);m=u?b.sort(u):b}for(var _=0;_<m.length;++_){var w=m[_];o&&null===v[w]||(y=Array.isArray(v)?y.concat(t(v[w],i(n,w),i,r,o,c,l,u,d,f,p,g)):y.concat(t(v[w],n+(d?"."+w:"["+w+"]"),i,r,o,c,l,u,d,f,p,g)))}return y};t.exports=function(t,e){var n=t,o=e?a.assign({},e):{};if(null!==o.encoder&&void 0!==o.encoder&&"function"!==typeof o.encoder)throw new TypeError("Encoder has to be a function.");var l="undefined"===typeof o.delimiter?s.delimiter:o.delimiter,u="boolean"===typeof o.strictNullHandling?o.strictNullHandling:s.strictNullHandling,d="boolean"===typeof o.skipNulls?o.skipNulls:s.skipNulls,f="boolean"===typeof o.encode?o.encode:s.encode,p="function"===typeof o.encoder?o.encoder:s.encoder,g="function"===typeof o.sort?o.sort:null,v="undefined"!==typeof o.allowDots&&o.allowDots,h="function"===typeof o.serializeDate?o.serializeDate:s.serializeDate,m="boolean"===typeof o.encodeValuesOnly?o.encodeValuesOnly:s.encodeValuesOnly;if("undefined"===typeof o.format)o.format=i["default"];else if(!Object.prototype.hasOwnProperty.call(i.formatters,o.format))throw new TypeError("Unknown format option provided.");var y,b,_=i.formatters[o.format];"function"===typeof o.filter?(b=o.filter,n=b("",n)):Array.isArray(o.filter)&&(b=o.filter,y=b);var w,x=[];if("object"!==typeof n||null===n)return"";w=o.arrayFormat in r?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var S=r[w];y||(y=Object.keys(n)),g&&y.sort(g);for(var k=0;k<y.length;++k){var j=y[k];d&&null===n[j]||(x=x.concat(c(n[j],j,S,u,d,f?p:null,b,g,v,h,_,m)))}var O=x.join(l),C=!0===o.addQueryPrefix?"?":"";return O.length>0?C+O:""}},4328:function(t,e,n){"use strict";var a=n("4127"),i=n("9e6a"),r=n("b313");t.exports={formats:r,parse:i,stringify:a}},"56f6":function(t,e,n){var a=n("80c7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("3b93fb02",a,!0,{sourceMap:!1,shadowMode:!1})},"80c7":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"a[data-v-4923aac5]{text-decoration:none}.msg-modal-bg[data-v-4923aac5]{background:url(http://aloss.hotforest.cn/h5-basketball/question-end-bg.png) no-repeat;background-size:100% 100%;width:80%;height:%?756.47?%;top:20%;left:10%;position:fixed;z-index:100000000}.msg-modal[data-v-4923aac5]{background-color:rgba(0,0,0,.5);background-position:top;background-size:100% 100%;width:100%;height:100%;position:fixed;z-index:10000000;top:0;left:0}.modal-msg-t[data-v-4923aac5]{text-align:center;height:50%;padding:20% 10% 0 10%}.modal-msg-t h3[data-v-4923aac5]{color:#fff;width:100%;margin:0 auto;font-size:%?51.76?%}.modal-msg-t h5[data-v-4923aac5]{color:#333;font-size:%?29.41?%;margin-top:30px}.modal-msg-d[data-v-4923aac5]{height:30%}.modal-msg-d-l[data-v-4923aac5]{padding-left:10%;padding-top:10%;width:50%;float:left}.modal-msg-d-l p[data-v-4923aac5]{font-size:%?25.88?%;font-family:Lantinghei SC;font-weight:600;color:#333}.modal-msg-d-r[data-v-4923aac5]{width:30%;margin-left:10%;padding-top:5%;float:left}.modal-msg-d-r img[data-v-4923aac5]{width:%?138.82?%;height:100%}.msg-modal span[data-v-4923aac5]{font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#fff}.index-bg[data-v-4923aac5]{background:url(https://aloss.hotforest.cn/basketball-v2/index-bg.png) no-repeat;width:100%;height:100%;background-size:100% 100%\n\t/* background-size: cover; */\n\t/* position: absolute; */\n\t/* filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg-login.png', sizingMethod='scale'); */}.index-top[data-v-4923aac5]{height:%?76?%;padding-top:%?33?%}.index-top-l[data-v-4923aac5]{float:left;width:%?214?%;height:%?104?%;background:url(https://aloss.hotforest.cn/basketball-v2/index-top-l.png) no-repeat;background-size:100% 100%;background-position:0;margin-left:%?20?%;cursor:pointer}.index-top-r[data-v-4923aac5]{float:right;width:%?193?%;height:%?108?%;background:url(https://aloss.hotforest.cn/basketball-v2/index-top-r.png) no-repeat;background-size:100% 100%;background-position:100%;cursor:pointer;margin-right:%?20?%}.index-d[data-v-4923aac5]{position:absolute;width:100%;height:%?156?%;bottom:%?186?%}.index-d-bg[data-v-4923aac5]{width:%?490?%;height:%?156?%;background:url(https://aloss.hotforest.cn/basketball-v2/index-button.png) no-repeat;text-align:center;margin:0 auto;line-height:%?156?%;background-size:100% 100%}.index-d-bg span[data-v-4923aac5]{font-size:%?74?%;font-family:wawaw5;font-weight:700;color:#2a64d0;line-height:%?62?%;-webkit-text-stroke:%?1?% rgba(16,16,16,.8);text-stroke:%?1?% rgba(16,16,16,.8)}@font-face{font-family:wawaw5;src:url(https://aloss.hotforest.cn/basketball-v2/huakangwawaW5.ttf)}",""]),t.exports=e},9991:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-flex uni-column index-bg"},[n("v-uni-view",{staticClass:"flex-item flex-item-V index-top"},[n("v-uni-view",{staticClass:"index-top-l",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.turn_rule.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"index-top-r",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.turn_rank.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"flex-item flex-item-V index-d"},[1==t.contactExists?n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.login_app_status,expression:"login_app_status == false"}],staticClass:"index-d-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loginApp.apply(void 0,arguments)}}},[n("span",[t._v("我要答题")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:1==t.login_app_status,expression:"login_app_status == true"}],staticClass:"index-d-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.turnQuestion(1)}}},[n("span",[t._v("我要答题")])])]):t._e(),0==t.contactExists?n("div",{staticClass:"index-d-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.turnQuestion(2)}}},[n("span",[t._v("我要答题")])]):t._e()]),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.msg_modal_share,expression:"msg_modal_share === true"}],staticClass:"msg-modal",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.msg_modal_close.apply(void 0,arguments)}}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.msg_modal_share,expression:"msg_modal_share === true"}],staticClass:"msg-modal-bg"},[n("v-uni-view",{staticClass:"modal-msg-t"},[n("h3",[t._v("您今天答题的机会"),n("br"),t._v("已经用完了")])]),n("v-uni-view",{staticClass:"modal-msg-d"},[n("v-uni-view",{staticClass:"modal-msg-d-l"},[n("p",[t._v("长按保存二维码"),n("br"),t._v("下载全民体育APP 参与活动")])]),n("v-uni-view",{staticClass:"modal-msg-d-r"},[n("img",{attrs:{src:"http://aloss.hotforest.cn/h5-basketball/m-share-qrcode.png",alt:""}})])],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.msg_modal_app_share,expression:"msg_modal_app_share === true"}],staticClass:"msg-modal",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.msg_modal_app.apply(void 0,arguments)}}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.msg_modal_app_share,expression:"msg_modal_app_share === true"}],staticClass:"msg-modal-bg"},[n("v-uni-view",{staticClass:"modal-msg-t"},[n("h3",[t._v("打开全民体育App"),n("br"),t._v("参与答题")])]),n("v-uni-view",{staticClass:"modal-msg-d"},[n("v-uni-view",{staticClass:"modal-msg-d-l"},[n("p",[t._v("长按识别二维码"),n("br"),t._v("下载全民体育APP 参与活动")])]),n("v-uni-view",{staticClass:"modal-msg-d-r"},[n("img",{attrs:{src:"http://aloss.hotforest.cn/h5-basketball/m-share-qrcode.png",alt:""}})])],1)],1)],1)},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}))},"9e6a":function(t,e,n){"use strict";var a=n("d233"),i=Object.prototype.hasOwnProperty,r={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:a.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},o=function(t,e){for(var n={},a=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,o=e.parameterLimit===1/0?void 0:e.parameterLimit,s=a.split(e.delimiter,o),c=0;c<s.length;++c){var l,u,d=s[c],f=d.indexOf("]="),p=-1===f?d.indexOf("="):f+1;-1===p?(l=e.decoder(d,r.decoder),u=e.strictNullHandling?null:""):(l=e.decoder(d.slice(0,p),r.decoder),u=e.decoder(d.slice(p+1),r.decoder)),i.call(n,l)?n[l]=[].concat(n[l]).concat(u):n[l]=u}return n},s=function(t,e,n){for(var a=e,i=t.length-1;i>=0;--i){var r,o=t[i];if("[]"===o)r=[],r=r.concat(a);else{r=n.plainObjects?Object.create(null):{};var s="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,c=parseInt(s,10);!isNaN(c)&&o!==s&&String(c)===s&&c>=0&&n.parseArrays&&c<=n.arrayLimit?(r=[],r[c]=a):r[s]=a}a=r}return a},c=function(t,e,n){if(t){var a=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,r=/(\[[^[\]]*])/,o=/(\[[^[\]]*])/g,c=r.exec(a),l=c?a.slice(0,c.index):a,u=[];if(l){if(!n.plainObjects&&i.call(Object.prototype,l)&&!n.allowPrototypes)return;u.push(l)}var d=0;while(null!==(c=o.exec(a))&&d<n.depth){if(d+=1,!n.plainObjects&&i.call(Object.prototype,c[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+a.slice(c.index)+"]"),s(u,e,n)}};t.exports=function(t,e){var n=e?a.assign({},e):{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!==typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.ignoreQueryPrefix=!0===n.ignoreQueryPrefix,n.delimiter="string"===typeof n.delimiter||a.isRegExp(n.delimiter)?n.delimiter:r.delimiter,n.depth="number"===typeof n.depth?n.depth:r.depth,n.arrayLimit="number"===typeof n.arrayLimit?n.arrayLimit:r.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"===typeof n.decoder?n.decoder:r.decoder,n.allowDots="boolean"===typeof n.allowDots?n.allowDots:r.allowDots,n.plainObjects="boolean"===typeof n.plainObjects?n.plainObjects:r.plainObjects,n.allowPrototypes="boolean"===typeof n.allowPrototypes?n.allowPrototypes:r.allowPrototypes,n.parameterLimit="number"===typeof n.parameterLimit?n.parameterLimit:r.parameterLimit,n.strictNullHandling="boolean"===typeof n.strictNullHandling?n.strictNullHandling:r.strictNullHandling,""===t||null===t||"undefined"===typeof t)return n.plainObjects?Object.create(null):{};for(var i="string"===typeof t?o(t,n):t,s=n.plainObjects?Object.create(null):{},l=Object.keys(i),u=0;u<l.length;++u){var d=l[u],f=c(d,i[d],n);s=a.merge(s,f,n)}return a.compact(s)}},a4a6a:function(t,e,n){"use strict";n.r(e);var a=n("f929"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},b313:function(t,e,n){"use strict";var a=String.prototype.replace,i=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return a.call(t,i,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},ce9c:function(t,e,n){function a(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var n=parseInt(t/60);t%=60;var a=t;return[e,n,a].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function i(t,e,n){var a="",i=e,r=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-"];t&&(i=Math.round(Math.random()*(n-e))+e);for(var o=0;o<i;o++){var s=Math.round(Math.random()*(r.length-1));a+=r[s]}return a}function r(t,e){for(var n=t,a=[],i=0;i<e;i++){if(!(n.length>0))break;var r=Math.floor(Math.random()*n.length);a[i]=n[r],n.splice(r,1)}return a}function o(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}n("a15b"),n("d81d"),n("a434"),n("b6802"),n("d3b7"),n("acd8"),n("e25e"),n("ac1f"),n("25f0"),n("1276");var s={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var n in this.UNITS)if(t>=this.UNITS[n]){e=Math.floor(t/this.UNITS[n])+n+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),n=Date.now()-e.getTime();if(n<this.UNITS["天"])return this.humanize(n);var a=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+a(e.getMonth()+1)+"/"+a(e.getDate())+"-"+a(e.getHours())+":"+a(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};t.exports={formatTime:a,formatLocation:o,dateUtils:s,randomWord:i,randomOption:r}},d233:function(t,e,n){"use strict";var a=Object.prototype.hasOwnProperty,i=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),r=function(t){var e;while(t.length){var n=t.pop();if(e=n.obj[n.prop],Array.isArray(e)){for(var a=[],i=0;i<e.length;++i)"undefined"!==typeof e[i]&&a.push(e[i]);n.obj[n.prop]=a}}return e},o=function(t,e){for(var n=e&&e.plainObjects?Object.create(null):{},a=0;a<t.length;++a)"undefined"!==typeof t[a]&&(n[a]=t[a]);return n},s=function t(e,n,i){if(!n)return e;if("object"!==typeof n){if(Array.isArray(e))e.push(n);else{if("object"!==typeof e)return[e,n];(i.plainObjects||i.allowPrototypes||!a.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!==typeof e)return[e].concat(n);var r=e;return Array.isArray(e)&&!Array.isArray(n)&&(r=o(e,i)),Array.isArray(e)&&Array.isArray(n)?(n.forEach((function(n,r){a.call(e,r)?e[r]&&"object"===typeof e[r]?e[r]=t(e[r],n,i):e.push(n):e[r]=n})),e):Object.keys(n).reduce((function(e,r){var o=n[r];return a.call(e,r)?e[r]=t(e[r],o,i):e[r]=o,e}),r)},c=function(t,e){return Object.keys(e).reduce((function(t,n){return t[n]=e[n],t}),t)},l=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},u=function(t){if(0===t.length)return t;for(var e="string"===typeof t?t:String(t),n="",a=0;a<e.length;++a){var r=e.charCodeAt(a);45===r||46===r||95===r||126===r||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122?n+=e.charAt(a):r<128?n+=i[r]:r<2048?n+=i[192|r>>6]+i[128|63&r]:r<55296||r>=57344?n+=i[224|r>>12]+i[128|r>>6&63]+i[128|63&r]:(a+=1,r=65536+((1023&r)<<10|1023&e.charCodeAt(a)),n+=i[240|r>>18]+i[128|r>>12&63]+i[128|r>>6&63]+i[128|63&r])}return n},d=function(t){for(var e=[{obj:{o:t},prop:"o"}],n=[],a=0;a<e.length;++a)for(var i=e[a],o=i.obj[i.prop],s=Object.keys(o),c=0;c<s.length;++c){var l=s[c],u=o[l];"object"===typeof u&&null!==u&&-1===n.indexOf(u)&&(e.push({obj:o,prop:l}),n.push(u))}return r(e)},f=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},p=function(t){return null!==t&&"undefined"!==typeof t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))};t.exports={arrayToObject:o,assign:c,compact:d,decode:l,encode:u,isBuffer:p,isRegExp:f,merge:s}},f929:function(t,e,n){"use strict";(function(t){var a=n("ee27");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("ce9c")),r=a(n("7a5e")),o=a(n("53e1")),s=(a(n("4328")),{name:"sports",data:function(){return{msg_modal_share:!1,msg_modal_app_share:!1,uid:null,token:null,ns_device_id:null,answer_chance:null,nickname:null,login_app_status:!0,contactExists:!1,isModalMsg:!1,name:"",user_type:1,hasShareDone:!1}},onLoad:function(e){uni.setStorageSync("activity_id",this.$question.activity_id);var n=uni.getStorageSync("uid"),a=uni.getStorageSync("ns_device_id");if("undefined"===typeof contact)this.contactExists=!1,this.user_type=2,uni.setStorageSync("user_type",2),n&&null!=n&&""!=n&&void 0!==n?this.uid=n:(this.uid=i.default.randomWord(!1,18),uni.setStorageSync("uid",this.uid)),a&&null!=a&&""!=a&&void 0!==a?this.ns_device_id=a:(this.ns_device_id="web",uni.setStorageSync("ns_device_id",this.ns_device_id));else{if(this.contactExists=!0,this.user_type=1,uni.setStorageSync("user_type",1),contact.onLoginDone=function(t,e){uni.removeStorageSync("uid"),uni.removeStorageSync("token"),uni.setStorageSync("uid",t),uni.setStorageSync("token",e),uni.setStorageSync("login_app_status",!0),uni.reLaunch({url:"/pages/sports/mid"})},t.log(uni.getStorageSync("login_app_status")),"null"===e.uid||""===e.uid||void 0===e.uid||null===e.uid){var r=uni.getStorageSync("login_app_status");t.log(r+"9090"),this.login_app_status=1==r}else uni.removeStorageSync("uid"),uni.removeStorageSync("token"),uni.removeStorageSync("ns_device_id"),uni.setStorageSync("uid",e.uid),uni.setStorageSync("token",e.token),uni.setStorageSync("ns_device_id",e.ns_device_id),this.login_app_status=!0;this.uid=uni.getStorageSync("uid"),this.token=uni.getStorageSync("token"),this.ns_device_id=uni.getStorageSync("ns_device_id")}},methods:{loginApp:function(){contact.requireLogin()},turnQuestion:function(e){var n=this,a={uid:this.uid,activity_id:this.$question.activity_id,from:e};r.default.post(o.default.sq+"/activity/api.usersAnswerChance/getAnswerChance",a).then((function(e){if(t.log(e),200!=e.status)return alert("server error");var a=e.data.data.answer_chance;a<=0?n.msg_modal_share=!0:n.getQuestionList(n.$question.activity_id)})).catch((function(t){})).finally((function(){}))},getQuestionList:function(t){var e=this,n={activity_id:t};r.default.post(o.default.sq+"/activity/api.questions/list",n).then((function(n){if(200!=n.status)return alert("server error");e.$question.setQusetionList(n.data.data),e.updateAnswerChance(e.uid,t,2),uni.redirectTo({url:"/pages/sports/question",success:function(){}})})).catch((function(t){})).finally((function(){}))},updateAnswerChance:function(e,n,a){var i={uid:e,activity_id:n,type:a};r.default.post(o.default.sq+"/activity/api.UsersAnswerChance/update",i).then((function(e){if(t.log(e),200!=e.status)return alert("server error")})).catch((function(t){})).finally((function(){}))},msg_modal_app:function(){this.msg_modal_app_share=!1},msg_modal_close:function(){this.msg_modal_share=!1},turn_rank:function(){uni.reLaunch({url:"/pages/sports/info?click=1",success:function(){}})},turn_rule:function(){uni.reLaunch({url:"/pages/sports/info?click=2",success:function(){}})}}});e.default=s}).call(this,n("5a52")["default"])}}]);