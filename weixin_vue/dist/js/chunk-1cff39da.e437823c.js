(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cff39da"],{"4b53":function(e,a,t){},"671a":function(e,a,t){},"6a74":function(e,a,t){"use strict";var s=t("4b53"),i=t.n(s);i.a},"7eec":function(e,a,t){"use strict";var s=t("671a"),i=t.n(s);i.a},ef2e:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("onekit-page",[t("import",{attrs:{src:"../../../common/head.vue"}}),t("import",{attrs:{src:"../../../common/foot.vue"}}),t("onekit-view",{staticClass:"container"},[t("onekit-view",{staticClass:"page-body"},[t("onekit-view",{staticClass:"page-section"},[t("onekit-view",{staticClass:"page-body-info"},[e.imageSrc?t("onekit-block",[t("onekit-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"aspectFit"}})],1):t("onekit-block",[t("onekit-view",{staticClass:"image-plus image-plus-nb",on:{tap:e.chooseImage}},[t("onekit-view",{staticClass:"image-plus-horizontal"}),t("onekit-view",{staticClass:"image-plus-vertical"})],1),t("onekit-view",{staticClass:"image-plus-text"},[e._v("选择图片")])],1)],1)],1)],1)],1)],1)},i=[],o=t("711f"),c=t("79f0");Object(o["OnekitPage"])({onShareAppMessage:function(){return{title:"上传文件",path:"packageAPI/pages/upload-file/upload-file"}},chooseImage:function(){var e=this;c["a"].chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(a){console.log("chooseImage success, temp path is",a.tempFilePaths[0]);var t=a.tempFilePaths[0];c["a"].cloud.uploadFile({cloudPath:"example.png",filePath:t,config:{env:"release-b86096"},success:function(a){console.log(a.fileID),console.log("uploadImage success, res is:",a),c["a"].showToast({title:"上传成功",icon:"success",duration:1e3}),e.setData({imageSrc:t,fileID:a.fileID})},fail:function(e){var a=e.errMsg;console.log("uploadImage fail, errMsg is",a)}})},fail:function(e){c["a"].showToast({icon:"none",title:"上传失败"}),console.log("uploadImage fail, errMsg is",e.errMsg)}})},onUnload:function(){this.data.fileID&&c["a"].cloud.deleteFile({fileList:[this.data.fileID]})}});var n=void 0,l=(t("6a74"),t("7eec"),t("2877")),u=Object(l["a"])(n,s,i,!1,null,"65c3e145",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-1cff39da.e437823c.js.map