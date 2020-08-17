<script>
const PAGE_JSON = {
  navigationBarTitleText: "image",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-view class="page-section page-section-gap">
          <onekit-view class="page-section-title">Local Image</onekit-view>
          <onekit-view class="page-section-ctn">
            <onekit-image class="image" src="../../resources/pic/1.jpg"></onekit-image>
          </onekit-view>
        </onekit-view>
        <onekit-view class="page-section page-section-gap">
          <onekit-view class="page-section-title">Internet Image</onekit-view>
          <onekit-view class="page-section-ctn">
            <onekit-image class="image" :src="imageUrl"></onekit-image>
          </onekit-view>
        </onekit-view>
        <onekit-view class="page-section page-section-gap">
          <onekit-view class="page-section-title">Webp Image</onekit-view>
          <onekit-view class="page-section-ctn">
            <onekit-image class="image" webp :src="webpImageUrl" mode="aspectFit"></onekit-image>
          </onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </page>
</template>
<script>
import OnekitPage from "../../../../onekit/OnekitPage.js"
import wx from "../../../../onekit/wx.js";
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "image",
      path: "page/component/pages/image/image",
    };
  },
  onLoad: function () {
    wx.cloud
      .getTempFileURL({
        fileList: [
          {
            fileID:
              "cloud://release-b86096.7265-release-b86096-1258211818/开发者社区.webp",
            maxAge: 60 * 60,
          },
        ],
      })
      .then((res) => {
        console.log(res);
        this.setData({
          webpImageUrl: res.fileList[0].tempFileURL,
        });
      })
      .catch((error) => {
        console.log("CLOUD：image 临时链接获取失败");
      });
  },
  data: {
    imageUrl: "cloud://release-b86096.7265-release-b86096-1258211818/demo.jpg",
    webpImageURL: "",
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
.page-section-ctn {
  text-align: center;
}

.image {
  margin-top: 15px;
  width: 345px;
  height: 225px;
}
</style>
