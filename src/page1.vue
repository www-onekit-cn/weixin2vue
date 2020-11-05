<template>
  <page id="app">
    <onekit-view @tap="test_click">click</onekit-view>

  </page>
</template>

<script>
  import { OnekitPage } from '../weixin2vue/OnekitPage';
  import { wx } from '../weixin2vue/wx';

  export default OnekitPage({
    data: {},
    test_click: function () {
      wx.redirectTo({
        url: './page2.vue',
        success: (res) => { console.log(res) },
        fail: console.log
      });
    }
  });
</script>

<style>

</style>