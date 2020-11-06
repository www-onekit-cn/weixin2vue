<template>
  <page id="app">
    <onekit-view onekit-class="btn-area">

      <onekit-view onekit-class="test_title">navigate组件type</onekit-view>

      <!-- <onekit-navigator url="/page/navigate/navigate?title=navigate" hover-class="navigator-hover">跳转到新页面</onekit-navigator> -->
      <!-- <onekit-navigator url="../../redirect/redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">在当前页打开</onekit-navigator> -->
      <!-- <onekit-navigator url="/page/index/index" open-type="switchTab" hover-class="other-navigator-hover">切换 Tab</onekit-navigator> -->
      <!-- <onekit-navigator target="miniProgram" open-type="navigate" app-id path version="release">打开绑定的小程序</onekit-navigator> -->

      <onekit-navigator onekit-class='test_children'
                        url="/page2"
                        open-type='navigate'>
        navigate
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children'
                        url="/page2"
                        open-type='redirect'>
        redirect
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children'
                        url="/page2"
                        open-type='switchTab'>
        switchTab
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children'
                        url="/page2"
                        open-type='reLaunch'>
        reLaunch
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children'
                        delta='1'
                        open-type='navigateBack'>
        navigateBack
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children'
                        url="/page2"
                        open-type='exit'>
        exit
      </onekit-navigator>

    </onekit-view>
  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage';
  // import wx from '../weixin2vue/wx';
  export default OnekitPage({}, {
    data: {},
    onLoad: function(options) {
      this.setData({
        title: options.title
      })
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
</style>