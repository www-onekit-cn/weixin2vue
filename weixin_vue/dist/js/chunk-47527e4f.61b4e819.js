(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47527e4f"],{1905:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("onekit-page",[a("import",{attrs:{src:"../../../common/head.vue"}}),a("import",{attrs:{src:"../../../common/foot.vue"}}),a("onekit-view",{staticClass:"container"},[a("onekit-view",{staticClass:"page-body"},[a("onekit-view",{staticClass:"page-section"},[a("onekit-live-player",{attrs:{id:"player",src:e.videoSrc,mode:"RTC",autoplay:""},on:{statechange:e.handleLivePlayerStateChange,error:e.handleLivePlayerError}})],1),a("onekit-view",{staticClass:"page-section"},[a("onekit-view",{staticClass:"page-url"},[e._v("视频地址 (支持flv, rtmp):")]),a("onekit-input",{staticClass:"input",attrs:{name:"input",placeholder:"视频播放链接",value:e.videoSrc},on:{input:e.handleVideoSrcInput}}),a("onekit-button",{attrs:{type:"primary"},on:{tap:e.handleScanQRCode}},[e._v(" 扫码 ")])],1),a("onekit-view",{staticClass:"page-section"},[a("onekit-button",{staticClass:"page-body-button",attrs:{type:"primary"},on:{tap:e.handlePlay}},[e._v("播放")]),a("onekit-button",{staticClass:"page-body-button",attrs:{type:"primary"},on:{tap:e.handlePause}},[e._v("暂停")]),a("onekit-button",{staticClass:"page-body-button",attrs:{type:"primary"},on:{tap:e.handleStop}},[e._v("停止")]),a("onekit-button",{staticClass:"page-body-button",attrs:{type:"primary"},on:{tap:e.handleResume}},[e._v("恢复")]),a("onekit-button",{staticClass:"page-body-button",attrs:{type:"primary"},on:{tap:e.handleMute}},[e._v("静音")])],1)],1)],1)],1)},o=[],s=a("711f"),i=a("79f0");Object(s["OnekitPage"])({onShareAppMessage:function(){return{title:"live-player",path:"page/component/pages/live-player/live-player"}},data:{videoSrc:""},onReady:function(e){this.ctx=i["a"].createLivePlayerContext("player")},handleScanQRCode:function(){var e=this;i["a"].scanCode({complete:function(t){var a=t.result;e.setData({videoSrc:a})}})},handleLivePlayerStateChange:function(e){console.log("live-player code:",e.detail.code)},handleLivePlayerError:function(e){console.error("live-player error:",e.detail.errMsg)},handlePlay:function(){this.ctx.play({success:function(e){console.log("play success")},fail:function(e){console.log("play fail")}})},handlePause:function(){this.ctx.pause({success:function(e){console.log("pause success")},fail:function(e){console.log("pause fail")}})},handleStop:function(){this.ctx.stop({success:function(e){console.log("stop success")},fail:function(e){console.log("stop fail")}})},handleResume:function(){this.ctx.resume({success:function(e){console.log("resume success")},fail:function(e){console.log("resume fail")}})},handleMute:function(){this.ctx.mute({success:function(e){console.log("mute success")},fail:function(e){console.log("mute fail")}})},handleVideoSrcInput:function(e){this.setData({videoSrc:e.detail.value})}});var c=void 0,l=(a("4ed3"),a("9d66"),a("2877")),r=Object(l["a"])(c,n,o,!1,null,"7a5d4c53",null);t["default"]=r.exports},"4ed3":function(e,t,a){"use strict";var n=a("ec10"),o=a.n(n);o.a},"5f7d":function(e,t,a){},"9d66":function(e,t,a){"use strict";var n=a("5f7d"),o=a.n(n);o.a},ec10:function(e,t,a){}}]);
//# sourceMappingURL=chunk-47527e4f.61b4e819.js.map