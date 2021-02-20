/* eslint-disable no-unused-vars */
<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"radio"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">默认样式</onekit-view>
          <onekit-label onekit-class="radio">
            <onekit-radio value="r1"
                          checked="true"></onekit-radio>选中
          </onekit-label>
          <onekit-label onekit-class="radio">
            <onekit-radio value="r2"></onekit-radio>未选中
          </onekit-label>
        </onekit-view>

        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">推荐展示样式</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-radio-group @Change="radioChange">
              <onekit-label v-for="(item) in items"
                            :key="item.value"
                            onekit-class="weui-cell weui-check__label">

                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-radio :value="item.value"
                                checked="true"></onekit-radio>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">{{item.name}}</onekit-view>
              </onekit-label>
            </onekit-radio-group>
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
  "navigationBarTitleText": "radio",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'radio',
      path: 'page/component/pages/radio/radio'
    }
  },
  data: {
    items: [
      {
        value: 'USA',
        name: '美国'
      },
      {
        value: 'CHN',
        name: '中国',
        checked: 'true'
      },
      {
        value: 'BRA',
        name: '巴西'
      },
      {
        value: 'JPN',
        name: '日本'
      },
      {
        value: 'ENG',
        name: '英国'
      },
      {
        value: 'FRA',
        name: '法国'
      }
    ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    const items = this.data.items
    for (var i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value == e.detail.value;
    }
    this.setData({
      items
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.radio {
  margin-right: 10px;
}
</style>
