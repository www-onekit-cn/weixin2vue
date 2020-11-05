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
    navigateTo_click: function() {
      console.log('走')
      wx.navigateTo({
        url: '/page2?id=1',
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log("acceptDataFromOpenedPage", data)
          },
          someEvent: function(data) {
            console.log("someEvent", data)
          }
        },
        success: (res) => {
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
        },
        fail: console.log
      });
    },
    redirectTo_click: function() {
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