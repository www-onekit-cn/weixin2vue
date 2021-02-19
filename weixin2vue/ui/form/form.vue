<template>
  <form
        :class="['onekit-form',onekitClass]"
        :style="onekitStyle"
        :id="onekitId"
        :key="onekitId">
    <slot></slot>
  </form>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import { eventBus } from '../../eventBus'
  export default {
    name: "onekit-form",
    mixins: [toutiao_behavior, onekit_behavior],
    data() {
      return {
        formData: {
          switch: '',
          input: '',
          checkbox: '',
          slider: '',
          radio: '',
          picker: ''
        },
      }
    },
    props: {},
    mounted() {
      eventBus.$off('onekit-input-submit')
      eventBus.$on('onekit-input-submit', data => {
        this.formData['input'] = data
      })

      eventBus.$off('onekit-switch-submit')
      eventBus.$on('onekit-switch-submit', data => {
        this.formData['switch'] = data
      })

      eventBus.$off('onekit-checkbox-submit')
      eventBus.$on('onekit-checkbox-submit', data => {
        this.formData['checkbox'] = data
      })

      eventBus.$off('onekit-slider-submit')
      eventBus.$on('onekit-slider-submit', data => {
        this.formData['slider'] = data
      })

      eventBus.$off('onekit-radio-submit')
      eventBus.$on('onekit-radio-submit', data => {
        this.formData['radio'] = data
      })

      eventBus.$off('onekit-picker-submit')
      eventBus.$on('onekit-pciker-submit', data => {
        this.formData['picker'] = data
      })

      eventBus.$off('onekit-form-reset')
      eventBus.$on('onekit-form-reset', data => {
        this.$emit('Reset', data)
        eventBus.$emit('onekit-foem-item-reset')
      })


      eventBus.$off('onekit-form-submit-click')
      eventBus.$on('onekit-form-submit-click', data => {
        this.$emit('Submit', data)
      })
    },
    watch: {
      formData: {
        handler(v) {
          eventBus.$emit('onekit-form-submit', v)
        },
        deep: true,
      }
    }
  }
</script>

<style>
</style>