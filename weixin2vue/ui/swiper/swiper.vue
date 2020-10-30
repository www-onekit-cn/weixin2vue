<template>
  <div
       :class="['onekit-swiper',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <slot></slot>
  </div>
</template>

<script>
  // import { color } from 'html2canvas/dist/types/css/types/color'
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-swiper",
    mixins: [onekit_behavior],
    props: {
      'indicator-dots': {
        type: Boolean,
        default: false,
        required: false
      },
      'indicator-color': {
        type: String,
        default: 'rgba(0, 0, 0, .3)',
        required: false
      },
      'indicator-active-color': {
        type: String,
        default: '#000000',
        required: false
      },
      'autoplay': {
        type: Boolean,
        default: false,
        required: false
      },
      'current': {
        type: Number,
        default: 0,
        required: false
      },
      'interval': {
        type: Number,
        default: 5000,
        required: false
      },
      'duration': {
        type: Number,
        default: 500,
        required: false
      },
      'circular': {
        type: Boolean,
        default: false,
        required: false
      },
      'vertical': {
        type: Boolean,
        default: false,
        required: false
      },
      'previous-margin': {
        type: String,
        default: '0px',
        required: false
      },
      'next-margin': {
        type: String,
        default: '0px',
        required: false
      },
      'snap-to-edge': {
        type: Boolean,
        default: false,
        required: false
      },
      'display-multiple-items': {
        type: Number,
        default: 0,
        required: false
      },
      'easing-function': {
        type: String,
        default: 'false',
        required: false
      },
      'bindchange': {
        type: Function,
        default: () => {

        },
        required: false
      },
      'bindtransition': {
        type: Function,
        default: () => {

        },
        required: false
      },
      'bindanimationfinish': {
        type: Function,
        default: () => {

        },
        required: false
      }
    },
    methods: {

    }
  }
</script>

<style>
</style>