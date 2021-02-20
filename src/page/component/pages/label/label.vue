<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"label"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">表单组件在label内</onekit-view>
          <onekit-checkbox-group onekit-class="group"
                                 @Change="checkboxChange">
            <onekit-view v-for="(item,index) in checkboxItems"
                         :key="index"
                         onekit-class="label-1">
              <onekit-label>
                <onekit-checkbox :value="item.name"
                                 :checked="item.checked"></onekit-checkbox>
                <onekit-text onekit-class="label-1-text">{{item.value}}</onekit-text>
              </onekit-label>
            </onekit-view>
          </onekit-checkbox-group>
        </onekit-view>

        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">label用for标识表单组件</onekit-view>
          <onekit-radio-group onekit-class="group"
                              @Change="radioChange">
            <onekit-view v-for="(item,index) in radioItems"
                         :key="index"
                         onekit-class="label-2">
              <onekit-radio :onekit-id="item.name"
                            :value="item.name"
                            :checked="item.checked"></onekit-radio>
              <onekit-label onekit-class="label-2-text"
                            :for="item.name">
                <onekit-text>{{item.name}}</onekit-text>
              </onekit-label>
            </onekit-view>
          </onekit-radio-group>
        </onekit-view>

        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">label内有多个时选中第一个</onekit-view>
          <onekit-label onekit-class="label-3">
            <onekit-checkbox onekit-class="checkbox-3">选项一</onekit-checkbox>
            <onekit-checkbox onekit-class="checkbox-3">选项二</onekit-checkbox>
            <onekit-view onekit-class="label-3-text">点击该label下的文字默认选中第一个checkbox</onekit-view>
          </onekit-label>
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
  "navigationBarTitleText": "label",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
//import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'label',
      path: 'page/component/pages/label/label'
    }
  },
  data: {
    checkboxItems: [
      {
        name: 'USA',
        value: '美国'
      },
      {
        name: 'CHN',
        value: '中国',
        checked: 'true'
      }
    ],
    radioItems: [
      {
        name: 'USA',
        value: '美国'
      },
      {
        name: 'CHN',
        value: '中国',
        checked: 'true'
      }
    ],
    hidden: false
  },
  checkboxChange: function (e) {
    const checked = e.detail.value
    const changed = {}
    for (var i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed[(('checkboxItems[' + i)) + '].checked'] = true;
      } else {
        changed[(('checkboxItems[' + i)) + '].checked'] = false;
      }
    }
    this.setData(changed)
  },
  radioChange: function (e) {
    const checked = e.detail.value
    const changed = {}
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed[(('radioItems[' + i)) + '].checked'] = true;
      } else {
        changed[(('radioItems[' + i)) + '].checked'] = false;
      }
    }
    this.setData(changed)
  },
  tapEvent: function () {
    console.log('按钮被点击')
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.label-1,
.label-2 {
  margin: 15px 0;
}
.label-3-text {
  color: #576b95;
  font-size: 14px;
}
.checkbox-3 {
  display: block;
  margin: 15px 0;
}
</style>
