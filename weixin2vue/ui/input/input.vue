<template>
  <div>
    <input
           :class="['onekit-input',onekitClass]"
           :style="onekitStyle"
           :id="onekitId"
           :value="value"
           :pattern="newType"
           :type="password ? 'password' : '' "
           :placeholder="placeholder"
           :disabled="disabled ? 'disabled' : false "
           :maxlength="maxlength"
           :autofocus="focusNew? 'autofocus' : '' "
           @focus="_focus"
           @blur="_blur"
           @keydown="_confirm"
           v-model="val"
           @input="_input" />
  </div>

</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import { eventBus } from '../../eventBus'
  export default {
    name: "onekit-input",
    mixins: [toutiao_behavior, onekit_behavior],
    data() {
      return {
        focusNew: 'false',
        val: ''
      }
    },
    props: {
      'value': String,
      'type': String,
      'password': Boolean,
      'placeholder': String,
      'placeholder-style': String,
      'disabled': Boolean,
      'maxlength': {
        type: Number,
        default: 140
      },
      'focus': Boolean,
      'cursor-spacing': Number,
      'cursor': Number,
      'selection-start': Number,
      'selection-end': Number,
      'adjust-position': {
        type: Boolean,
        default: true
      },
      'confirm-type': {
        type: String,
        default: 'done',
        desc: 'h5 is not support'
      }
    },
    computed: {
      newType() {
        let newType
        switch (this.type) {
        case 'text':
          newType = 'text'
          break
        case 'number':
          newType = '[0-9]*'
          break
        case 'digit':
          newType = 'number'
          break
        default:
        }
        return newType
      }
    },
    created() {},
    watch: {
      focus: {
        deep: true,
        handler(v) {
          if (v) this.focusNew = 'autofocus'
        },
        immediate: true
      }
    },
    methods: {
      _focus(e) {
        if (this.adjustPosition) {
          window.scroll(0, 0)
        }
        const { changedTouches, currentTarget, target, timeStamp, touches, type } = e
        const detail = {
          value: this.val
        }

        const focusData = {
          changedTouches,
          currentTarget,
          target,
          detail,
          timeStamp,
          touches,
          type
        }

        this.$emit('Focus', focusData)
      },
      _blur(e) {

        const { changedTouches, currentTarget, target, timeStamp, touches, type } = e
        const detail = {
          value: this.val
        }

        const blurData = {
          changedTouches,
          currentTarget,
          target,
          detail,
          timeStamp,
          touches,
          type
        }
        this.$emit('Blur', blurData)
      },
      _confirm(e) {
        if (e.key === 'Enter') {
          this.$emit('Confirm')
        }
      },
      _input(e) {
        const { currentTarget, target, timeStamp, touches } = e
        const detail = {
          cursor: this.val.length,
          value: this.val,
        }
        const type = 'input'

        const inputData = {
          currentTarget,
          detail,
          target,
          timeStamp,
          touches,
          type
        }
        this.$emit('Input', inputData)
        eventBus.$emit('onekit-input-submit', inputData.detail.value)
      },
    },
    mounted() {
      eventBus.$on('onekit-foem-item-reset', () => {
        this.val = ''
        eventBus.$emit('onekit-input-submit', this.val)
      })
    }
  }
</script>

<style>
  .onekit-input {
    width: 100%;
    background: none;
    outline: none;
    border: none;
  }
</style>