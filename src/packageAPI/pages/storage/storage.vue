<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"get/set/clearStorage"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">key</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input onekit-class="weui-input"
                              type="text"
                              placeholder="请输入key"
                              name="key"
                              :value="key"
                              @Input="keyChange"></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">value</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input onekit-class="weui-input"
                              type="text"
                              placeholder="请输入value"
                              name="data"
                              :value="data"
                              @Input="dataChange"></onekit-input>
              </onekit-view>
            </onekit-view>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="setStorage">存储数据</onekit-button>
            <onekit-button @Tap="getStorage">读取数据</onekit-button>
            <onekit-button @Tap="clearStorage">清理数据</onekit-button>
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
  "navigationBarTitleText": "数据存储",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '数据存储',
      path: 'packageAPI/pages/storage/storage'
    }
  },
  data: {
    key: '',
    data: '',
    dialog: {
      title: '',
      content: '',
      hidden: true
    }
  },
  keyChange: function (e) {
    this.data.key = e.detail.value
  },
  dataChange: function (e) {
    this.data.data = e.detail.value
  },
  getStorage: function () {
    const { key, data } = this.data
    var storageData
    if (key.length == 0) {
      this.setData({
        key,
        data
      });
      wx.showModal({
        title: '读取数据失败',
        content: 'key 不能为空'
      });
    } else {
      storageData = wx.getStorageSync(key);
      console.log(storageData);
      if (storageData == '') {
        this.setData({
          key,
          data: storageData
        });
        wx.showModal({
          title: '读取数据失败',
          content: '找不到 key 对应的数据'
        });
      } else {
        this.setData({
          key,
          data: storageData
        });
        wx.showModal({
          title: '读取数据成功',
          content: storageData
        });
      }
    }
  },
  setStorage: function () {
    const { key, data } = this.data
    if (key.length == 0) {
      this.setData({
        key,
        data
      });
      wx.showModal({
        title: '保存数据失败',
        content: 'key 不能为空'
      });
    } else {
      wx.setStorageSync(key, data);
      this.setData({
        key,
        data
      });
      wx.showModal({
        title: '存储数据成功'
      });
    }
  },
  clearStorage: function () {
    wx.clearStorageSync()
    this.setData({
      key: '',
      data: ''
    })
    wx.showModal({
      title: '清除数据成功'
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
</style>
