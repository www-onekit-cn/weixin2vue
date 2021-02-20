<template>
  <onekit-page id='app'>

    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"scroll-view"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">
            <onekit-text>Vertical Scroll\n纵向滚动</onekit-text>
          </onekit-view>
          <onekit-view onekit-class="page-section-spacing">
            <onekit-scroll-view scroll-y="true"
                                onekit-style="height: 150px;"
                                @Scrolltoupper="upper"
                                @Scrolltolower="lower"
                                @Scroll="scroll"
                                :scroll-into-view="toView"
                                :scroll-top="scrollTop">
              <onekit-view onekit-id="demo1"
                           onekit-class="scroll-view-item demo-text-1"></onekit-view>
              <onekit-view onekit-id="demo2"
                           onekit-class="scroll-view-item demo-text-2"></onekit-view>
              <onekit-view onekit-id="demo3"
                           onekit-class="scroll-view-item demo-text-3"></onekit-view>
            </onekit-scroll-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">
            <onekit-text>Horizontal Scroll\n横向滚动</onekit-text>
          </onekit-view>
          <onekit-view onekit-class="page-section-spacing">
            <onekit-scroll-view onekit-class="scroll-view_H"
                                scroll-x="true"
                                @Scroll="scroll"
                                onekit-style="width: 100%">
              <onekit-view onekit-id="demo1"
                           onekit-class="scroll-view-item_H demo-text-1"></onekit-view>
              <onekit-view onekit-id="demo2"
                           onekit-class="scroll-view-item_H demo-text-2"></onekit-view>
              <onekit-view onekit-id="demo3"
                           onekit-class="scroll-view-item_H demo-text-3"></onekit-view>
            </onekit-scroll-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">
            <onekit-text>自定义下拉刷新\n自定义：</onekit-text>
          </onekit-view>
          <onekit-view onekit-class="page-section-spacing">
            <onekit-scroll-view scroll-y
                                onekit-style="width: 100%; height: 400px;"
                                :refresher-enabled="true"
                                :refresher-threshold="80"
                                refresher-default-style="none"
                                refresher-background="lightgreen"
                                @Refresherpulling="refresh$onPulling">
              <onekit-view slot="refresher"
                           onekit-class="refresh-container"
                           onekit-style="display: block; width: 100%; height: 80px; background: #ECBDF0; display: flex; align-items: center;">
                <onekit-view onekit-class="view1"
                             onekit-style="position: absolute; color: white; text-align: center; width: 100%;">
                  下拉刷新
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-id="demo1"
                           onekit-class="scroll-view-item_H demo-text-1"></onekit-view>
              <onekit-view onekit-id="demo2"
                           onekit-class="scroll-view-item_H demo-text-2"></onekit-view>
              <onekit-view onekit-id="demo3"
                           onekit-class="scroll-view-item_H demo-text-3"></onekit-view>
            </onekit-scroll-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">
            <onekit-text>默认：</onekit-text>
          </onekit-view>
          <onekit-view onekit-class="page-section-spacing">
            <onekit-scroll-view scroll-y
                                onekit-style="width: 100%; height: 400px;"
                                :refresher-enabled="true"
                                :refresher-threshold="100"
                                refresher-default-style="white"
                                refresher-background="lightgreen"
                                :refresher-triggered="triggered"
                                @Refresherpulling="onPulling"
                                @Refresherrefresh="onRefresh"
                                @Refresherrestore="onRestore"
                                @Refresherabort="onAbort">
              <onekit-view onekit-id="demo1"
                           onekit-class="scroll-view-item_H demo-text-1"></onekit-view>
              <onekit-view onekit-id="demo2"
                           onekit-class="scroll-view-item_H demo-text-2"></onekit-view>
              <onekit-view onekit-id="demo3"
                           onekit-class="scroll-view-item_H demo-text-3"></onekit-view>
            </onekit-scroll-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">
            <onekit-text>滚动驱动动画</onekit-text>
          </onekit-view>
          <onekit-view onekit-class="page-section-spacing">
            <onekit-scroll-view onekit-id="scroll-view_D"
                                scroll-y="true"
                                onekit-style="height: 150px;"
                                @Scrolltoupper="upper"
                                @Scrolltolower="lower"
                                @Scroll="scroll"
                                :scroll-into-view="toView"
                                :scroll-top="scrollTop">
              <onekit-view onekit-class="scroll-view-item_H demo-text-1"
                           onekit-id="scroll-sample-object1"></onekit-view>
              <onekit-view onekit-class="scroll-view-item_H demo-text-2"
                           onekit-id="scroll-sample-object2"></onekit-view>
              <onekit-view onekit-class="scroll-view-item_H demo-text-3"
                           onekit-id="scroll-sample-object3"></onekit-view>
            </onekit-scroll-view>
          </onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>

  </onekit-page>
</template>
<script>
/* eslint-disable no-unused-vars */
const refresh =

  module.exports = {
    onPulling: function (evt, instance) {
      var p = Math.min(evt.detail.dy / 80, 1)
      console.log(p)
      var view = instance.selectComponent('.refresh-container')
      view.setStyle({
        opacity: p,
        transform: "scale(" + p + ")"
      })
    }
  }

  ;
import Vue from 'vue'
import foot from '../../../../page/common/foot.foot'
Vue.component('onekit-template-foot', foot)
import head from '../../../../page/common/head.head'
Vue.component('onekit-template-head', head)
const ONEKIT_JSON = {
  "pageOrientation": "auto",
  "navigationBarTitleText": "scroll-view",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let //let global = {};
const order = [
  'demo1',
  'demo2',
  'demo3'
]
export default OnekitPage(ONEKIT_JSON, {
  refresh$onPulling (e) { refresh.onPulling(e, this); },
  onLoad: function () {
    this.animate('#scroll-sample-object1', [
      {
        borderRadius: '0',
        offset: 0
      },
      {
        borderRadius: '25%',
        offset: 0.5
      },
      {
        borderRadius: '50%',
        offset: 1
      }
    ], 2000, {
      scrollSource: '#scroll-view_D',
      timeRange: 2000,
      startScrollOffset: 0,
      endScrollOffset: 150
    })
    this.animate('#scroll-sample-object2', [
      {
        opacity: 1,
        offset: 0
      },
      {
        opacity: 0.5,
        offset: 0.5
      },
      {
        opacity: 0.3,
        offset: 1
      }
    ], 2000, {
      scrollSource: '#scroll-view_D',
      timeRange: 2000,
      startScrollOffset: 150,
      endScrollOffset: 300
    })
    this.animate('#scroll-sample-object3', [
      {
        background: "white",
        offset: 0
      },
      {
        background: "yellow",
        offset: 1
      }
    ], 2000, {
      scrollSource: '#scroll-view_D',
      timeRange: 2000,
      startScrollOffset: 300,
      endScrollOffset: 400
    })
  },
  onPulling: function (e) {
    console.log('onPulling:', e)
  },
  onRefresh: function () {
    if (this._freshing) return
    this._freshing = true
    setTimeout(() => {
      this.setData({
        triggered: false
      })
      this._freshing = false
    }, 3000)
  },
  onRestore: function (e) {
    console.log('onRestore:', e)
  },
  onAbort: function (e) {
    console.log('onAbort', e)
  },
  onShareAppMessage: function () {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },
  data: {
    toView: 'green',
    triggered: false
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  scrollToTop: function () {
    this.setAction({
      scrollTop: 0
    })
  },
  tap: function () {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] == this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: ((i + 1)) * 200
        });
        break;
      }
    }
  },
  tapMove: function () {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-section-spacing {
  margin-top: 30px;
}
.scroll-view_H {
  white-space: nowrap;
}
.scroll-view-item {
  height: 150px;
}
.scroll-view-item_H {
  display: inline-block;
  width: 100%;
  height: 150px;
}
.demo-text-1 {
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #1aad19;
  color: #ffffff;
  font-size: 18px;
}
.demo-text-1:before {
  content: "A";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-2 {
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #2782d7;
  color: #ffffff;
  font-size: 18px;
}
.demo-text-2:before {
  content: "B";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-3 {
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  color: #353535;
  font-size: 18px;
}
.demo-text-3:before {
  content: "C";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
