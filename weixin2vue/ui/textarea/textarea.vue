<template>
  <textarea :class="['onekit-textarea',onekitClass]" :id="onekitId" v-model="text" :placeholder="placeholder"
    :disabled="disabled" :maxlength="maxlength" :autofocus="focus" @input="_write" @focus="_focus" @blur="_blur"
    @keyup.enter="_confirm" :style="{onekitStyle,'position': fixed ? 'fixed' : 'relative'}">
  </textarea>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-textarea",
    data() {
      return {
        text: this.value,
        detailData: []
      }
    },
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      'value': String,
      'placeholder': String,
      'disabled': {
        type: Boolean,
        default: false
      },
      'maxlength': Number,
      focus: {
        type: Boolean,
        default: false,
      },
      'auto-height': {
        type: Boolean,
        default: false
      },
      'fixed': {
        type: Boolean,
        default: false
      },
      'cursor-spacing': {
        type: Number,
        default: -1
      },
      'cursor': {
        type: Number,
        default: -1
      },
      'selection-start': {
        type: Number,
        default: -1
      },
      'selection-end': {
        type: Number,
        default: -1
      }
    },
    created() {},
    mounted() {


    },
    methods: {
      _write(event) {
        const {
          currentTarget,
          target,
          timeStamp
        } = event
        const detail = {
          value: this.$el.value,
          cursor: this.$el.value.length,
        }
        const e = {
          type: event.type,
          currentTarget,
          detail,
          target,
          timeStamp,
          touches: [],
          changedTouches: [],
        }

        this.$emit('input', e)
        if (this.autoHeight) {
          this.$el.style.height = `${this.$el.scrollHeight}px`
        }
      },
      __setCaretPosition(ctrl, pos, start, end) {
        if (ctrl.setSelectionRange) {
          ctrl.focus();
          ctrl.setSelectionRange(start, end)
        } else if (ctrl.createTextRange) {
          var range = ctrl.createTextRange()
          range.collapse(true)
          range.moveEnd('character', pos)
          range.moveStart('character', pos)
          range.select()
        }
      },
      _focus(e) {
        const {
          currentTarget,
          target,
          timeStamp
        } = e
        const detail = {
          value: this.$el.value,
          height: this.$el.scrollHeight
        }
        const event = {
          type: e.type,
          currentTarget,
          detail,
          target,
          timeStamp,
          touches: [],
          changedTouches: [],
        }

        this.$emit('focus', event)

        if (this.cursor !== -1) {
          this.__setCaretPosition(this.$el, this.cursor, 0, this.cursor)
        }

        if (this.selectionStart !== -1) {
          this.__setCaretPosition(this.$el, this.cursor, this.selectionStart, this.$el.value.length - 1)
        }

        if (this.selectionEnd !== -1) {
          this.__setCaretPosition(this.$el, this.cursor, 0, this.selectionEnd)
        }
        if (this.cursorSpacing !== -1) {
          setTimeout(() => {
            this.$el.scrollIntoView(true)
          }, 200)
        }
      },
      _blur(e) {
        const {
          currentTarget,
          target,
          timeStamp
        } = e
        const detail = {
          value: this.$el.value,
        }
        const event = {
          type: e.type,
          currentTarget,
          detail,
          target,
          timeStamp,
          touches: [],
          changedTouches: [],
        }
        this.$emit('blur', event)
      },
      _confirm(e) {
        const {
          currentTarget,
          target,
          timeStamp
        } = e
        const detail = {
          value: this.$el.value,
        }
        const event = {
          type: e.type,
          currentTarget,
          detail,
          target,
          timeStamp,
          touches: [],
          changedTouches: [],
        }
        this.$emit('confirm', event)
      }
    },
  }
</script>

<style>

</style>