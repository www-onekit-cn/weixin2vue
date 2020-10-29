<template>
  <page id="app">
    <onekit-rich-text :space='space'></onekit-rich-text>
  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage'
  export default OnekitPage({}, {
    data: {
      space: `
      <h1 style='color:red'>hello,world</h1>
      <span style='color:blue'>王野未</span>
      `
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