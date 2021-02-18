<template>
  <page id="app">
    <page id="app">
      <onekit-match-media :min-width="375" :max-width="600">iPhone X</onekit-match-media>
      <onekit-match-media :min-width="320" :max-width="600">iPhone 5</onekit-match-media>
      <onekit-match-media :min-width="625" :max-width="800">iPad</onekit-match-media>
    </page>
  </page>
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

</style>