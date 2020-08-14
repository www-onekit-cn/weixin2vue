<script>
const PAGE_JSON = {
  navigationBarTitleText: "textarea",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-view class="page-section">
          <onekit-view class="page-section-title">输入区域高度自适应，不会出现滚动条</onekit-view>
          <onekit-view class="textarea-wrp">
            <onekit-textarea @blur="bindTextAreaBlur" auto-height></onekit-textarea>
          </onekit-view>
        </onekit-view>

        <onekit-view class="page-section">
          <onekit-view class="page-section-title">这是一个可以自动聚焦的textarea</onekit-view>
          <onekit-view class="textarea-wrp">
            <onekit-textarea auto-focus="true" style="height: 3em"></onekit-textarea>
          </onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </page>
</template>
<script>
import {
  OnekitApp,
  OnekitPage,
  OnekitComponent,
} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "textarea",
      path: "page/component/pages/textarea/textarea",
    };
  },
  data: {
    focus: false,
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value);
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
textarea {
  width: 350px;
  padding: 13px 0;
}
.textarea-wrp {
  padding: 0 13px;
}
</style>
