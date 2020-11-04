<template>
  <label
         :class="['onekit-lable',onekitClass]"
         :style="onekitStyle"
         :id="onekitId">
    <slot></slot>
  </label>
</template>

<script>
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-lable",
    mixins: [onekit_behavior],
    props: {


    },
    methods: {

    }
  }
</script>

<style>
</style>