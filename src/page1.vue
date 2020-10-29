<template>
  <page id="app">
    <onekit-progress
                     percent="40"
                     border-radius="10"
                     font-size="13"
                     stroke-width="20"
                     backgroudColor="pink"
                     activeColor="black"
                     color="deeppink"
                     duration="60"
                     active
                     show-info
                     hasCancelButton
                     :bindactiveend="fn" />
    <div>——</div>
    <onekit-progress percent="60" />

  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage'
  export default OnekitPage({}, {
    fn(url) {
      console.log(`函数进来了`)
    }
  })
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>