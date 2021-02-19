<template>
  <div
       :class="['onekit-slider',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <div class="slider-bar"
         :style="{'background-color': backgroundColor || color}">
      <div class="inner-bar"
           :style="{'width': _left + 'px', 'background-color': activeColor || selectedColor}">
      </div>
      <div class="dot"
           @touchmove="_touchmove"
           :style="{'left': _left + 'px','width': `${blockSize}px`,
                    'height':  `${blockSize}px`, 
                    'top':  `-${blockSize / 2}px`,
                    'background-color': blockColor}"
           @touchend="_touchend">
      </div>
    </div>
    <div class="value" v-show="showValue">{{ values }}</div>
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import { eventBus } from '../../eventBus'
  export default {
    name: "onekit-slider",
    mixins: [weixin_behavior, onekit_behavior],
    data: () => ({ left: 0, values: 0, nowVal: 0 }),
    props: {
      'max': {
        type: Number,
        default: 100
      },
      'min': {
        type: Number,
        default: 0
      },
      'step': {
        type: Number,
        default: 1
      },
      'disabled': {
        type: Boolean,
        default: false
      },
      'value': {
        type: Number,
        default: 0
      },
      'color': {
        type: String,
        default: '#e9e9e9'
      },
      'selected-color': {
        type: String,
        default: '#1aad19'
      },
      'active-color': {
        type: String,
        default: '#1aad19'
      },
      'background-color': {
        type: String,
        default: '#e9e9e9'
      },
      'block-size': {
        type: Number,
        default: 28
      },
      'block-color': {
        type: String,
        default: '#ffffff'
      },
      'show-value': {
        type: Boolean,
        default: false
      }

    },
    created() {
      this.values = this.value
      this.left = this.values * window.innerWidth / 115
    },
    computed: {
      _left() {
        let left = this.values * window.innerWidth / 115
        return left
      }
    },
    methods: {
      _touchmove(e) {
        let startPencent = 0
        let endPercent = 100

        if (this.disabled) return
        //onsole.log(window.screen.availWidth) // 屏幕宽度
        const { clientX } = e.changedTouches[0]
        if (clientX < window.screen.availWidth && clientX > -1) {
          this.left += clientX
          if (this.left < 0) {
            this.left = 0
          }
          let percent = 0.8
          if (!this.showValue) percent = 0.85
          if (this.left > window.screen.availWidth * percent) {
            this.left = window.screen.availWidth * percent
          }

          this.nowVal = (this.max - this.min) * (this.values / endPercent) + this.min


          this.values = Math.round(Math.round(clientX / window.screen.availWidth / 0.86 * 100))
          if (this.values < startPencent) {
            this.values = startPencent
          }
          if (this.values > endPercent) {
            this.values = endPercent
          }
          const { changedTouches, currentTarget, target, timeStamp, touches } = e
          const value = this.values
          const detail = {
            value
          }
          const event = {
            changedTouches,
            currentTarget,
            detail,
            target,
            timeStamp,
            touches,
            type: 'change'
          }
          this.$emit('changing', event)
        }
      },
      _touchend(e) {
        const { changedTouches, currentTarget, target, timeStamp, touches } = e
        const value = this.nowVal
        const detail = {
          value
        }
        const event = {
          changedTouches,
          currentTarget,
          detail,
          target,
          timeStamp,
          touches,
          type: 'change'
        }
        this.$emit('Change', event)

        eventBus.$emit('onekit-slider-submit', value)

        eventBus.$on('onekit-foem-item-reset', () => {
          this.values = this.value
        })
      }
    }
  }
</script>

<style>
  .onekit-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 15px;
  }

  .onekit-slider .slider-bar {
    width: 100%;
    height: 1.5px;
    position: relative;
  }

  .slider-bar .dot {
    position: absolute;
    border-radius: 100%;
    box-shadow: 0px 2px 2px #ccc,
      0px 1px 4px #ccc;

  }

  .slider-bar .inner-bar {
    height: 100%;
    position: absolute;
    max-width: 100%;
  }

  .value {
    display: inline-block;
    width: 20px;
    text-align: center;
    color: #999;
  }
</style>