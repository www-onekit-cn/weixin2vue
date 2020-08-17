<script>
const PAGE_JSON = {
  navigationBarTitleText: "模态弹窗",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-view class="btn-area">
          <onekit-button type="default" @tap="modalTap">有标题的modal</onekit-button>
          <onekit-button type="default" @tap="noTitlemodalTap">无标题的modal</onekit-button>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </page>
</template>
<script>
import OnekitPage from "../../../onekit/OnekitPage"
import wx from "../../../onekit/wx.js";
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "模态弹窗",
      path: "packageAPI/pages/modal/modal",
    };
  },
  data: {
    modalHidden: true,
    modalHidden2: true,
  },
  modalTap: function () {
    wx.showModal({
      title: "弹窗标题",
      content:
        "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
      showCancel: false,
      confirmText: "确定",
    });
  },
  noTitlemodalTap: function () {
    wx.showModal({
      content:
        "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
      confirmText: "确定",
      cancelText: "取消",
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
/* page/API/pages/modal/modal.css */
</style>
