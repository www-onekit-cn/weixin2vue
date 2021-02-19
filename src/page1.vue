<template>
  <onekit-page id="app">
    <onekit-movable-area class="moving">
      <onekit-movable-view class="movitem">text</onekit-movable-view>
    </onekit-movable-area>
  </onekit-page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage'
  export default OnekitPage({}, {
    onLoad() {
      // console.log('ok')
    }
  })
</script>

<style>
  .moving {
    width: 200px;
    height: 200px;
    background: #ccc;
  }

  .movitem {
    width: 40px;
    height: 40px;
    background: green;
  }
</style>
