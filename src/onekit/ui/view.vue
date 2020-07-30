<template>
  <div @click="ui_click"><slot/></div>
</template>
<script>
  import ui from "./ui.js"
  export{
    mixins:[ui],
  }
</script>
