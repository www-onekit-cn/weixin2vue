<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"rich-text"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">通过HTML String渲染</onekit-view>
          <onekit-view onekit-class="page-content">
            <onekit-scroll-view scroll-y>{{htmlSnip}}</onekit-scroll-view>
            <onekit-button type="primary"
                           @Tap="renderHtml">渲染HTML</onekit-button>
            <template v-if="renderedByHtml">
              <onekit-rich-text :nodes="htmlSnip"></onekit-rich-text>
            </template>
          </onekit-view>
        </onekit-view>

        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">通过节点渲染</onekit-view>
          <onekit-view onekit-class="page-content">
            <onekit-scroll-view scroll-y>{{nodeSnip}}</onekit-scroll-view>
            <onekit-button type="primary"
                           @Tap="renderNode">渲染Node</onekit-button>
            <template v-if="renderedByNode">
              <onekit-rich-text :nodes="nodes"></onekit-rich-text>
            </template>
          </onekit-view>
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
  "navigationBarTitleText": "rich-text",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
const htmlSnip = `<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`
const nodeSnip = `Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'You never know what you're gonna get.'
      }]
    }]
  }
})
`
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'rich-text',
      path: 'page/component/pages/rich-text/rich-text'
    }
  },
  data: {
    htmlSnip,
    nodeSnip,
    renderedByHtml: false,
    renderedByNode: false,
    nodes: [
      {
        name: 'div',
        attrs: {
          class: 'div_class',
          style: 'line-height: 60px; color: #1AAD19;'
        },
        children: [
          {
            type: 'text',
            text: 'You never know what you\'re gonna get.'
          }
        ]
      }
    ]
  },
  renderHtml: function () {
    this.setData({
      renderedByHtml: true
    })
  },
  renderNode: function () {
    this.setData({
      renderedByNode: true
    })
  },
  enterCode: function (e) {
    console.log(e.detail.value)
    this.setData({
      htmlSnip: e.detail.value
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-content {
  width: auto;
  margin: 15px 0;
  padding: 0 25px;
}
.code-fragment {
  height: 325px;
}
.code-textarea {
  width: auto;
  height: 325px;
  border: 1px solid #1aad19;
}
.p {
  color: #1aad19;
  margin-top: 15px;
}
.space {
  display: inline-block;
  background: red;
  width: 5px;
}
.onekit-scroll-view {
  height: 325px;
  border: 1px solid #1aad19;
  white-space: pre;
  padding: 5px;
  box-sizing: border-box;
}
</style>
