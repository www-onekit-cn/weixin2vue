<template>
  <page id="app">
    <onekit-progress
                     percent="40"
                     :show-info="true"
                     border-radius="10"
                     font-size="13"
                     stroke-width="20"
                     backgroudColor="pink"
                     activeColor="black" />
    <div>——</div>
    <onekit-progress percent="60" />

  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage'
  export default OnekitPage({}, {

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