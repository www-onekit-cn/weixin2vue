<template>
  <div
       :class="['onekit-radio-group',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import { eventBus } from '../../eventBus'
  export default {
    name: "onekit-radio-group",
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      'name': String
    },
    mounted() {
      eventBus.$on('itemclick', data => {
        this.$emit('change', data)
        eventBus.$emit('radio-cancel', data.detail.value)
        eventBus.$emit('onekit-radio-submit', data.detail.value)
      })
    }
  }
</script>

<style>
</style>