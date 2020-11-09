<template>
  <page id="app">
    <!-- <onekit-view class="clearfix" style="margin:20px;"></onekit-view> -->
    <onekit-view @Tap="toAd">click</onekit-view>
  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage';
  import wx from '../weixin2vue/wx';
  // import vhs from '../weixin2vue/wangjie_test'
  export default OnekitPage({}, {
    data: {},
    toAd() {
      const updateManager = wx.getUpdateManager()

      updateManager.onCheckForUpdate(function(res) {
        // 请求完新版本信息的回调
        console.log(res.hasUpdate)
      })

      updateManager.onUpdateReady(function() {
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
          }
        })
      })

      updateManager.onUpdateFailed(function() {
        // 新版本下载失败
      })
    },
  });
</script>

<style>
  .navigator-hover {
    color: blue;
  }

  .other-navigator-hover {
    color: red;
  }

  .test_title {
    color: aqua;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    margin: 10px 0;
    text-shadow: 0 1px 1px black;
  }

  .test_children {
    display: block;
    text-align: center;
    /* width: 100%; */
    border: 1px solid black;
    margin-top: 20px;
    padding: 20px;
    font-weight: bold;
    font-size: 20px;
  }

  .test_children:last-child {
    margin-bottom: 100px;
  }

  .success {
    background: darkseagreen;
  }

  .wrong {
    background: palegoldenrod;
  }

  .err {
    background: tomato;
  }
</style>