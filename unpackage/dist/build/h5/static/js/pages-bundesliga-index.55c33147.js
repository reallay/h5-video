(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bundesliga-index"],{"1ac7":function(t,e,i){"use strict";var n={uniNumberBox:i("8996").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-flex uni-column index-bg"},[i("v-uni-view",{staticClass:"uni-flex uni-row index-top"},[i("v-uni-view",{staticClass:"flex-item index-top-l"},[i("v-uni-view",{staticClass:"left-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeRuleModal()}}},[t._v("游戏规则")])],1),i("v-uni-view",{staticClass:"flex-item index-top-r"},[t.loginAppStatus?i("v-uni-view",{staticClass:"right-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLogsModal()}}},[t._v("竞猜记录")]):t._e(),t.loginAppStatus?t._e():i("v-uni-view",{staticClass:"right-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loginApp.apply(void 0,arguments)}}},[t._v("竞猜记录")])],1)],1),i("v-uni-view",{staticClass:" uni-column question-bg"},[i("v-uni-view",{staticClass:"question-bg-title"},[i("v-uni-view",{staticClass:"flex-item flex-item-V question-title"},[t._v("我的积分："+t._s(t.userPoints)+" 积分")])],1),t._l(t.teamList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex-item flex-item-v team-item"},[i("v-uni-view",{staticClass:"flex-item competition-time"},[t._v(t._s(e.competition_format))]),i("v-uni-view",{staticClass:"uni-flex  question-title-3"},[i("v-uni-view",{staticClass:"flex-item question-1"},[1==e.quiz_result?i("img",{attrs:{src:"https://aloss.hotforest.cn/bundesliga/virctory.png",alt:"img"}}):t._e(),3==e.quiz_result?i("img",{attrs:{src:"https://aloss.hotforest.cn/bundesliga/ping.png",alt:"img"}}):t._e()]),i("v-uni-view",{staticClass:"flex-item question-2"},[i("img",{attrs:{src:e.home_team_icon,alt:"img"}}),t._v(t._s(e.home_team_name))]),i("v-uni-view",{staticClass:"flex-item question-3"},[i("v-uni-view",{staticClass:"question-3-vs"},[t._v("VS")])],1),i("v-uni-view",{staticClass:"flex-item question-4"},[i("img",{attrs:{src:e.guest_team_icon,alt:"img"}}),t._v(t._s(e.guest_team_name))]),i("v-uni-view",{staticClass:"flex-item question-5"},[2==e.quiz_result?i("img",{attrs:{src:"https://aloss.hotforest.cn/bundesliga/virctory.png",alt:"img"}}):t._e()])],1),i("v-uni-view",{staticClass:"team-answer"},t._l(e.options,(function(n,o){return i("v-uni-view",{key:o,staticClass:"flex-item flex-item-V option-item",class:[t.selectOptionId==n.id?"option-active":""],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sOption(e.id,n.id,n.odds)}}},[t._v(t._s(n.option)),i("br"),t._v(t._s(n.odds))])})),1),i("v-uni-view",{staticClass:"flex-item flex-item-V question-button"},[1==t.loginAppStatus&&t.selectTeamId===e.id?i("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showQuizModal()}}},[t._v("投注")]):t._e(),1==t.loginAppStatus&&t.selectTeamId!=e.id?i("v-uni-button",{attrs:{type:"default"}},[t._v("投注")]):t._e(),0==t.loginAppStatus?i("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loginApp.apply(void 0,arguments)}}},[t._v("投注")]):t._e()],1)],1)}))],2),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.ruleModal,expression:"ruleModal"}],staticClass:"rule-modal",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeRuleModal()}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.ruleModal,expression:"ruleModal"}],staticClass:"rule-modal-bg"},[i("v-uni-view",{staticClass:"flex-item  rule-title"},[t._v("游戏规则")]),i("v-uni-view",{staticClass:"flex-item rule-content"},[t._v("1.本轮竞猜将于6月6日0点关闭竞猜通道"),i("br"),t._v("2.猜对任意5场比赛结果，即可进入后补中奖名单待定"),i("br"),t._v("3.系统将随机抽取10位待定中奖用户，奖励每人30元现金红包"),i("br"),t._v("4.赛事结束后3日内，将公布获奖用户名单"),i("br"),t._v("5.获奖用户，请添加全民体育官方微信（NationalSports）领取相应奖励")]),i("v-uni-view",{staticClass:"flex-item flex-item-V rule-copy"},[i("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy("NationalSports")}}},[t._v("复制微信号码")])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.infoModal,expression:"infoModal"}],staticClass:"info-modal",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeInfoModal()}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.infoModal,expression:"infoModal"}],staticClass:"info-modal-bg"},[i("v-uni-view",{staticClass:"flex-item  info-title"},[t._v("信息登记")]),i("v-uni-view",{staticClass:"flex-item info-content"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-uni-view",{staticClass:"flex-item flex-item-V info-content-mobile"},[i("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),i("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendCode(t.mobile)}}},[t._v("验证码")])],1),i("v-uni-view",{staticClass:"flex-item flex-item-V info-content-code"},[i("v-uni-input",{attrs:{type:"number",placeholder:"请输入验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),i("v-uni-view",{staticClass:"info-button"},[i("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updateUserInfo()}}},[t._v("确定")])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.quizModal,expression:"quizModal"}],staticClass:"quiz-modal",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeQuizModal()}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.quizModal,expression:"quizModal"}],staticClass:"quiz-modal-bg"},[i("v-uni-view",{staticClass:"flex-item quiz-modal-1"},[t._v("我的积分："+t._s(t.userPoints)+" 积分")]),i("v-uni-view",{staticClass:"quiz-modal-2"},[i("v-uni-view",{staticClass:"quiz-modal-2-1",class:10==t.betPoints?"option-active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeBetPoints(10)}}},[t._v("10积分")]),i("v-uni-view",{staticClass:"quiz-modal-2-2",class:50==t.betPoints?"option-active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeBetPoints(50)}}},[t._v("50积分")]),i("v-uni-view",{staticClass:"quiz-modal-2-3",class:100==t.betPoints?"option-active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeBetPoints(100)}}},[t._v("100积分")])],1),i("v-uni-view",{staticClass:"quiz-modal-3"},[i("uni-number-box",{attrs:{value:t.betPoints,min:10,max:100,step:10},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"quiz-modal-4"},[i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bet()}}},[t._v("确认投注")])],1),i("v-uni-view",{staticClass:"quiz-modal-5"},[t._v("预计赢取："),i("span",[t._v(t._s(t.expectEarnPoints))]),t._v("积分")])],1)],1)},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"1bef":function(t,e,i){"use strict";var n=i("5aa2"),o=i.n(n);o.a},"21e2":function(t,e,i){"use strict";i.r(e);var n=i("1ac7"),o=i("7ffa");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("b48e");var s,l=i("f0c5"),r=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"72bf542e",null,!1,n["a"],s);e["default"]=r.exports},"26d4":function(t,e,i){"use strict";i.r(e);var n=i("d0bf"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"408a":function(t,e,i){var n=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"5aa2":function(t,e,i){var n=i("8ec3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("586bca98",n,!0,{sourceMap:!1,shadowMode:!1})},"64e1":function(t,e,i){function n(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var i=parseInt(t/60);t%=60;var n=t;return[e,i,n].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function o(t,e,i){var n="",o=e,a=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-"];t&&(o=Math.round(Math.random()*(i-e))+e);for(var s=0;s<o;s++){var l=Math.round(Math.random()*(a.length-1));n+=a[l]}return n}function a(t,e){for(var i=t,n=[],o=0;o<e;o++){if(!(i.length>0))break;var a=Math.floor(Math.random()*i.length);n[o]=i[a],i.splice(a,1)}return n}function s(t){return new Date(Date.parse(t.replace(/-/g,"/"))).getTime()/1e3}function l(t){return(new Date).setTime(Date.parse(t.replace(/-/g,"/"))/1e3+86400-1)}function r(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}i("a15b"),i("d81d"),i("a434"),i("b680"),i("d3b7"),i("acd8"),i("e25e"),i("ac1f"),i("25f0"),i("5319"),i("1276");var d={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var i in this.UNITS)if(t>=this.UNITS[i]){e=Math.floor(t/this.UNITS[i])+i+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),i=Date.now()-e.getTime();if(i<this.UNITS["天"])return this.humanize(i);var n=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+n(e.getMonth()+1)+"/"+n(e.getDate())+"-"+n(e.getHours())+":"+n(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};t.exports={formatTime:n,formatLocation:r,dateUtils:d,randomWord:o,randomOption:a,startUnix:s,endUnix:l}},"67c9":function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-numbox"},[i("v-uni-view",{staticClass:"uni-numbox__minus",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._calcValue("minus")}}},[i("v-uni-text",{staticClass:"uni-numbox--text",class:{"uni-numbox--disabled":t.inputValue<=t.min||t.disabled}},[t._v("-")])],1),i("v-uni-input",{staticClass:"uni-numbox__value",attrs:{disabled:t.disabled,type:"number"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t._onBlur.apply(void 0,arguments)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}),i("v-uni-view",{staticClass:"uni-numbox__plus",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._calcValue("plus")}}},[i("v-uni-text",{staticClass:"uni-numbox--text",class:{"uni-numbox--disabled":t.inputValue>=t.max||t.disabled}},[t._v("+")])],1)],1)},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"7ffa":function(t,e,i){"use strict";i.r(e);var n=i("fda5"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},8996:function(t,e,i){"use strict";i.r(e);var n=i("67c9"),o=i("26d4");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("1bef");var s,l=i("f0c5"),r=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"ea79fd9a",null,!1,n["a"],s);e["default"]=r.exports},"8ec3":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"\n.uni-numbox[data-v-ea79fd9a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:35px;line-height:35px;width:120px}.uni-numbox__value[data-v-ea79fd9a]{background-color:#fff;width:40px;height:35px;text-align:center;font-size:%?32?%;border-width:%?1?%;border-style:solid;border-color:#e5e5e5;border-left-width:0;border-right-width:0}.uni-numbox__minus[data-v-ea79fd9a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:35px;height:35px;\n\t\t/* line-height: $box-line-height;\n */\n\t\t/* text-align: center;\n */font-size:20px;color:#333;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#e5e5e5;border-top-left-radius:%?6?%;border-bottom-left-radius:%?6?%;border-right-width:0}.uni-numbox__plus[data-v-ea79fd9a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:35px;height:35px;border-width:%?1?%;border-style:solid;border-color:#e5e5e5;border-top-right-radius:%?6?%;border-bottom-right-radius:%?6?%;background-color:#f8f8f8;border-left-width:0}.uni-numbox--text[data-v-ea79fd9a]{font-size:%?40?%;color:#333}.uni-numbox--disabled[data-v-ea79fd9a]{color:silver}",""]),t.exports=e},b48e:function(t,e,i){"use strict";var n=i("b88b"),o=i.n(n);o.a},b680:function(t,e,i){"use strict";var n=i("23e7"),o=i("a691"),a=i("408a"),s=i("1148"),l=i("d039"),r=1..toFixed,d=Math.floor,u=function(t,e,i){return 0===e?i:e%2===1?u(t,e-1,i*t):u(t*t,e/2,i)},f=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},c=r&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){r.call({})}));n({target:"Number",proto:!0,forced:c},{toFixed:function(t){var e,i,n,l,r=a(this),c=o(t),h=[0,0,0,0,0,0],g="",b="0",v=function(t,e){var i=-1,n=e;while(++i<6)n+=t*h[i],h[i]=n%1e7,n=d(n/1e7)},m=function(t){var e=6,i=0;while(--e>=0)i+=h[e],h[e]=d(i/t),i=i%t*1e7},p=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==h[t]){var i=String(h[t]);e=""===e?i:e+s.call("0",7-i.length)+i}return e};if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return String(r);if(r<0&&(g="-",r=-r),r>1e-21)if(e=f(r*u(2,69,1))-69,i=e<0?r*u(2,-e,1):r/u(2,e,1),i*=4503599627370496,e=52-e,e>0){v(0,i),n=c;while(n>=7)v(1e7,0),n-=7;v(u(10,n,1),0),n=e-1;while(n>=23)m(1<<23),n-=23;m(1<<n),v(1,1),m(2),b=p()}else v(0,i),v(1<<-e,0),b=p()+s.call("0",c);return c>0?(l=b.length,b=g+(l<=c?"0."+s.call("0",c-l)+b:b.slice(0,l-c)+"."+b.slice(l-c))):b=g+b,b}})},b88b:function(t,e,i){var n=i("bf70");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("531d5102",n,!0,{sourceMap:!1,shadowMode:!1})},bf70:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".index-bg[data-v-72bf542e]{background:url(https://aloss.hotforest.cn/bundesliga/index-bg.png) no-repeat 50%;background-size:100% 100%;height:100%}.index-top[data-v-72bf542e]{margin-top:%?114?%}.index-top-l[data-v-72bf542e]{width:50%;text-align:left}.index-top-r[data-v-72bf542e]{width:50%;vertical-align:text-bottom}.left-icon[data-v-72bf542e]{text-align:center;background:url(https://aloss.hotforest.cn/bundesliga/left-icon.png) no-repeat 50%;background-size:100% 100%;width:%?134?%;height:%?55?%;font-size:%?22?%;font-family:MF LingHei,(Noncommercial);font-weight:400;color:#92fbff;line-height:%?55?%}.right-icon[data-v-72bf542e]{margin-left:auto;text-align:center;background:url(https://aloss.hotforest.cn/bundesliga/right-icon.png) no-repeat 50%;background-size:100% 100%;width:%?134?%;height:%?55?%;font-size:%?22?%;font-family:MF LingHei,(Noncommercial);font-weight:400;color:#92fbff;line-height:%?55?%}.question-bg[data-v-72bf542e]{background-size:100% 100%;width:100%;margin:0 auto;margin-top:40%;background-color:#381e80}.question-bg-title[data-v-72bf542e]{width:%?708?%;margin:0 auto;margin-top:%?10?%;border-radius:%?30?%;background-color:#283e5a}.team-item[data-v-72bf542e]{background-color:#fff;width:%?708?%;\r\n\t/* height: 700rpx; */margin:%?30?% auto;padding-bottom:%?10?%;border-radius:%?30?%}.join-person-count[data-v-72bf542e]{float:right;width:40%;height:%?80?%;font-size:%?30?%;font-family:Lantinghei SC;font-weight:600;color:#999;line-height:%?80?%;text-align:right;margin-right:10%}.competition-time[data-v-72bf542e]{float:left;width:40%;height:%?80?%;font-size:%?30?%;font-family:Lantinghei SC;font-weight:600;color:#999;line-height:%?80?%;margin-left:10%}.team-answer[data-v-72bf542e]{width:90%;height:%?100?%;margin:0 auto;margin-top:%?24?%}.question-title-p[data-v-72bf542e]{margin:auto}.question-title[data-v-72bf542e]{text-align:center;font-size:%?40?%;line-height:%?60?%;font-family:MF LingHei,(Noncommercial);font-weight:400;color:#fff;text-shadow:0 %?3?% %?2?% rgba(0,0,0,.29)}.question-title-2[data-v-72bf542e]{text-align:center;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#fff1a1}.question-title-3[data-v-72bf542e]{width:100%}.question-1[data-v-72bf542e]{width:10%;margin-left:2%;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#333}.question-1 img[data-v-72bf542e]{width:100%}.question-5[data-v-72bf542e]{width:10%;margin-left:2%;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#333}.question-5 img[data-v-72bf542e]{width:100%}.question-2[data-v-72bf542e]{width:20%;margin-left:2%;text-align:center;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#333}.question-2 img[data-v-72bf542e]{max-width:100%;max-height:100%}.question-4[data-v-72bf542e]{width:20%;margin-left:2%;text-align:center;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#333}.question-4 img[data-v-72bf542e]{width:100%}.question-3[data-v-72bf542e]{text-align:center;width:30%;padding-top:%?30?%}.question-3-vs[data-v-72bf542e]{font-size:%?46?%;font-family:MF LingHei,(Noncommercial);font-weight:bolder;color:#328dff}.question-3-home-score[data-v-72bf542e]{font-size:%?32?%!important;font-family:MF LingHei,(Noncommercial)!important;font-weight:bolder!important;color:#fa3b16!important}.question-3-guest-score[data-v-72bf542e]{font-size:%?32?%!important;font-family:MF LingHei,(Noncommercial)!important;font-weight:bolder!important;color:#000!important}.question-3 span[data-v-72bf542e]{font-size:%?28?%;font-family:MF LingHei,(Noncommercial);font-weight:bolder;color:#328dff}.option-name-1[data-v-72bf542e]{text-align:center;width:100%;font-size:%?30?%;font-family:Lantinghei SC;font-weight:600;color:#328dff}.option-active[data-v-72bf542e]{background-color:#fa6c1e!important;color:#fff!important;border:none!important}.option-item[data-v-72bf542e]{float:left;width:30%;margin-left:2%;border:1px solid #00a0e9;border-radius:%?30?%;text-align:center;font-size:%?30?%;font-family:Lantinghei SC;font-weight:bolder;color:#328dff}.question-button[data-v-72bf542e]{margin-top:%?50?%;margin-bottom:%?30?%}.question-button uni-button[data-v-72bf542e]{background:url(https://aloss.hotforest.cn/bundesliga/quiz-button.png) no-repeat 50%;background-size:100% 100%;width:%?365?%;height:%?92?%;font-size:%?36?%;font-family:Lantinghei SC;font-weight:600;color:#fff;text-shadow:0 2px 6px rgba(0,0,0,.75);-webkit-text-stroke:3px undefined;text-stroke:3px undefined}.scroll-Y[data-v-72bf542e]{width:100%}.rule-modal[data-v-72bf542e]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.6)}.rule-modal-bg[data-v-72bf542e]{position:fixed;z-index:110;top:0;left:0;bottom:0;right:0;margin:auto;width:%?652?%;height:%?650?%;\r\n\t/* background: url(https://aloss.hotforest.cn/bundesliga/modal-1.png) no-repeat center; */background-color:#fff;border-radius:%?30?%;background-size:100% 100%}.rule-title[data-v-72bf542e]{font-size:%?32?%;font-family:MF LingHei,(Noncommercial);font-weight:bolder;color:#333;line-height:%?35?%;padding-top:%?41?%;text-align:center}.rule-content[data-v-72bf542e]{padding-left:%?34?%;padding-top:%?40?%;padding-right:%?30?%;font-size:%?28?%;font-family:Lantinghei SC;font-weight:600;color:#333}.rule-copy uni-button[data-v-72bf542e]{width:%?200?%;height:%?60?%;margin-top:%?20?%;font-size:%?24?%;line-height:%?60?%;background:url(https://aloss.hotforest.cn/bundesliga/button-y.png) no-repeat 50%;background-size:100% 100%;color:#fff}.logs-modal[data-v-72bf542e]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.6)}.logs-modal-bg[data-v-72bf542e]{position:fixed;z-index:110;top:0;left:0;bottom:0;right:0;margin:auto;width:90%;height:80%;background:url(https://aloss.hotforest.cn/bundesliga/modal-2.png) no-repeat 50%;background-size:100% 100%}.logs-title[data-v-72bf542e]{font-size:%?30?%;font-family:MF LingHei,(Noncommercial);color:#fff;line-height:%?80?%;width:85%;height:%?80?%;text-indent:%?30?%;font-weight:bolder}.logs-content[data-v-72bf542e]{padding-left:%?34?%;padding-top:%?80?%;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#fff}.logs-1[data-v-72bf542e]{width:99%;height:%?60?%;line-height:%?60?%;border-bottom:1px solid #39b8bf;font-size:%?26?%;font-family:Lantinghei SC;color:#fff;font-weight:bolder}.logs-1-1[data-v-72bf542e]{width:35%;text-indent:%?20?%}.logs-1-2[data-v-72bf542e]{width:20%}.logs-1-3[data-v-72bf542e]{width:25%}.logs-1-4[data-v-72bf542e]{width:20%;text-align:center}.logs-2[data-v-72bf542e]{width:99%;height:%?50?%;line-height:%?50?%;text-indent:%?20?%;font-size:%?26?%;font-family:Lantinghei SC;font-weight:600;color:#fff;border-bottom:1px dashed #39b8bf}.logs-3[data-v-72bf542e]{padding:%?20?% %?20?% %?10?% %?20?%;border-bottom:1px solid #39b8bf}.logs-3-font[data-v-72bf542e]{font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#fff}.logs-3-1[data-v-72bf542e]{width:35%}.logs-3-2[data-v-72bf542e]{width:20%}.logs-3-3[data-v-72bf542e]{width:25%;text-align:center}.logs-3-4[data-v-72bf542e]{width:20%;text-align:center}.logs-victory[data-v-72bf542e]{font-weight:bolder!important;font-size:%?30?%!important;color:#fa3b16!important}.logs-fail[data-v-72bf542e]{font-weight:bolder!important;font-size:%?30?%!important;color:#fff!important}.info-modal[data-v-72bf542e]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.6)}.info-modal-bg[data-v-72bf542e]{position:fixed;z-index:110;top:0;left:0;bottom:0;right:0;margin:auto;width:%?552?%;height:%?700?%;\r\n\t/* background: url(https://aloss.hotforest.cn/bundesliga/modal-1.png) no-repeat center; */background:#fff;border-radius:30px;background-size:100% 100%}.info-title[data-v-72bf542e]{font-size:%?30?%;font-family:MF LingHei,(Noncommercial);font-weight:400;color:#333;line-height:%?35?%;padding-top:%?31?%;padding-left:%?34?%}.info-content[data-v-72bf542e]{width:90%;padding-left:%?34?%;padding-top:%?80?%;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#333}.info-content-mobile[data-v-72bf542e]{width:90%;height:%?80?%;padding-left:%?34?%;margin-top:%?40?%;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#333;position:relative}.info-content-code[data-v-72bf542e]{width:90%;height:%?80?%;padding-left:%?34?%;margin-top:%?40?%;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#333}.info-content-mobile uni-button[data-v-72bf542e]{position:absolute;right:%?10?%;top:%?15?%;width:%?147?%;height:%?50?%;line-height:%?50?%;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#fff;text-shadow:0 1px 0 rgba(130,66,0,.26);background:#0a98d5}.info-content-mobile uni-input[data-v-72bf542e]{height:%?80?%;border-bottom:%?1?% solid #39b8bf}.info-content uni-input[data-v-72bf542e]{height:%?80?%;border-bottom:%?1?% solid #39b8bf}.info-content-code uni-input[data-v-72bf542e]{height:%?80?%;border-bottom:%?1?% solid #39b8bf}[data-v-72bf542e] .uni-input-placeholder{color:#333!important;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600}.info-button[data-v-72bf542e]{margin-top:%?80?%}.info-button-quiz-active[data-v-72bf542e]{background:#888!important}.info-button uni-button[data-v-72bf542e]{margin:0 auto;width:%?262?%;height:%?66?%;line-height:%?66?%;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#fff;text-shadow:0 1px 0 rgba(130,66,0,.26);background:url(https://aloss.hotforest.cn/bundesliga/quiz-button.png) no-repeat 50%;background-size:100% 100%}.logs-scroll-Y[data-v-72bf542e]{width:99%;height:70%}.quiz-modal[data-v-72bf542e]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.6)}.quiz-modal-bg[data-v-72bf542e]{position:fixed;z-index:110;width:100%;height:%?500?%;bottom:0;background-color:#fff;background-size:100% 100%}.quiz-modal-1[data-v-72bf542e]{padding:%?30?% %?40?%;font-size:%?28?%;font-family:Lantinghei SC;font-weight:bolder;color:#333}.quiz-modal-2[data-v-72bf542e]{width:100%;height:%?80?%\r\n\t/* padding: 0rpx 40rpx; */}.quiz-modal-2-1[data-v-72bf542e]{float:left;width:20%;height:100%;line-height:%?80?%;margin-left:10%;background:#fff;border:1px solid #00a0e9;border-radius:%?29?%;text-align:center;font-size:%?28?%;font-family:Lantinghei SC;font-weight:600;color:#333}.quiz-modal-2-2[data-v-72bf542e]{float:left;width:20%;height:100%;line-height:%?80?%;margin-left:10%;background:#fff;border:1px solid #00a0e9;border-radius:%?29?%;text-align:center;font-size:%?28?%;font-family:Lantinghei SC;font-weight:600;color:#333}.quiz-modal-2-3[data-v-72bf542e]{float:left;width:20%;height:100%;line-height:%?80?%;margin-left:10%;background:#fff;border:1px solid #00a0e9;border-radius:%?29?%;text-align:center;font-size:%?28?%;font-family:Lantinghei SC;font-weight:600;color:#333}.quiz-modal-3[data-v-72bf542e]{width:100%;height:%?100?%}.uni-numbox[data-v-72bf542e]{margin:0 auto;margin-top:%?20?%}.quiz-modal-4[data-v-72bf542e]{width:100%}.quiz-modal-4 uni-button[data-v-72bf542e]{background:url(https://aloss.hotforest.cn/bundesliga/quiz-button.png) no-repeat 50%;background-size:100% 100%;width:%?365?%;height:%?92?%;font-size:%?36?%;font-family:Lantinghei SC;font-weight:600;color:#fff;text-shadow:0 2px 6px rgba(0,0,0,.75);-webkit-text-stroke:3px undefined;text-stroke:3px undefined}.quiz-modal-5[data-v-72bf542e]{width:100%;text-align:center;font-size:%?28?%;font-family:Lantinghei SC;font-weight:600;color:#333;line-height:%?80?%}.quiz-modal-5 span[data-v-72bf542e]{color:#ff4242}",""]),t.exports=e},d0bf:function(t,e,i){"use strict";i("a9e3"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniNumberBox",props:{value:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:{type:Boolean,default:!1}},data:function(){return{inputValue:0}},watch:{value:function(t){this.inputValue=+t},inputValue:function(t,e){+t!==+e&&this.$emit("change",t)}},created:function(){this.inputValue=+this.value},methods:{_calcValue:function(t){if(!this.disabled){var e=this._getDecimalScale(),i=this.inputValue*e,n=this.step*e;if("minus"===t){if(i-=n,i<this.min*e)return;i>this.max*e&&(i=this.max*e)}else if("plus"===t){if(i+=n,i>this.max*e)return;i<this.min*e&&(i=this.min*e)}this.inputValue=String(i/e)}},_getDecimalScale:function(){var t=1;return~~this.step!==this.step&&(t=Math.pow(10,(this.step+"").split(".")[1].length)),t},_onBlur:function(t){var e=t.detail.value;e&&(e=+e,e>this.max?e=this.max:e<this.min&&(e=this.min),this.inputValue=e)}}};e.default=n},d377:function(t,e,i){"use strict";function n(t){if(!document.queryCommandSupported("copy"))return!1;var e=document.createElement("textarea");e.value=t,e.readOnly="readOnly",document.body.appendChild(e),e.select(),e.setSelectionRange(0,t.length);var i=document.execCommand("copy");return e.remove(),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},fda5:function(t,e,i){"use strict";(function(t){var n=i("ee27");i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("c74f")),a=n(i("c286")),s=n(i("d377")),l=i("64e1"),r=n(i("8996")),d={data:function(){return{scrollTop:0,old:{scrollTop:0},teamList:[],selectList:[],ruleModal:!1,logsModal:!1,infoModal:!0,appMsgModal:!1,teamId:0,userQuizLogs:[],loginAppStatus:!1,uid:null,token:null,ns_device_id:null,country_code:"+86",activity_id:4,name:"",mobile:"",code:"",quizStatus:!1,round:30,endAnswer:!1,quizModal:!1,betPoints:10,selectOptionId:0,selectTeamId:0,selectOdds:0,userPoints:0,expectEarnPoints:0,userBetList:[]}},components:{uniNumberBox:r.default},onLoad:function(t){var e=Date.parse(new Date)/1e3,i=new Date,n=i.getFullYear(),o=i.getMonth()+1,a=n+"-"+o+"-16",s=(0,l.startUnix)(a);e>s&&(this.endAnswer=!0),"undefined"===typeof contact?uni.showToast({title:"请下载全民体育APP参与活动",icon:"none",mask:!0}):""!==t.uid&&"null"!==t.uid&&void 0!==t.uid?(uni.setStorageSync("uid",t.uid),uni.setStorageSync("token",t.token),uni.setStorageSync("ns_device_id",t.ns_device_id),this.loginAppStatus=!0,this.uid=uni.getStorageSync("uid"),this.token=uni.getStorageSync("token"),this.ns_device_id=uni.getStorageSync("ns_device_id"),this.getUserPointDetail(this.uid),this.getTeamList()):(this.getTeamList(),this.loginAppStatus=!1,contact.onLoginDone=function(t,e){uni.setStorageSync("loginAppStatus",!0);var i=uni.getStorageSync("ns_device_id");uni.reLaunch({url:"/pages/bundesliga/mid?uid="+t+"&token="+e+"&ns_device_id="+i})})},methods:{bet:function(){var e=this,i=this,n=i.uid,s=i.activity_id,l=i.ns_device_id,r=i.token,d={uid:n,activity_id:s};a.default.post(o.default.sq+"/activity/api.users/checkUidStatus",d).then((function(s){if(200==s.status){var d=s.data.data.count;if(d<=0){var u=o.default.bd+"/v3/user/info",f={ns_device_id:l,uid:n,token:r};a.default.get(u,{headers:f}).then((function(i){if(200==i.status){if(1==i.data.Status){var n=i.data.Data.nickname,o=i.data.Data.phone;t.log(i),""==o?e.infoModal=!0:e.addUserInfo(n,o)}}else uni.showToast({title:"server error",icon:"none"})}))}else i.addQuizLog()}else uni.showToast({title:"server error",icon:"none"})})).catch((function(t){})).finally((function(){}))},addQuizLog:function(){var e=this,i={uid:e.uid,activity_id:e.$question.activity_id,team_quiz_id:e.selectTeamId,option_id:e.selectOptionId,expect_earn_points:e.expectEarnPoints,user_points:e.userPoints,bet_points:e.betPoints};uni.request({url:o.default.sq+"/activity/api.quiz/addQuizLog",data:i,method:"POST",success:function(i){t.log(i),200==i.statusCode?0==i.data.code?uni.showToast({title:"投注成功",icon:"none",success:function(){e.infoModal=!1,e.quizModal=!1,e.getUserPointDetail(e.uid)}}):uni.showToast({title:i.data.info,icon:"none"}):uni.showToast({title:i.errMsg,icon:"none"})}})},changeBetPoints:function(t){var e=this;e.betPoints=t,e.expectEarnPoints=t*e.selectOdds},bindChange:function(e){t.log(e);var i=this;i.expectEarnPoints=e*i.selectOdds},showQuizModal:function(){var t=this;t.quizModal=!0,t.expectEarnPoints=t.betPoints*t.selectOdds},closeQuizModal:function(){this.quizModal=!1},loginApp:function(){contact.requireLogin()},sendCode:function(t){var e={ns_device_id:this.ns_device_id,phone:t,country_code:this.country_code},i=o.default.bd+"/SendLoginSms";a.default.get(i,{headers:e}).then((function(t){200==t.status?1===t.data.Status?uni.showToast({title:"验证码 发送成功",icon:"none"}):uni.showToast({title:"验证码发送失败",icon:"none"}):uni.showToast({title:"service error",icon:"none"})})).catch((function(t){})).finally((function(){}))},updateUserInfo:function(){var e=this,i=e.uid,n=e.$question.activity_id,s=e.ns_device_id,l=e.mobile,r=e.country_code,d=e.code,u=e.name;e.selectList;if(u.length<1||u.length>20)uni.showToast({title:"请输入1到20个字符长度的名字",icon:"none"});else if(11==l.length)if(""!=d){var f={phone:l,country_code:r,code:d,device_id:"website",platform:"android"},c=o.default.bd+"/OTPLogin";uni.request({url:c,data:f,header:{ns_device_id:"ns_device_id","Content-Type":"application/x-www-form-urlencoded"},method:"POST",success:function(r){if(t.log(r),200==r.statusCode)if(1==r.data.Status){var d={uid:i,name:u,mobile:l,activity_id:n,ns_device_id:s,user_type:3};a.default.post(o.default.sq+"/activity/api.Users/add",d).then((function(i){200==i.status?(t.log(i),e.addQuizLog()):uni.showToast({title:"server error",icon:"none"})})).catch((function(t){})).finally((function(){}))}else uni.showToast({title:"service error",icon:"none"});else uni.showToast({title:"验证码错误",icon:"none"})}}),t.log(e.infoModal),t.log(e.quizStatus)}else uni.showToast({title:"请输入验证码",icon:"none"});else uni.showToast({title:"请输入11位手机号码",icon:"none"})},addUserInfo:function(t,e){var i=this,n=i.uid,s=i.$question.activity_id,l=i.ns_device_id,r=(i.selectList,1),d={uid:n,name:t,mobile:e,activity_id:s,ns_device_id:l,user_type:r};a.default.post(o.default.sq+"/activity/api.Users/add",d).then((function(t){200==t.status?i.addQuizLog():uni.showToast({title:"server error",icon:"none"})})).catch((function(t){})).finally((function(){})),this.infoModal=!1,this.quizStatus=!0},getUserPointDetail:function(e){var i=this,n={uid:e};uni.request({url:o.default.sq+"/activity/api.UserPoints/detail",data:n,method:"GET",success:function(e){if(t.log(e),200==e.statusCode){if(0==e.data.code){var n=i;n.userPoints=e.data.data.points}}else uni.showToast({title:e.errMsg,icon:"none"})}})},sOption:function(t,e,i){var n=this;n.selectOptionId=e,n.selectTeamId=t,n.selectOdds=i},closeRuleModal:function(){this.ruleModal=!1;var t="overflow-y: auto; height: 100%;";document.getElementsByTagName("html")[0].style.cssText=t,document.body.style.cssText=t,document.body.scrollTop=this.pageScrollYoffset,window.scroll(0,this.pageScrollYoffset)},changeRuleModal:function(){this.ruleModal=!0;var t="overflow-y: hidden; height: 100%;";document.getElementsByTagName("html")[0].style.cssText=t,document.body.style.cssText=t,document.body.scrollTop=this.pageScrollYoffset,window.scroll(0,this.pageScrollYoffset)},changeLogsModal:function(){var t=uni.getStorageSync("uid");uni.navigateTo({url:"/pages/bundesliga/quizLogs?uid="+t})},closeInfoModal:function(){this.infoModal=!1},addUserQuizLog:function(){},getTeamList:function(){var e=this;uni.request({url:o.default.sq+"/activity/api.quiz/getTeamQuizList",data:{},method:"GET",success:function(i){if(t.log(i),200===i.statusCode){if(0===i.data.code){var n=i.data.data;e.teamList=n}}else uni.showToast({title:"server error",icon:"none"})}})},copy:function(t){var e=t,i=(0,s.default)(e);!1===i?uni.showToast({title:"不支持"}):uni.showToast({title:"复制成功",icon:"none"})}}};e.default=d}).call(this,i("5a52")["default"])}}]);