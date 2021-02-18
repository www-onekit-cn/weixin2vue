<template>
  <div
       :class="['onekit-movable-area',onekitClass]"
       :style="onekitStyle"
       :id="onekitId"
       class="onekit-movable-area-own">
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-movable-area",
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      'scale-area': Boolean
    },
    methods: {}
  }
</script>

<style>
  .onekit-movable-area-own {
    width: 10px;
    height: 10px;
  }
</style>