<template>
  <div
       :class="['onekit-radio',onekitClass]"
       :style="onekitStyle">
    <input type="radio"
           :id="onekitId"
           :checked="checked"
           :disabled="disabled"
           class="onekit-radio-own"
           v-bind:value="value"
           @click="_click">
    <span class="radio-label" :style="{'background-color': disabled ? '#d1d8e0': '','border': disabled ? '#d1d8e0' : '', '--color': color}"></span>

  </div>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import { eventBus } from '../../eventBus'
  export default {
    name: "onekit-radio",
    mixins: [toutiao_behavior, onekit_behavior],
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
        const { changedTouches, currentTarget, timeStamp, touches } = e
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
  .onekit-radio {
    position: relative;
    line-height: 30px;
    display: inline-block;
  }

  input[type='radio'] {
    width: 20px;
    height: 20px;
    opacity: 0;
    border: none;
    outline: none;
    visibility: hidden;
  }


  .radio-label {
    position: absolute;
    left: 1px;
    top: 1px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #999;
  }

  .onekit-radio-own:checked+.radio-label {
    background-color: var(--color);
    border: 1px solid var(--color);
  }

  .onekit-radio-own:checked+.radio-label::after {
    position: absolute;
    content: '';
    width: 5px;
    height: 10px;
    top: 3px;
    left: 6px;
    border: 2px solid #fff;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
  }
</style>