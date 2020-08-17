<script>
const PAGE_JSON = {
  navigationBarTitleText: "云调用",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-view class="page-section">
          <onekit-view class="weui-cells__title">
            <onekit-view>云调用是云开发提供的基于云函数使用小程序开放接口的能力</onekit-view>
          </onekit-view>

          <onekit-view class="weui-cells__title">
            <onekit-view>发送模板消息需在手机上测试</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cells weui-cells_after-title">
            <onekit-view class="page-body-info">
              <onekit-view class="progress-figure">
                <onekit-image
                  v-if="theme === 'dark'"
                  src="/page/API/resources/kind/device_dark.png"
                  class="progress-icon"
                ></onekit-image>
                <onekit-image
                  v-else
                  src="/page/API/resources/kind/device.png"
                  class="progress-icon"
                ></onekit-image>
                <onekit-text
                  :class="'progress-line '+sendTemplateMessageLoading && 'pending'+' '+sendTemplateMessageResult && 'success'+' '+sendTemplateMessageError && 'fail'"
                ></onekit-text>
                <onekit-image
                  v-if="theme === 'dark'"
                  src="/page/cloud/resources/kind/scf_dark.png"
                  class="progress-icon"
                ></onekit-image>
                <onekit-image v-else src="/page/cloud/resources/kind/scf.png" class="progress-icon"></onekit-image>
                <onekit-text
                  :class="'progress-line '+sendTemplateMessageLoading && 'pending'+' '+sendTemplateMessageResult && 'success'+' '+sendTemplateMessageError && 'fail'"
                ></onekit-text>
                <onekit-image
                  v-if="theme === 'dark'"
                  src="/page/API/resources/kind/device_dark.png"
                  class="progress-icon"
                ></onekit-image>
                <onekit-image
                  v-else
                  src="/page/API/resources/kind/device.png"
                  class="progress-icon"
                ></onekit-image>
              </onekit-view>

              <onekit-view class="data-area">
                <onekit-view class="data-text" v-if="sendTemplateMessageResult">
                  <onekit-icon type="success"></onekit-icon>
                  <onekit-text>发送模板消息成功，返回微信主窗口查看</onekit-text>
                </onekit-view>
                <onekit-view class="data-text" v-elif="sendTemplateMessageError">
                  <onekit-icon type="warn" color="#F43530"></onekit-icon>
                  <onekit-text>发送失败</onekit-text>
                </onekit-view>
              </onekit-view>

              <onekit-view class="btn-area">
                <onekit-form @submit="sendTemplateMessageViaCloudFunction" report-submit>
                  <onekit-button form-type="submit" :loading="cloudLoading">发送模板消息</onekit-button>
                </onekit-form>
              </onekit-view>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cells__title"></onekit-view>
          <onekit-view class="weui-cells weui-cells_after-title">
            <onekit-view class="page-body-info">
              <onekit-view class="progress-figure">
                <onekit-image
                  v-if="theme === 'dark'"
                  src="/page/API/resources/kind/device_dark.png"
                  class="progress-icon"
                ></onekit-image>
                <onekit-image
                  v-else
                  src="/page/API/resources/kind/device.png"
                  class="progress-icon"
                ></onekit-image>
                <onekit-text
                  :class="'progress-line '+getWXACodeLoading && 'pending'+' '+getWXACodeResult && 'success'+' '+getWXACodeError && 'fail'"
                ></onekit-text>
                <onekit-image
                  v-if="theme === 'dark'"
                  src="/page/cloud/resources/kind/scf_dark.png"
                  class="progress-icon"
                ></onekit-image>
                <onekit-image v-else src="/page/cloud/resources/kind/scf.png" class="progress-icon"></onekit-image>
              </onekit-view>

              <onekit-view class="progress-figure" v-if="getWXACodeResult">
                <onekit-image :src="getWXACodeResult.result" mode="aspectFit"></onekit-image>
              </onekit-view>

              <onekit-view class="data-area">
                <onekit-view class="data-text" v-if="getWXACodeResult">
                  <onekit-icon type="success"></onekit-icon>
                  <onekit-text>获取成功</onekit-text>
                </onekit-view>
                <onekit-view class="data-text" v-elif="getWXACodeError">
                  <onekit-icon type="warn" color="#F43530"></onekit-icon>
                  <onekit-text>获取失败</onekit-text>
                </onekit-view>
              </onekit-view>

              <onekit-view class="btn-area">
                <onekit-button @tap="getWXACodeViaCloudFunction" :loading="cloudLoading">获取小程序码</onekit-button>
              </onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </page>
</template>
<script>
import OnekitPage from "../../../onekit/OnekitPage"
import wx from "../../../onekit/wx.js";
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "云函数中使用微信开放能力",
      path: "page/cloud/pages/scf-openapi/scf-openapi",
    };
  },
  data: {
    sendTemplateMessageResult: "",
    sendTemplateMessageError: false,
    getWXACodeResult: "",
    getWXACodeError: false,
    sendTemplateMessageLoading: false,
    getWXACodeLoading: false,
    theme: "light",
  },
  onLoad: function () {
    this.setData({
      theme: wx.getSystemInfoSync().theme || "light",
    });
    if (wx.onThemeChange) {
      wx.onThemeChange(({ theme }) => {
        this.setData({
          theme: theme,
        });
      });
    }
  },
  sendTemplateMessageViaCloudFunction: function (e) {
    this.setData({
      sendTemplateMessageResult: "",
      sendTemplateMessageError: false,
      sendTemplateMessageLoading: true,
    });
    wx.cloud
      .callFunction({
        name: "openapi",
        data: {
          action: "sendTemplateMessage",
          formId: e.detail.formId,
        },
      })
      .then((res) => {
        this.setData({
          sendTemplateMessageResult: res,
          sendTemplateMessageLoading: false,
        });
        console.log("[云调用] [发送模板消息] 成功: ", res);
      })
      .catch((err) => {
        this.setData({
          sendTemplateMessageError: true,
          sendTemplateMessageLoading: false,
        });
        console.error("[云调用] [发送模板消息] 失败: ", err);
      });
  },
  getWXACodeViaCloudFunction: function () {
    this.setData({
      getWXACodeResult: "",
      getWXACodeError: false,
      getWXACodeLoading: true,
    });
    wx.cloud
      .callFunction({
        name: "openapi",
        data: {
          action: "getWXACode",
        },
      })
      .then((res) => {
        this.setData({
          getWXACodeResult: res,
          getWXACodeLoading: false,
        });
        console.log("[云调用] [获取小程序码]] 成功: ", res);
      })
      .catch((err) => {
        this.setData({
          getWXACodeError: true,
          getWXACodeLoading: false,
        });
        console.error("[云调用] [获取小程序码] 失败: ", err);
      });
  },
  queryServerDataViaClient: function () {
    const db = wx.cloud.database();
    this.setData({
      clientLoading: true,
      serverDataClient: "",
      serverDataClientError: false,
    });
    db.collection("perm4")
      .where({
        _openid: "server",
      })
      .get({
        success: (res) => {
          const resFirstData = (res.data && res.data[0]) || {};
          this.setData({
            serverDataClient: resFirstData.data,
          });
          console.log("[数据库] [查询记录] 成功: ", res);
        },
        fail: (err) => {
          this.setData({
            serverDataClientError: true,
          });
          console.error("[数据库] [查询记录] 失败：", err);
        },
        complete: () => {
          this.setData({
            clientLoading: false,
          });
        },
      });
  },
  queryServerDataViaCloudFunction: function () {
    this.setData({
      cloudLoading: true,
      serverDataCloud: "",
      serverDataCloudError: false,
    });
    wx.cloud.callFunction({
      name: "getServerDataDemo",
      data: {},
      success: (res) => {
        console.log("[云函数] [getServerDataDemo] res: ", res.result);
        const resFirstData = (res.result.data && res.result.data[0]) || {};
        this.setData({
          serverDataCloud: resFirstData.data,
        });
      },
      fail: (err) => {
        this.setData({
          serverDataCloudError: true,
        });
        console.error("[云函数] [getServerDataDemo] 调用失败", err);
      },
      complete: () => {
        this.setData({
          cloudLoading: false,
        });
      },
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

.page-body-info {
  padding-bottom: 30rpx;
}
.progress-figure {
  font-size: 32rpx;
}
.progress-icon {
  width: 60rpx;
  height: 60rpx;
}
.progress-line {
  border-top: 2px solid #2f2f2f;
  padding: 0 60rpx;
  margin: 0 20rpx;
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
  padding: 0 100rpx;
}
.data-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30rpx;
  height: 30rpx;
}
.data-area .data-text {
  display: flex;
  align-items: center;
}
.data-area .data-text icon {
  margin-right: 10rpx;
}
.btn-area {
  margin-top: 30rpx;
}
</style>
