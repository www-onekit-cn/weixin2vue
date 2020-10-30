<template>
  <page id="app">
    <onekit-text space="emsp">{{text}}</onekit-text>
    <onekit-view>-</onekit-view>
    <onekit-text decode space="nbsp">{{text}}</onekit-text>
  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage'
  export default OnekitPage({}, {

    data: {
      text: '我&nbsp;你 她'
    }

  })
</script>

<style>

</style>