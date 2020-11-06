<template>
  <page id="app">
    <onekit-view onekit-class="btn-area">

      <onekit-view onekit-class="test_title">navigate组件type</onekit-view>

      <!-- <onekit-navigator url="/page/navigate/navigate?title=navigate" hover-class="navigator-hover">跳转到新页面</onekit-navigator> -->
      <!-- <onekit-navigator url="../../redirect/redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">在当前页打开</onekit-navigator> -->
      <!-- <onekit-navigator url="/page/index/index" open-type="switchTab" hover-class="other-navigator-hover">切换 Tab</onekit-navigator> -->
      <!-- <onekit-navigator target="miniProgram" open-type="navigate" app-id path version="release">打开绑定的小程序</onekit-navigator> -->

      <onekit-navigator onekit-class='test_children'
                        url="page2"
                        open-type='navigate'>
        navigate
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children'
                        url="page2"
                        open-type='redirect'>
        redirect
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children'
                        url="page2"
                        open-type='switchTab'>
        switchTab
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children'
                        url="page2"
                        open-type='reLaunch'>
        reLaunch
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children'
                        delta='1'
                        open-type='navigateBack'>
        navigateBack
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children'
                        url="page2"
                        open-type='exit'>
        exit
      </onekit-navigator>
      <onekit-view onekit-class="test_title">界面API</onekit-view>
      <onekit-view @Tap="showToast()"
                   onekit-class='test_children'>
        showToast
      </onekit-view>
      <onekit-view @Tap="showModal()"
                   onekit-class='test_children'>
        showModal
      </onekit-view>
      <onekit-view @Tap="showLoading()"
                   onekit-class='test_children'>
        showLoading
      </onekit-view>
      <onekit-view @Tap="showActionSheet()"
                   onekit-class='test_children'>
        showActionSheet
      </onekit-view>
      <onekit-view @Tap="hideToast()"
                   onekit-class='test_children'>
        hideToast
      </onekit-view>
      <onekit-view @Tap="hideLoading()"
                   onekit-class='test_children'>
        hideLoading
      </onekit-view>

      <onekit-view @Tap="enableAlertBeforeUnload()"
                   onekit-class='test_children'>
        enableAlertBeforeUnload
      </onekit-view>

      <onekit-view @Tap="disableAlertBeforeUnload()"
                   onekit-class='test_children'>
        disableAlertBeforeUnload
      </onekit-view>

    </onekit-view>
  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage';
  import wx from '../weixin2vue/wx';
  // import vhs from '../weixin2vue/wangjie_test'
  export default OnekitPage({}, {
    data: {},
    onLoad: function(options) {
      this.setData({
        title: options.title
      })
      wx.showLoading({
        title: '加载中',
      })

      setTimeout(function() {
        wx.hideLoading()
      }, 2000)

    },
    showToast() {
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 20000
      })
    },
    showModal() {
      wx.showModal({
        title: '提示',
        content: '这是一个模态弹窗',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    showLoading() {
      wx.showLoading({
        title: '加载中',
      })
    },
    showActionSheet() {
      wx.showActionSheet({
        itemList: ['A', 'B', 'C'],
        success(res) {
          console.log(res.tapIndex)
        },
        fail(res) {
          console.log(res.errMsg)
        }
      })
    },
    hideToast() {
      wx.hideToast()
    },
    hideLoading() {
      wx.hideLoading()
    },
    enableAlertBeforeUnload() {
      wx.enableAlertBeforeUnload()
    },
    disableAlertBeforeUnload() {
      wx.disableAlertBeforeUnload()
    }
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
</style>