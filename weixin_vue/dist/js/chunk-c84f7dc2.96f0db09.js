(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c84f7dc2"],{"190f":function(t,e,n){},"2c76":function(t,e,n){},"52a2":function(t,e,n){"use strict";var o=n("2c76"),a=n.n(o);a.a},"63fe":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("onekit-page",[n("import",{attrs:{src:"../../../common/head.vue"}}),n("import",{attrs:{src:"../../../common/foot.vue"}}),n("onekit-view",{staticClass:"container"},[n("onekit-view",{staticClass:"page-body"},[n("onekit-view",{staticClass:"page-section"},[n("onekit-view",{staticClass:"page-body-info"},[n("onekit-view",{staticClass:"page-body-title"},[t._v("WXContext")]),t.hasWXContext?n("onekit-block",[n("onekit-block",[n("onekit-text",{staticClass:"page-body-text"},[t._v("OpenID")]),n("onekit-text",{staticClass:"context-value"},[t._v(t._s(t.wxContext.openid))])],1),n("onekit-block",[n("onekit-text",{staticClass:"page-body-text"},[t._v("AppID")]),n("onekit-text",{staticClass:"context-value"},[t._v(t._s(t.wxContext.appid))])],1),t.wxContext.unionid?n("onekit-block",[n("onekit-text",{staticClass:"page-body-text"},[t._v("UnionID")]),n("onekit-text",{staticClass:"context-value"},[t._v(t._s(t.wxContext.unionid))])],1):t._e()],1):n("onekit-block",[n("onekit-text",{staticClass:"page-body-text"},[t._v("云函数是在云端（服务器端）运行的函数")]),n("onekit-text",{staticClass:"page-body-text"},[t._v("点击绿色按钮可调用云函数获取微信调用上下文")]),n("onekit-text",{staticClass:"page-body-text"},[t._v("返回内容包括用户 OpenID、小程序 AppID 以及用户 UnionID（满足 UnionID 获取条件时）")])],1)],1),n("onekit-view",{staticClass:"btn-area"},[n("onekit-button",{attrs:{type:"primary",loading:t.loading},on:{tap:t.getWXContext}},[t._v("获取 WXContext")]),n("onekit-button",{on:{tap:t.clear}},[t._v("清空")])],1)],1)],1)],1)],1)},a=[],i=n("711f"),s=n("79f0");Object(i["OnekitPage"])({onShareAppMessage:function(){return{title:"WXContext",path:"page/cloud/pages/get-wx-context/get-wx-context"}},data:{hasWXContext:!1,wxContext:{},loading:!1},getWXContext:function(){var t=this;this.setData({loading:!0}),s["a"].cloud.callFunction({name:"wxContext",data:{},success:function(e){console.log("[云函数] [wxContext] wxContext: ",e.result),t.setData({hasWXContext:!0,wxContext:e.result,loading:!1})},fail:function(t){console.error("[云函数] [wxContext] 调用失败",t)}})},clear:function(){this.setData({hasWXContext:!1,wxContext:{}})}});var c=void 0,x=(n("52a2"),n("ab6b"),n("2877")),l=Object(x["a"])(c,o,a,!1,null,"b6212916",null);e["default"]=l.exports},ab6b:function(t,e,n){"use strict";var o=n("190f"),a=n.n(o);a.a}}]);
//# sourceMappingURL=chunk-c84f7dc2.96f0db09.js.map