<template>
  <canvas
          :class="['onekit-canvas',onekitClass]"
          :style="onekitStyle"
          :id="`${canvasId ? canvasId : onekitId}`">
  </canvas>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-canvas",
    mixins: [weixin_behavior, onekit_behavior],
    data() {
      return { id: '' }
    },
    props: {
      "type": {
        type: String,
        defaul: ""
      },
      "canvas-id": {
        type: String,
        defaul: ""
      },
      "disable-scroll	": {
        type: Boolean,
        defaul: false
      },


    },
    methods: {

    }
  }
</script>

<style>

</style>