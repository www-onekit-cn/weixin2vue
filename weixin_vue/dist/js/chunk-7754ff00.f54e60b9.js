(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7754ff00"],{"292a":function(e,t,s){},"411c":function(e,t,s){"use strict";var a=s("db5b"),i=s.n(a);i.a},"8d0c":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("onekit-page",[s("import",{attrs:{src:"../../../common/head.vue"}}),s("import",{attrs:{src:"../../../common/foot.vue"}}),s("onekit-view",{staticClass:"container"},[s("onekit-view",{staticClass:"page-body"},[s("onekit-view",{staticClass:"page-section message"},[e.appear?s("onekit-text",[e._v(" 小球出现 ")]):s("onekit-text",[e._v(" 小球消失 ")])],1),s("onekit-view",{staticClass:"page-section"},[s("onekit-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-y":""}},[s("onekit-view",{staticClass:"scroll-area",style:e.appear?"background: #ccc":""},[s("onekit-text",{staticClass:"notice"},[e._v("向下滚动让小球出现")]),s("onekit-view",{staticClass:"filling"}),s("onekit-view",{staticClass:"ball"})],1)],1)],1)],1)],1)],1)},i=[],n=s("711f"),o=s("79f0");Object(n["OnekitPage"])({onShareAppMessage:function(){return{title:"WXML节点布局相交状态",path:"packageAPI/pages/intersection-observer/intersection-observer"}},data:{appear:!1},onLoad:function(){var e=this;this._observer=o["a"].createIntersectionObserver(this),this._observer.relativeTo(".scroll-view").observe(".ball",(function(t){console.log(t),e.setData({appear:t.intersectionRatio>0})}))},onUnload:function(){this._observer&&this._observer.disconnect()}});var c=void 0,r=(s("411c"),s("d0ad"),s("2877")),l=Object(r["a"])(c,a,i,!1,null,"415847fe",null);t["default"]=l.exports},d0ad:function(e,t,s){"use strict";var a=s("292a"),i=s.n(a);i.a},db5b:function(e,t,s){}}]);
//# sourceMappingURL=chunk-7754ff00.f54e60b9.js.map