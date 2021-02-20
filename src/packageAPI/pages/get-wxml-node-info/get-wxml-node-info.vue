<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"createSelectorQuery"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-movable-area>
            <onekit-movable-view onekit-class="target"
                                 :x="x"
                                 :y="y"
                                 direction="all"
                                 @Change="getNodeInfo">
              Drag
            </onekit-movable-view>
          </onekit-movable-area>
        </onekit-view>

        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="metric">
            <onekit-view v-for="(item) in  metrics "
                         :key="item.key">
              <onekit-text onekit-class="b">{{ item.key }}</onekit-text>
              <onekit-text onekit-class="span">{{ item.val }}</onekit-text>
            </onekit-view>
          </onekit-view>
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
  "navigationBarTitleText": "获取WXML节点信息",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '获取WXML节点信息',
      path: 'packageAPI/pages/get-wxml-node-info/get-wxml-node-info'
    }
  },
  data: {
    metrics: [
    ]
  },
  onReady: function () {
    this.getNodeInfo()
  },
  getNodeInfo: function () {
    const $ = wx.createSelectorQuery()
    const target = $.select('.target')
    target.boundingClientRect()
    $.exec((res) => {
      const rect = res[0]
      if (rect) {
        const metrics = [
        ];
        for (const key in rect) {
          if (((key !== 'id') && (key !== 'dataset'))) {
            const val = rect[key];
            metrics.push({
              key,
              val
            });
          }
        }
        this.setData({
          metrics
        });
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.onekit-movable-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background: #1aad19;
  color: #fff;
}
.onekit-movable-area {
  height: 200px;
  width: 200px;
  background-color: #ccc;
  overflow: hidden;
}
.page-section {
  display: flex;
  justify-content: center;
}
.page-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.metric {
  width: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.b {
  display: inline-block;
  width: 75px;
  font-weight: bold;
}
.span {
  display: inline-block;
  width: 50px;
}
</style>
