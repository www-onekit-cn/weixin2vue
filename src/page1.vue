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
      console.log(wx.getLaunchOptionsSync())
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