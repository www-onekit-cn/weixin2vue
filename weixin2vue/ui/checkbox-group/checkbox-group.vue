<template>
  <div
       :class="['onekit-checkbox-group',onekitClass]"
       :style="onekitStyle"
       :id="onekitId"
       class="main">
    <slot></slot>
  </div>
</template>

<script>
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-checkbox-group",
    mixins: [onekit_behavior],
    props: {


    },
    methods: {

    }
  }
</script>

<style scoped>

</style>