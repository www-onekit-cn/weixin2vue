<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"open-data"}'></onekit-template>
      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="avatar">
          <onekit-open-data onekit-class="avatar-img"
                            type="userAvatarUrl"
                            lang="zh_CN"></onekit-open-data>
        </onekit-view>
        <onekit-form>
          <onekit-view onekit-class="page-section">
            <onekit-view onekit-class="weui-cells weui-cells_after-title">
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">昵称</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-view onekit-class="weui-input">
                    <onekit-open-data type="userNickName"
                                      lang="zh_CN"></onekit-open-data>
                  </onekit-view>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">性别</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-view onekit-class="weui-input">
                    <onekit-open-data type="userGender"
                                      lang="zh_CN"></onekit-open-data>
                  </onekit-view>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">地区</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-view onekit-class="weui-input">
                    <onekit-open-data onekit-class="country"
                                      type="userCountry"
                                      lang="zh_CN"></onekit-open-data>
                    <onekit-open-data onekit-class="province"
                                      type="userProvince"
                                      lang="zh_CN"></onekit-open-data>
                    <onekit-open-data onekit-class="city"
                                      type="userCity"
                                      lang="zh_CN"></onekit-open-data>
                  </onekit-view>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">语言</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-view onekit-class="weui-input">
                    <onekit-open-data type="userLanguage"
                                      lang="zh_CN"></onekit-open-data>
                  </onekit-view>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-form>

      </onekit-view>
      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import foot from '../../../../page/common/foot.foot'
Vue.component('onekit-template-foot', foot)
import head from '../../../../page/common/head.head'
Vue.component('onekit-template-head', head)
const ONEKIT_JSON = {
  "navigationBarTitleText": "open-data",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'open-data',
      path: 'page/component/pages/open-data/open-data'
    }
  }
})
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
