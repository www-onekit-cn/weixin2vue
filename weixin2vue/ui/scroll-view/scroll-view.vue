/** BUG待处理 2021 2 2*/
<template>
  <div :class="['onekit-scroll-view',onekitClass]" :style="{onekitStyle}" :id="onekitId" @touchstart="scroll">
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-scroll-view",
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      'scroll-x': {
        type: Boolean,
        default: false
      },
      'scroll-y': {
        type: Boolean,
        default: false
      },
      'scroll-with-animation': {
        type: Boolean,
        default: false
      },
      'upper-threshold': {
        type: Number,
        default: 50
      },
      'lower-threshold': {
        type: Number,
        default: 50
      },
      'scroll-top': Number,
      'scroll-left': Number,
      'scroll-into-view': String,
    },
    mounted() {},
    methods: {
      scroll() {
        this.$emit('scroll')
      }
    }
  }
</script>

<style>

</style>
