<script>
const PAGE_JSON = {
  navigationBarTitleText: "open-data",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-view class="avatar">
          <onekit-open-data class="avatar-img" type="userAvatarUrl" lang="zh_CN"></onekit-open-data>
        </onekit-view>
        <onekit-form>
          <onekit-view class="page-section">
            <onekit-view class="weui-cells weui-cells_after-title">
              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">昵称</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-view class="weui-input">
                    <onekit-open-data type="userNickName" lang="zh_CN"></onekit-open-data>
                  </onekit-view>
                </onekit-view>
              </onekit-view>

              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">性别</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-view class="weui-input">
                    <onekit-open-data type="userGender" lang="zh_CN"></onekit-open-data>
                  </onekit-view>
                </onekit-view>
              </onekit-view>

              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">地区</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-view class="weui-input">
                    <onekit-open-data class="country" type="userCountry" lang="zh_CN"></onekit-open-data>
                    <onekit-open-data class="province" type="userProvince" lang="zh_CN"></onekit-open-data>
                    <onekit-open-data class="city" type="userCity" lang="zh_CN"></onekit-open-data>
                  </onekit-view>
                </onekit-view>
              </onekit-view>

              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">语言</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-view class="weui-input">
                    <onekit-open-data type="userLanguage" lang="zh_CN"></onekit-open-data>
                  </onekit-view>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-form>
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
      title: "open-data",
      path: "page/component/pages/open-data/open-data",
    };
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

.avatar {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.avatar-img {
  width: 50%;
  border-radius: 50%;
}

.country,
.province,
.city {
  padding-right: 5px;
}
</style>
