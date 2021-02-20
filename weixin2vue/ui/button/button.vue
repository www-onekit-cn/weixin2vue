<template>
  <button class="onekit-button" :class="[typeClass, disabled ? 'weui_btn_disabled' : '', mini ? 'weui_btn_mini' : '']"
    :style="{onekitStyle, 
                   'background-color': clicking ? _bgcolor.bgcolorActive : _bgcolor.bgcolor,
                   'color': clicking ? _bgcolor.bgTxtcolorActive : _bgcolor.bgTxtcolor,                   
                    }" @click.prevent="button_click($event)" :type="formType">
    <div class="loading" v-if="_loading">
    </div>
    <slot></slot>
  </button>
</template>

<script>
  import weixin_behavior from '../../behaviors/weixin_behavior'
  import onekit_behavior from '../../behaviors/onekit_behavior'
  import {
    eventBus
  } from '../../eventBus'
  export default {
    mixins: [weixin_behavior, onekit_behavior],
    data() {
      return {
        clicking: false,
        formData: {}
      }
    },
    name: 'onekit-button',
    props: {
      type: {
        type: String,
        default: 'primary',
        required: false
      },
      disabled: {
        type: Boolean,
        default: false,
        required: false
      },
      mini: {
        type: Boolean,
        default: false,
        required: false
      },
      plain: {
        type: Boolean,
        default: false,
        required: false
      },
      loading: Boolean,
      'form-type': String
    },
    methods: {
      button_click($event) {
        if (!this.disabled) {
          if (this.formType === 'submit') {
            const {
              changedTouches,
              currentTarget,
              target,
              timeStamp,
              touches
            } = $event
            const detail = {
              formId: this.onekitId,
              target: {
                id: '',
                dataset: {},
                offsetLeft: '',
                offsetTop: ''
              },
              value: this.formData
            }
            const type = 'submit'
            const data = {
              changedTouches,
              currentTarget,
              target,
              detail,
              timeStamp,
              touches,
              type
            }
            eventBus.$emit('onekit-form-submit-click', data)
          }
          if (this.formType === 'reset') {
            const {
              changedTouches,
              currentTarget,
              target,
              timeStamp,
              touches
            } = $event
            const detail = {
              target: {
                id: '',
                dataset: {},
                offsetLeft: '',
                offsetTop: ''
              }
            }
            const type = 'reset'
            const data = {
              changedTouches,
              currentTarget,
              target,
              detail,
              timeStamp,
              touches,
              type
            }
            eventBus.$emit('onekit-form-reset', data)
          }

          this.$emit('click', $event)
          const telNum = 'h5 is not supprot getting the cell phone number'
          this.$emit('bindgetphonenumber', telNum)
        }
      }
    },
    computed: {
      typeClass() {
        return `weui_btn${this.plain ? '_plain' : ''}_${this.type}`;
      },
      disabledClass() {
        if (this.plain && this.disabled) {
          return 'weui-btn_plain-disabled'
        } else if (this.disabled) {
          return 'weui-btn_disabled'
        } else {
          return ''
        }
      },
      _loading() {
        let loading = false
        if (this.loading) {
          loading = true
        }
        return loading
      },
      _bgcolor() {
        let bgcolor = '#f1f2f6',
          bgcolorActive = '#cccccc',
          bgTxtcolor = 'rgba(0, 0, 0, .9)',
          bgTxtcolorActive = 'rgba(0, 0, 0, .5)'

        if (this.type === 'primary') {
          bgcolor = 'rgb(255, 145, 145)'
          bgcolorActive = 'rgb(226, 109, 109)'
          bgTxtcolor = '#ffffff'
          bgTxtcolorActive = 'rgba(255, 255, 255, .8)'
        }

        if (this.disabled) {
          bgTxtcolor = 'rgba(0, 0, 0, .3)'
        }

        return {
          bgcolor,
          bgcolorActive,
          bgTxtcolor,
          bgTxtcolorActive
        }
      },
    },
    mounted() {
      eventBus.$on('onekit-form-submit', data => {
        this.formData = data
      })
    }
  }
</script>

<style>

</style>