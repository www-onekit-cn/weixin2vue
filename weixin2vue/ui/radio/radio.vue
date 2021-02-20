<template>
  <div :class="['onekit-radio',onekitClass]" :style="onekitStyle">
    <input type="radio" :id="onekitId" :checked="checked" :disabled="disabled" class="onekit-radio-own"
      v-bind:value="value" @click="_click">
    <span class="radio-label"
      :style="{'background-color': disabled ? '#d1d8e0': '','border': disabled ? '#d1d8e0' : '', '--color': color}"></span>

  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import {
    eventBus
  } from '../../eventBus'
  export default {
    name: "onekit-radio",
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      'value': String,
      'checked': {
        type: Boolean,
        default: false
      },
      'disabled': {
        type: Boolean,
        default: false
      },
      'color': {
        type: String,
        default: '#F85959'
      }
    },
    methods: {
      _click(e) {
        const {
          changedTouches,
          currentTarget,
          timeStamp,
          touches
        } = e
        const detail = {
          value: this.value
        }
        const emitData = {
          changedTouches,
          currentTarget,
          detail,
          timeStamp,
          touches,
          type: "change"
        }
        eventBus.$on('onekit-foem-item-reset', () => {
          e.target.checked = false
          emitData.detail.value = ''
          eventBus.$emit('itemclick', emitData)
        })

        eventBus.$emit('itemclick', emitData)

        eventBus.$on('radio-cancel', data => {
          if (this.value !== data) {
            e.target.checked = false
          }
        })
      }
    }
  }
</script>

<style>

</style>