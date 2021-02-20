<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"cover-view"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-map onekit-style="width: 100%; height: 300px;"
                      :latitude="latitude"
                      :longitude="longitude">
            <onekit-cover-view onekit-class="cover-view">
              <onekit-cover-view onekit-class="container">
                <onekit-cover-view onekit-class="flex-wrp"
                                   onekit-style="flex-direction:row;">
                  <onekit-cover-view onekit-class="flex-item demo-text-1"></onekit-cover-view>
                  <onekit-cover-view onekit-class="flex-item demo-text-2"></onekit-cover-view>
                  <onekit-cover-view onekit-class="flex-item demo-text-3"></onekit-cover-view>
                </onekit-cover-view>
              </onekit-cover-view>
            </onekit-cover-view>
          </onekit-map>
        </onekit-view>
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
  "navigationBarTitleText": "cover-view",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'cover-view',
      path: 'page/component/pages/cover-view/cover-view'
    }
  },
  data: {
    latitude: 23.099994,
    longitude: 113.32452
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.cover-view {
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 150px);
}
.flex-wrp {
  display: flex;
}
.flex-item {
  width: 100px;
  height: 150px;
  font-size: 13px;
}
.demo-text-1 {
  background: rgba(26, 173, 25, 0.7);
}
.demo-text-2 {
  background: rgba(39, 130, 215, 0.7);
}
.demo-text-3 {
  background: rgba(255, 255, 255, 0.7);
}
</style>
