(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11fd17c5"],{"0fd2":function(e,t,a){"use strict";var i=a("1ea6"),o=a.n(i);o.a},1194:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("onekit-page",[a("import",{attrs:{src:"../../../common/head.vue"}}),a("import",{attrs:{src:"../../../common/foot.vue"}}),a("onekit-view",{staticClass:"container"},[a("onekit-view",{staticClass:"page-body"},[a("onekit-view",{staticClass:"page-section"},[e.fileUploaded?a("onekit-block",[a("onekit-view",{staticClass:"weui-cells weui-cells_after-title"},[a("onekit-view",{staticClass:"weui-cell weui-cell_input"},[a("onekit-view",{staticClass:"weui-cell__hd"},[a("onekit-view",{staticClass:"weui-label"},[e._v("文件 ID")])],1),a("onekit-view",{staticClass:"weui-cell__bd"},[a("onekit-textarea",{staticClass:"weui-textarea",staticStyle:{height:"3.3em"},attrs:{value:e.fileId,disabled:""}})],1)],1),a("onekit-view",{staticClass:"weui-cell page-section-ctn"},[a("onekit-image",{staticClass:"image",attrs:{src:e.filePath,mode:"aspectFit"}})],1)],1),e.fromOtherPage?a("onekit-view",{staticClass:"btn-area"},[a("onekit-navigator",{attrs:{"open-type":"navigateBack"}},[a("onekit-button",{attrs:{type:"primary",size:"40"}},[e._v("返回")])],1)],1):e._e()],1):a("onekit-block",[a("onekit-view",{staticClass:"page-body-info"},[a("onekit-view",{staticClass:"image-plus image-plus-nb",on:{tap:e.chooseImage}},[a("onekit-view",{staticClass:"image-plus-horizontal"}),a("onekit-view",{staticClass:"image-plus-vertical"})],1),a("onekit-view",{staticClass:"image-plus-text"},[e._v("选择图片")])],1)],1)],1)],1)],1)],1)},o=[],s=(a("4d63"),a("ac1f"),a("25f0"),a("466d"),a("711f")),n=a("79f0"),c=getApp();Object(s["OnekitPage"])({onShareAppMessage:function(){return{title:"上传文件",path:"page/cloud/pages/upload-file/upload-file"}},data:{fileUploaded:!1,fileId:"",filePath:"",fromOtherPage:!1},onLoad:function(e){e.from&&this.setData({fromOtherPage:!0})},chooseImage:function(){var e=this;n["a"].chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){console.log("chooseImage success, temp path is",t.tempFilePaths[0]);var a=t.tempFilePaths[0];n["a"].showLoading({title:"上传中"}),c.getUserOpenIdViaCloud().then((function(t){var i="upload/"+t+a.match(new RegExp(".[^.]+?$",""))[0];return console.log("cloudPath",i),n["a"].cloud.uploadFile({cloudPath:i,filePath:a,success:function(t){console.log("[上传文件] 成功：",t),c.globalData.fileId=t.fileID,e.setData({fileUploaded:!0,fileId:t.fileID,filePath:a}),n["a"].hideLoading()},fail:function(e){console.error("[上传文件] 失败：",e),n["a"].hideLoading(),n["a"].showToast({icon:"none",title:"上传失败"})}}),t})).catch((function(e){console.error(e),n["a"].hideLoading()}))},fail:function(e){var t=e.errMsg;console.log("chooseImage fail, err is",t)}})}});var l=void 0,r=(a("c57d"),a("0fd2"),a("2877")),u=Object(r["a"])(l,i,o,!1,null,"abe5113c",null);t["default"]=u.exports},"1ea6":function(e,t,a){},"4d63":function(e,t,a){var i=a("83ab"),o=a("da84"),s=a("94ca"),n=a("7156"),c=a("9bf2").f,l=a("241c").f,r=a("44e7"),u=a("ad6d"),f=a("9f7f"),p=a("6eeb"),d=a("d039"),g=a("69f3").set,h=a("2626"),v=a("b622"),w=v("match"),m=o.RegExp,k=m.prototype,b=/a/g,C=/a/g,P=new m(b)!==b,y=f.UNSUPPORTED_Y,I=i&&s("RegExp",!P||y||d((function(){return C[w]=!1,m(b)!=b||m(C)==C||"/a/i"!=m(b,"i")})));if(I){var _=function(e,t){var a,i=this instanceof _,o=r(e),s=void 0===t;if(!i&&o&&e.constructor===_&&s)return e;P?o&&!s&&(e=e.source):e instanceof _&&(s&&(t=u.call(e)),e=e.source),y&&(a=!!t&&t.indexOf("y")>-1,a&&(t=t.replace(/y/g,"")));var c=n(P?new m(e,t):m(e,t),i?this:k,_);return y&&a&&g(c,{sticky:a}),c},x=function(e){e in _||c(_,e,{configurable:!0,get:function(){return m[e]},set:function(t){m[e]=t}})},O=l(m),D=0;while(O.length>D)x(O[D++]);k.constructor=_,_.prototype=k,p(o,"RegExp",_)}h("RegExp")},acce:function(e,t,a){},c57d:function(e,t,a){"use strict";var i=a("acce"),o=a.n(i);o.a}}]);
//# sourceMappingURL=chunk-11fd17c5.b7154f4b.js.map