(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b86805b"],{"441e":function(t,e,a){"use strict";var i=a("94eb"),s=a.n(i);s.a},"8bbe":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("onekit-page",[a("import",{attrs:{src:"../../../common/head.vue"}}),a("import",{attrs:{src:"../../../common/foot.vue"}}),a("onekit-view",{staticClass:"container"},[a("onekit-view",{staticClass:"page-body"},[a("onekit-view",{staticClass:"weui-cells weui-cells_after-title"},[a("onekit-view",{staticClass:"weui-cell weui-cell_input"},[a("onekit-view",{staticClass:"weui-cell__hd"},[a("onekit-view",{staticClass:"weui-label"},[t._v("Copy")])],1),a("onekit-view",{staticClass:"weui-cell__bd"},[a("onekit-input",{staticClass:"weui-input",attrs:{type:"text",name:"key",value:t.value},on:{input:t.valueChanged}})],1)],1),a("onekit-view",{staticClass:"weui-cell weui-cell_input"},[a("onekit-view",{staticClass:"weui-cell__hd"},[a("onekit-view",{staticClass:"weui-label"},[t._v("Paste")])],1),a("onekit-view",{staticClass:"weui-cell__bd"},[a("onekit-input",{staticClass:"weui-input",attrs:{type:"text",value:t.pasted}})],1)],1)],1),a("onekit-view",{staticClass:"btn-area"},[a("onekit-button",{attrs:{type:"primary"},on:{tap:t.copy}},[t._v("复制")]),a("onekit-button",{on:{tap:t.paste}},[t._v("粘贴")])],1)],1)],1)],1)},s=[],n=a("711f"),c=a("79f0");Object(n["OnekitPage"])({onShareAppMessage:function(){return{title:"剪切板",path:"packageAPI/pages/clipboard-data/clipboard-data"}},data:{value:"edit and copy me",pasted:""},valueChanged:function(t){this.setData({value:t.detail.value})},copy:function(){c["a"].setClipboardData({data:this.data.value,success:function(){c["a"].showToast({title:"复制成功",icon:"success",duration:1e3})}})},paste:function(){var t=this;c["a"].getClipboardData({success:function(e){t.setData({pasted:e.data}),c["a"].showToast({title:"粘贴成功",icon:"success",duration:1e3})}})}});var o=void 0,l=(a("edd9"),a("441e"),a("2877")),u=Object(l["a"])(o,i,s,!1,null,"ec2f3c10",null);e["default"]=u.exports},"94eb":function(t,e,a){},cbcd:function(t,e,a){},edd9:function(t,e,a){"use strict";var i=a("cbcd"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-5b86805b.f20b4ad7.js.map