<template>
  <page id="app">
    <h2>hello,world page 3</h2>
    <onekit-view @Tap="navigateBack_click">wx.navigateBack</onekit-view>
    <onekit-view @Tap="reLaunch_click">wx.reLaunch</onekit-view>

  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage';
  import wx from '../weixin2vue/wx'
  export default OnekitPage({}, {
    onLoad() {
      console.log(this.$route)
    },
    navigateBack_click: function () {
      console.log('返回上一级')
      wx.navigateBack({
        delta: 1
      });
    },
    reLaunch_click: function () {
      console.log('re...')
      wx.reLaunch({
        url: '/page1',
        success: (res) => { console.log(res) },
        fail: console.log
      });
    },
  })
</script>

<style>

</style>