(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7620782d"],{"0278":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("onekit-page",[o("import",{attrs:{src:"../../../common/head.vue"}}),o("import",{attrs:{src:"../../../common/foot.vue"}}),o("onekit-view",{staticClass:"container"},[o("onekit-view",{staticClass:"page-body"},[o("onekit-view",{staticClass:"page-section"},[o("onekit-view",{staticClass:"weui-cells weui-cells_after-title"},[o("onekit-view",{staticClass:"weui-cell weui-cell_switch"},[o("onekit-view",{staticClass:"weui-cell__bd"},[t._v("Socket状态")]),o("onekit-view",{staticClass:"weui-cell__ft"},[o("onekit-switch",{attrs:{disabled:!t.hasLogin},on:{change:t.toggleSocket}})],1)],1),o("onekit-view",{staticClass:"weui-cell"},[o("onekit-view",{staticClass:"weui-cell__bd"},[t._v("消息")]),o("onekit-view",{staticClass:"weui-cell__ft"},[t._v(" Hello, 小程序! ")])],1)],1)],1),o("onekit-view",{staticClass:"btn-area"},[o("onekit-button",{attrs:{type:"primary",size:"40",disabled:"connected"!=t.socketStatus,loading:t.loading},on:{tap:t.sendMessage}},[t._v("点我发送")])],1)],1)],1)],1)},c=[],a=o("711f"),n=o("79f0");function i(t,e){n["a"].showModal({title:t,content:e,showCancel:!1})}function l(t){n["a"].showToast({title:t,icon:"success",duration:1e3})}Object(a["OnekitPage"])({onShareAppMessage:function(){return{title:"Web Socket",path:"packageAPI/pages/web-socket/web-socket"}},data:{socketStatus:"closed"},onLoad:function(){var t=this;t.setData({hasLogin:!0})},onUnload:function(){this.closeSocket()},toggleSocket:function(t){var e=t.detail.value;if(e&&"closed"===this.data.socketStatus)this.openSocket();else if(!e&&"connected"===this.data.socketStatus){var o=!0;this.closeSocket(o)}},openSocket:function(){var t=this;n["a"].onSocketOpen((function(){console.log("WebSocket 已连接"),l("Socket已连接"),t.setData({socketStatus:"connected",waitingResponse:!1})})),n["a"].onSocketClose((function(){console.log("WebSocket 已断开"),t.setData({socketStatus:"closed"})})),n["a"].onSocketError((function(e){i("发生错误",JSON.stringify(e)),console.error("socket error:",e),t.setData({loading:!1})})),n["a"].onSocketMessage((function(e){l("收到信道消息"),console.log("socket message:",e),t.setData({loading:!1})})),n["a"].connectSocket({url:"wss://echo.websocket.org"})},closeSocket:function(){var t=this;"connected"===this.data.socketStatus&&n["a"].closeSocket({success:function(){l("Socket已断开"),t.setData({socketStatus:"closed"})}})},sendMessage:function(){"connected"===this.data.socketStatus&&n["a"].sendSocketMessage({data:"Hello, Miniprogram!"})}});var u=void 0,k=(o("f2f6"),o("ff9c"),o("2877")),r=Object(k["a"])(u,s,c,!1,null,"4403ff9c",null);e["default"]=r.exports},"15a9":function(t,e,o){},"2fc1":function(t,e,o){},f2f6:function(t,e,o){"use strict";var s=o("15a9"),c=o.n(s);c.a},ff9c:function(t,e,o){"use strict";var s=o("2fc1"),c=o.n(s);c.a}}]);
//# sourceMappingURL=chunk-7620782d.d36ab7b6.js.map