<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"云函数中使用微信开放能力"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">
            <onekit-view>云调用是云开发提供的基于云函数使用小程序开放接口的能力</onekit-view>
          </onekit-view>

          <onekit-view onekit-class="weui-cells__title">
            <onekit-view>发送模板消息需在手机上测试</onekit-view>
          </onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="page-body-info">
              <onekit-view onekit-class="progress-figure">
                <onekit-image v-if="theme === 'dark'"
                              src="/page/API/resources/kind/device_dark.png"
                              onekit-class="progress-icon"></onekit-image>
                <onekit-image v-else
                              src="/page/API/resources/kind/device.png"
                              onekit-class="progress-icon"></onekit-image>
                <onekit-text :onekit-class="'progress-line '+(sendTemplateMessageLoading && 'pending')+' '+(sendTemplateMessageResult && 'success')+' '+(sendTemplateMessageError && 'fail')"></onekit-text>
                <onekit-image v-if="theme === 'dark'"
                              src="/page/cloud/resources/kind/scf_dark.png"
                              onekit-class="progress-icon"></onekit-image>
                <onekit-image v-else
                              src="/page/cloud/resources/kind/scf.png"
                              onekit-class="progress-icon"></onekit-image>
                <onekit-text :onekit-class="'progress-line '+(sendTemplateMessageLoading && 'pending')+' '+(sendTemplateMessageResult && 'success')+' '+(sendTemplateMessageError && 'fail')"></onekit-text>
                <onekit-image v-if="theme === 'dark'"
                              src="/page/API/resources/kind/device_dark.png"
                              onekit-class="progress-icon"></onekit-image>
                <onekit-image v-else
                              src="/page/API/resources/kind/device.png"
                              onekit-class="progress-icon"></onekit-image>
              </onekit-view>

              <onekit-view onekit-class="data-area">
                <onekit-view onekit-class="data-text"
                             v-if="sendTemplateMessageResult">
                  <onekit-icon type="success"></onekit-icon>
                  <onekit-text>发送模板消息成功，返回微信主窗口查看</onekit-text>
                </onekit-view>
                <onekit-view onekit-class="data-text"
                             v-elif="sendTemplateMessageError">
                  <onekit-icon type="warn"
                               color="#F43530"></onekit-icon>
                  <onekit-text>发送失败</onekit-text>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="btn-area">
                <onekit-form @submit="sendTemplateMessageViaCloudFunction"
                             report-submit>
                  <onekit-button form-type="submit"
                                 :loading="cloudLoading">发送模板消息</onekit-button>
                </onekit-form>
              </onekit-view>
            </onekit-view>
          </onekit-view>

          <onekit-view onekit-class="weui-cells__title"></onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="page-body-info">
              <onekit-view onekit-class="progress-figure">
                <onekit-image v-if="theme === 'dark'"
                              src="/page/API/resources/kind/device_dark.png"
                              onekit-class="progress-icon"></onekit-image>
                <onekit-image v-else
                              src="/page/API/resources/kind/device.png"
                              onekit-class="progress-icon"></onekit-image>
                <onekit-text :onekit-class="'progress-line '+(getWXACodeLoading && 'pending')+' '+(getWXACodeResult && 'success')+' '+(getWXACodeError && 'fail')"></onekit-text>
                <onekit-image v-if="theme === 'dark'"
                              src="/page/cloud/resources/kind/scf_dark.png"
                              onekit-class="progress-icon"></onekit-image>
                <onekit-image v-else
                              src="/page/cloud/resources/kind/scf.png"
                              onekit-class="progress-icon"></onekit-image>
              </onekit-view>

              <onekit-view onekit-class="progress-figure"
                           v-if="getWXACodeResult">
                <onekit-image :src="getWXACodeResult.result"
                              mode="aspectFit"></onekit-image>
              </onekit-view>

              <onekit-view onekit-class="data-area">
                <onekit-view onekit-class="data-text"
                             v-if="getWXACodeResult">
                  <onekit-icon type="success"></onekit-icon>
                  <onekit-text>获取成功</onekit-text>
                </onekit-view>
                <onekit-view onekit-class="data-text"
                             v-elif="getWXACodeError">
                  <onekit-icon type="warn"
                               color="#F43530"></onekit-icon>
                  <onekit-text>获取失败</onekit-text>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="btn-area">
                <onekit-button @Tap="getWXACodeViaCloudFunction"
                               :loading="cloudLoading">获取小程序码</onekit-button>
              </onekit-view>
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
  "navigationBarTitleText": "云调用",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '云函数中使用微信开放能力',
      path: 'page/cloud/pages/scf-openapi/scf-openapi'
    }
  },
  data: {
    sendTemplateMessageResult: '',
    sendTemplateMessageError: false,
    getWXACodeResult: '',
    getWXACodeError: false,
    sendTemplateMessageLoading: false,
    getWXACodeLoading: false,
    theme: 'light'
  },
  onLoad: function () {
    this.setData({
      theme: (wx.getSystemInfoSync().theme || 'light')
    })
    if (wx.onThemeChange) {
      wx.onThemeChange(({ theme }) => {
        this.setData({
          theme
        })
      });
    }
  },
  sendTemplateMessageViaCloudFunction: function (e) {
    this.setData({
      sendTemplateMessageResult: '',
      sendTemplateMessageError: false,
      sendTemplateMessageLoading: true
    })
    wx.cloud.callFunction({
      name: 'openapi',
      data: {
        action: 'sendTemplateMessage',
        formId: e.detail.formId
      }
    }).then((res) => {
      this.setData({
        sendTemplateMessageResult: res,
        sendTemplateMessageLoading: false
      })
      console.log('[云调用] [发送模板消息] 成功: ', res)
    }).catch((err) => {
      this.setData({
        sendTemplateMessageError: true,
        sendTemplateMessageLoading: false
      })
      console.error('[云调用] [发送模板消息] 失败: ', err)
    })
  },
  getWXACodeViaCloudFunction: function () {
    this.setData({
      getWXACodeResult: '',
      getWXACodeError: false,
      getWXACodeLoading: true
    })
    wx.cloud.callFunction({
      name: 'openapi',
      data: {
        action: 'getWXACode'
      }
    }).then((res) => {
      this.setData({
        getWXACodeResult: res,
        getWXACodeLoading: false
      })
      console.log('[云调用] [获取小程序码]] 成功: ', res)
    }).catch((err) => {
      this.setData({
        getWXACodeError: true,
        getWXACodeLoading: false
      })
      console.error('[云调用] [获取小程序码] 失败: ', err)
    })
  },
  queryServerDataViaClient: function () {
    const db = wx.cloud.database()
    this.setData({
      clientLoading: true,
      serverDataClient: '',
      serverDataClientError: false
    })
    db.collection('perm4').where({
      _openid: 'server'
    }).get({
      success: (res) => {
        const resFirstData = (((res.data && res.data[0])) || {})
        this.setData({
          serverDataClient: resFirstData.data
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: (err) => {
        this.setData({
          serverDataClientError: true
        })
        console.error('[数据库] [查询记录] 失败：', err)
      },
      complete: () => {
        this.setData({
          clientLoading: false
        })
      }
    })
  },
  queryServerDataViaCloudFunction: function () {
    this.setData({
      cloudLoading: true,
      serverDataCloud: '',
      serverDataCloudError: false
    })
    wx.cloud.callFunction({
      name: 'getServerDataDemo',
      data: {},
      success: (res) => {
        console.log('[云函数] [getServerDataDemo] res: ', res.result)
        const resFirstData = (((res.result.data && res.result.data[0])) || {})
        this.setData({
          serverDataCloud: resFirstData.data
        })
      },
      fail: (err) => {
        this.setData({
          serverDataCloudError: true
        })
        console.error('[云函数] [getServerDataDemo] 调用失败', err)
      },
      complete: () => {
        this.setData({
          cloudLoading: false
        })
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.page-body-info {
  padding-bottom: calc(var(--screen-width) * 30 / 750);
}
.progress-figure {
  font-size: calc(var(--screen-width) * 32 / 750);
}
.progress-icon {
  width: calc(var(--screen-width) * 60 / 750);
  height: calc(var(--screen-width) * 60 / 750);
}
.progress-line {
  border-top: 2px solid #2f2f2f;
  padding: 0 calc(var(--screen-width) * 60 / 750);
  margin: 0 calc(var(--screen-width) * 20 / 750);
}
.progress-line.pending {
  border-top-style: dashed;
}
.progress-line.success {
  border-top-color: #0bb20c;
}
.progress-line.fail {
  border-top-color: #e64340;
}
.progress-line.lg {
  padding: 0 calc(var(--screen-width) * 100 / 750);
}
.data-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(var(--screen-width) * 30 / 750);
  height: calc(var(--screen-width) * 30 / 750);
}
.data-area .data-text {
  display: flex;
  align-items: center;
}
.data-area .data-text icon {
  margin-right: calc(var(--screen-width) * 10 / 750);
}
.btn-area {
  margin-top: calc(var(--screen-width) * 30 / 750);
}
</style>
