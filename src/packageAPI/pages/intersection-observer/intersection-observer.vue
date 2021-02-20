<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"intersectionObserver"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section message">
          <onekit-text v-if="appear">
            小球出现
          </onekit-text>
          <onekit-text v-else>
            小球消失
          </onekit-text>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-scroll-view onekit-class="scroll-view"
                              scroll-y>
            <onekit-view onekit-class="scroll-area"
                         :onekit-style="appear ? 'background: #ccc' : ''">
              <onekit-text onekit-class="notice">向下滚动让小球出现</onekit-text>
              <onekit-view onekit-class="filling"></onekit-view>
              <onekit-view onekit-class="ball"></onekit-view>
            </onekit-view>
          </onekit-scroll-view>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import head from '../../../common/head.head'
Vue.component('onekit-template-head', head)
import foot from '../../../common/foot.foot'
Vue.component('onekit-template-foot', foot)
const ONEKIT_JSON = {
  "navigationBarTitleText": "WXML节点布局相交状态",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'WXML节点布局相交状态',
      path: 'packageAPI/pages/intersection-observer/intersection-observer'
    }
  },
  data: {
    appear: false
  },
  onLoad: function () {
    this._observer = wx.createIntersectionObserver(this)
    this._observer.relativeTo('.scroll-view').observe('.ball', (res) => {
      console.log(res)
      this.setData({
        appear: res.intersectionRatio > 0
      })
    })
  },
  onUnload: function () {
    if (this._observer) this._observer.disconnect()
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.scroll-view {
  height: 200px;
  background: var(--weui-BG-2);
}
.scroll-area {
  height: 1150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
}
.notice {
  margin-top: 75px;
}
.ball {
  width: 100px;
  height: 100px;
  background: #1aad19;
  border-radius: 50%;
}
.filling {
  height: 200px;
}
.message {
  width: 100%;
  display: flex;
  justify-content: center;
}
.message text {
  font-size: 20px;
  font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
}
</style>
