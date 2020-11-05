<template>
  <page id="app">

    <onekit-view @Tap="navigateTo_click">wx.navigateTo</onekit-view>
    <onekit-view @Tap="redirectTo_click">wx.redirectTo</onekit-view>

  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage';
  import wx from '../weixin2vue/wx';
  export default OnekitPage({}, {
    data: {},
    navigateTo_click: function () {
      console.log('走')
      wx.navigateTo({
        url: '/page2?id=1',
        success: (res) => { console.log(res) },
        fail: console.log
      });
    },
    redirectTo_click: function () {
      console.log('重定向 ')
      wx.redirectTo({
        url: '/page2',
        success: (res) => { console.log(res) },
        fail: console.log
      });
    },

  });
</script>

<style>

</style>