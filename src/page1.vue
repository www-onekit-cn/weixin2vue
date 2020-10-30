<template>
  <page id="app">
    <onekit-text user-select>{{text}}</onekit-text>
    <onekit-view>-</onekit-view>
    <onekit-text decode>{{text}}</onekit-text>
  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage'
  export default OnekitPage({}, {
    data: {
      text: '王野未 &gt;'
    }
  })
</script>

<style>

</style>