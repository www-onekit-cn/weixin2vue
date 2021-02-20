<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"checkbox"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">默认样式</onekit-view>
          <onekit-label onekit-class="checkbox">
            <onekit-checkbox value="cb"
                             checked="true"></onekit-checkbox>选中
          </onekit-label>
          <onekit-label onekit-class="checkbox">
            <onekit-checkbox value="cb"></onekit-checkbox>未选中
          </onekit-label>
        </onekit-view>

        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">推荐展示样式</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-checkbox-group @Change="checkboxChange">
              <onekit-label v-for="(item) in items"
                            :key="item.value"
                            onekit-class="weui-cell weui-check__label">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-checkbox :value="item.value"
                                   :checked="item.checked"></onekit-checkbox>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">{{item.name}}</onekit-view>
              </onekit-label>
            </onekit-checkbox-group>
          </onekit-view>
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
  "navigationBarTitleText": "checkbox",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
//import wx from '../../../../../weixin2vue/wx';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'checkbox',
      path: 'page/component/pages/checkbox/checkbox'
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
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    const items = this.data.items
    const values = e.detail.value
    for (var i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false;
      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value == values[j]) {
          items[i].checked = true;
          break;
        }
      }
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
.checkbox {
  margin-right: 10px;
}
</style>
