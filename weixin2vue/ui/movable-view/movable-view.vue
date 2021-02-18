<template>
  <div
       :class="['onekit-movable-view',onekitClass]"
       :style="onekitStyle"
       :id="onekitId"
       class="onekit-movable-view-own"
       @touchmove="moving">
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-movable-view",
    mixins: [weixin_behavior, onekit_behavior],
    props: {


    },
    methods: {
      moving() {
        console.log('ok')
      }
    }
  }
</script>

<style>
  .onekit-movable-view-own {
    position: absolute;
  }
</style>