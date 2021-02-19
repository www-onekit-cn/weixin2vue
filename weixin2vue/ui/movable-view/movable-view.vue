<template>
  <div
       :class="['onekit-movable-view',onekitClass]"
       :style="onekitStyle"
       :id="onekitId"
       class="onekit-movable-view-own">
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-movable-view",
    mixins: [weixin_behavior, onekit_behavior],
    data() {
      return {
        defaults: {
          edge: true
        },
        params: {},
        options: {},
        distanceX: 0,
        distanceY: 0,
        win: window,
        winWith: 0,
        winHeight: 0
        /*options || {}*/
      }
    },
    props: {
      'direction': {
        type: String,
        default: 'none'
      },
      'intertia': Boolean,
      'out-of-bounds': Boolean,
      'x': Number,
      'y': Number,
      'damping': {
        type: Number,
        default: 20
      },
      'friction': {
        type: Number,
        default: 2
      },
      'disabled': Boolean,
      'scale': Boolean,
      'scale-min': {
        type: Number,
        default: 0.5
      },
      'scale-max': {
        type: Number,
        default: 10
      },
      'scale-value': {
        type: Number,
        default: 1
      },
      'animation': {
        type: Boolean,
        default: true
      },

    },
    methods: {},
    created() {

      this.winWith = window.innerWidth
      this.winHeight = window.innerHeight

      for (const key in this.defaults) {
        if (typeof this.options[key] !== 'undefined') {
          this.params[key] = this.options[key]
        } else {
          this.params[key] = this.defaults[key]
        }
      }
    }
  }
</script>

<style>
  /* .onekit-movable-view-own {
    position: absolute;
  } */
</style>