<template>
  <div
       :class="['onekit-rich-text',onekitClass]"
       :style="onekitStyle"
       :id="onekitId"
       v-html="space">
    <slot></slot>
  </div>
</template>

<script>
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-rich-text",
    mixins: [onekit_behavior],
    props: {
      'nodes': {
        type: [String, Array, Object],
        default: () => {
          return []
        },
        required: false
      },
      'space': {
        type: String,
        default: '',
        required: false,
      }

    },
    methods: {

    }
  }
</script>

<style>
</style>