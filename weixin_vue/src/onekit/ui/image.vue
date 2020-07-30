<template>
  <div style="display:inline-block;">
    <img alt="" :src="src" style="width:100%;height:100%;"/>
  </div>
</template>
<script>
  import ui from "./ui.js"
  export {
    mixins: [ui],
    props: {src: String}
  }
</script>
<style>

</style>
