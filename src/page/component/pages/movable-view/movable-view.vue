<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"movable-view"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title first">movable-view区域小于movable-area</onekit-view>
          <onekit-movable-area>
            <onekit-movable-view :x="x"
                                 :y="y"
                                 direction="all">text</onekit-movable-view>
          </onekit-movable-area>
        </onekit-view>
        <onekit-view onekit-class="btn-area">
          <onekit-button @Tap="tap"
                         onekit-class="page-body-button"
                         type="primary">点击移动到 (30px, 30px)</onekit-button>
        </onekit-view>

        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">movable-view区域大于movable-area</onekit-view>
          <onekit-movable-area>
            <onekit-movable-view onekit-class="max"
                                 direction="all">text</onekit-movable-view>
          </onekit-movable-area>
        </onekit-view>

        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">只可以横向移动</onekit-view>
          <onekit-movable-area>
            <onekit-movable-view direction="horizontal">text</onekit-movable-view>
          </onekit-movable-area>
        </onekit-view>

        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">只可以纵向移动</onekit-view>
          <onekit-movable-area>
            <onekit-movable-view direction="vertical">text</onekit-movable-view>
          </onekit-movable-area>
        </onekit-view>

        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">可超出边界</onekit-view>
          <onekit-movable-area>
            <onekit-movable-view direction="all"
                                 out-of-bounds>text</onekit-movable-view>
          </onekit-movable-area>
        </onekit-view>

        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">带有惯性</onekit-view>
          <onekit-movable-area>
            <onekit-movable-view direction="all"
                                 inertia>text</onekit-movable-view>
          </onekit-movable-area>
        </onekit-view>

        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">可放缩</onekit-view>
          <onekit-movable-area scale-area>
            <onekit-movable-view direction="all"
                                 @Change="onChange"
                                 @Scale="onScale"
                                 scale
                                 scale-min="0.5"
                                 scale-max="4"
                                 :scale-value="scale">text</onekit-movable-view>
          </onekit-movable-area>
        </onekit-view>

        <onekit-view onekit-class="btn-area">
          <onekit-button @Tap="tap2"
                         onekit-class="page-body-button"
                         type="primary">点击放大3倍</onekit-button>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import foot from '../../../../page/common/foot.foot'
Vue.component('onekit-template-foot', foot)
import head from '../../../../page/common/head.head'
Vue.component('onekit-template-head', head)
const ONEKIT_JSON = {
  "navigationBarTitleText": "movable-view",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'movable-view',
      path: 'page/component/pages/movable-view/movable-view'
    }
  },
  data: {
    x: 0,
    y: 0,
    scale: 2
  },
  tap: function () {
    this.setData({
      x: 30,
      y: 30
    })
  },
  tap2: function () {
    this.setData({
      scale: 3
    })
  },
  onChange: function (e) {
    console.log(e.detail)
  },
  onScale: function (e) {
    console.log(e.detail)
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
  margin: 25px 0px 0 25px;
  background-color: #ccc;
  overflow: hidden;
}
.max {
  width: 300px;
  height: 300px;
}
.page-section {
  width: 100%;
  margin-bottom: 10px;
}
.page-section-title {
  margin-top: 25px;
  font-size: 14px;
  color: #999999;
  margin-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
}
.page-section-title.first {
  margin-top: 0;
}
.btn-area {
  margin-top: 10px;
}
</style>
