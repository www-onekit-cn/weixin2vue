(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9fe1844"],{"552e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("onekit-page",[a("import",{attrs:{src:"../../../common/head.vue"}}),a("import",{attrs:{src:"../../../common/foot.vue"}}),a("onekit-view",{staticClass:"container"},[a("onekit-view",{staticClass:"page-body"},[a("onekit-view",{staticClass:"page-body-wording"},[a("onekit-text",{staticClass:"page-body-text"},[e._v(" 点击向服务器发起请求 ")])],1),a("onekit-view",{staticClass:"btn-area"},[a("onekit-button",{attrs:{type:"primary",disabled:e.buttonDisabled,loading:e.loading},on:{tap:e.makeRequest}},[e._v("request")])],1)],1)],1)],1)},o=[],s=a("711f"),i=a("79f0"),r=a("db49").requestUrl,c=2e3;Object(s["OnekitPage"])({onShareAppMessage:function(){return{title:"网络请求",path:"packageAPI/pages/request/request"}},makeRequest:function(){var e=this;e.setData({loading:!0}),i["a"].request({url:r,data:{noncestr:Date.now()},success:function(t){i["a"].showToast({title:"请求成功",icon:"success",mask:!0,duration:c}),e.setData({loading:!1}),console.log("request success",t)},fail:function(t){var a=t.errMsg;console.log("request fail",a),e.setData({loading:!1})}})}});var l=void 0,u=(a("ef5a"),a("fc28"),a("2877")),d=Object(u["a"])(l,n,o,!1,null,"9af5c34e",null);t["default"]=d.exports},c3c6:function(e,t,a){},ce3f:function(e,t,a){},db49:function(e,t,a){"use strict";a.r(t),function(e){a("711f"),a("79f0");var t="14592619.qcloud.la",n={requestUrl:"https://mp.weixin.qq.com",host:t,envId:"release-b86096",demoImageFileId:"cloud://release-b86096.7265-release-b86096-1258211818/demo.jpg",demoVideoFileId:"cloud://release-b86096.7265-release-b86096/demo.mp4"};e.exports=n}.call(this,a("dd40")(e))},dd40:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},ef5a:function(e,t,a){"use strict";var n=a("ce3f"),o=a.n(n);o.a},fc28:function(e,t,a){"use strict";var n=a("c3c6"),o=a.n(n);o.a}}]);
//# sourceMappingURL=chunk-a9fe1844.4c4ec34c.js.map