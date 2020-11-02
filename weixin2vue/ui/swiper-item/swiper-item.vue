<template>
  <div
       :class="['onekit-swiper-item',onekitClass]"
       :style="[onekitStyle,itemStyle]"
       :id="onekitId"
       ref="item_dom">
    <slot></slot>
  </div>
</template>

<script>
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-swiper-item",
    mixins: [onekit_behavior],
    data() {
      return {
        itemStyle: ''
      }
    },
    props: {
      'item-id': {
        type: String,
        default: '',
        required: false
      },
      'skip-hidden-item-layout': {
        type: Boolean,
        default: false,
        required: false
      },
      'color': {
        type: String,
        default: 'pink',
        required: false
      }
    },
    async mounted() {

    },
    methods: {

    }
  }
</script>

<style scoped>
  .onekit-swiper-item {
    display: flex;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    background: deeppink;
    justify-content: center;
    align-items: center;
  }
</style>