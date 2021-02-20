<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"关键帧动画"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">
            <onekit-text>关键帧动画\n\n从小程序基础库 2.9.0 开始支持一种更友好的动画创建方式，用于代替旧的 wx.createAnimation</onekit-text>
          </onekit-view>
          <onekit-view onekit-id="container1"
                       :onekit-style="containerStyle1">
            <onekit-button onekit-class="block1"
                           onekit-style="width: 150px; margin: 50px auto;">示例按钮</onekit-button>
            <onekit-a class="block1"
                      onekit-style="display: block; margin: 50px auto; width: 150px; text-align: center;">示例超链接</onekit-a>
            <onekit-text onekit-class="block1"
                         onekit-style="display: block; margin: 50px auto; width: 150px; text-align: center;">示例文本</onekit-text>
          </onekit-view>
          <onekit-button :disabled="!canIUse"
                         type="primary"
                         @Tap="change">开启动画</onekit-button>
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
  "navigationBarTitleText": "动画",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '动画',
      path: 'package/API/pages/animation/animation',
      containerStyle1: ''
    }
  },
  data: {
    canIUse: true
  },
  onLoad: function () {
    const canIUse = this.animate !== undefined
    if (!canIUse) {
      wx.showModal({
        title: '微信版本过低，暂不支持本功能'
      });
      this.setData({
        canIUse
      });
    }
  },
  change: function () {
    this.animate('#container1', [
      {
        opacity: 1.0,
        rotate: 0,
        backgroundColor: '#FF0000'
      },
      {
        opacity: 0.5,
        rotate: 45,
        backgroundColor: '#00FF00',
        offset: 0.9
      },
      {
        opacity: 0.0,
        rotate: 90,
        backgroundColor: '#FF0000'
      }
    ], 5000, function () {
      this.clearAnimation('#container1', {
        opacity: true,
        rotate: true
      }, function () {
        console.log("清除了#container上的动画属性")
      })
    }.bind(this))
    this.animate('.block1', [
      {
        scale: [
          1,
          1
        ],
        rotate: 0,
        ease: 'ease-out'
      },
      {
        scale: [
          1.5,
          1.5
        ],
        rotate: 45,
        ease: 'ease-in',
        offset: 0.9
      },
      {
        scale: [
          2,
          2
        ],
        rotate: 90
      }
    ], 5000, function () {
      this.clearAnimation('.block1', {
        scale: true,
        rotate: true
      }, function () {
        console.log("清除了.block1上的动画属性")
      })
    }.bind(this))
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.animation-element-wrapper {
  display: flex;
  width: 100%;
  padding-top: 75px;
  padding-bottom: 75px;
  justify-content: center;
  overflow: hidden;
  background-color: #ffffff;
}
.animation-element {
  width: 100px;
  height: 100px;
  background-color: #1aad19;
}
.animation-buttons {
  padding: 15px 25px 5px;
  width: 100%;
  height: 330px;
  box-sizing: border-box;
}
.animation-button {
  float: left;
  line-height: 2;
  width: 150px;
  margin: 8px 11px;
}
.animation-button-reset {
  width: 610px;
}
.btn-row {
  display: flex;
  justify-content: space-between;
}
</style>
