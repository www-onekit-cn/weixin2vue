<template>
  <div
       :class="['onekit-match-media',onekitClass]"
       :style="onekitStyle"
       :id="onekitId"
       v-show="show">
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-match-media",
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      'min-width': Number,
      'max-width': Number,
      'width': Number,
      'min-height': Number,
      'max-height': Number,
      'orientation': Number
    },
    methods: {

    },
    created() {
      console.log(this.minWidth)
      console.log(window.innerWidth)
    },
    computed: {
      show() {
        let isShow = false
        if (this.minWidth <= window.innerWidth && this.maxWidth >= window.innerWidth) isShow = true
        return isShow
      }
    }
  }
</script>

<style>
</style>