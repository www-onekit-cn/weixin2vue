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
    computed: {
      show() {
        let isShow = false

        let isWidth = true
        if (this.minWidth && this.minWidth > window.innerWidth) isWidth = false
        if (this.maxWidth && this.maxWidth < window.innerWidth) isWidth = false
        if (this.minWidth && this.maxWidth) {
          if (!this.minWidth <= window.innerWidth && !this.maxWidth >= window.innerWidth) isWidth = false
        }
        if (this.width && this.width !== window.innerWidth) isHeight = false

        let isHeight = true

        if (this.minHeight && this.minHeight > window.innerHeight) isHeight = false
        if (this.maxHeight && this.maxHeight < window.innerHeight) isHeight = false
        if (this.minWidth && this.maxWidth) {
          if (!this.minHeight <= window.innerHeight && !this.maxHeight >= window.innerHeight) isHeight = false
        }
        if (this.width && this.width !== window.innerWidth) isHeight = false

        let isOrientation = true

        if (this.orientation) {
          if (this.orientation == 'landscape') {
            if (window.orientation == 0 || window.orientation == 180) {
              isOrientation = true
            } else {
              isOrientation = false
            }
          }
          if (this.orientation == 'portrait') {
            if (window.orientation == 90 || window.orientation == -90) {
              isOrientation = true
            } else {
              isOrientation = false
            }
          }
        }


        if (isOrientation && isHeight && isWidth) isShow = true
        return isShow
      }
    }
  }
</script>

<style>
</style>