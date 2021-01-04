<template>
  <div :class="['onekit-picker',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    {{ datamode }}
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-picker",
    mixins: [weixin_behavior, onekit_behavior],
    data() {
      return {
        datamode: this.mode
      }
    },
    props: {
      'hander-text': {
        type: String,
      },
      'mode': {
        type: String,
        default: 'selector'
      },
      'disabled': {
        type: Boolean,
        default: false
      },
      'bindcancel': {
        type: Function
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>