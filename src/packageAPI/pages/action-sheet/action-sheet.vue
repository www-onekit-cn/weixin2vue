<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"action-sheet"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="btn-area">
          <onekit-button type="default"
                         @Tap="actionSheetTap">弹出action sheet</onekit-button>
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
  "navigationBarTitleText": "操作菜单",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '操作菜单',
      path: 'packageAPI/pages/action-sheet/action-sheet'
    }
  },
  actionSheetTap: function () {
    wx.showActionSheet({
      itemList: [
        'item1',
        'item2',
        'item3',
        'item4'
      ],
      success: function (e) {
        console.log(e.tapIndex)
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
