<template>
  <div
       :class="['onekit-swiper',onekitClass]"
       :style="[onekitStyle]"
       :id="onekitId"
       ref="box_dom">
    <div class="swiper-list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-swiper",
    mixins: [onekit_behavior],
    date() {
      return {
        index: 1,
        moveWidth: '',
        animate: '',
        currentX: '',
        moveX: '',
        currentOffset: 0,
        minMoveOffset: '',
        itemLen: '',
        boxDom: this.$refs.box_dom,
        isAutoPlay: false,
        isKeyDown: false,
        isDraginImg: false,
        DEFAULT_DURATION: '300ms',
        ANIMATION_UNTERVAL: 3000,
        screenWidth: document.body.clientWidth
      }
    },
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
    mounted() {
      this._getItem()
      this.autoPlay()
      const that = this
      window.onresize = () => {
        return (() => {
          that.moveWidth = this.$slots.default[0].componentInstance.$refs.item_dom.offsetWidth
          that.minMoveOffset = that.moveWidth / 2

          console.log(that.currentOffset)
        })()
      }
    },
    computed: {

    },
    methods: {
      _getItem() {

        let get = this.$slots.default.filter(item => {
          return item.tag != undefined
        })
        this.itemLen = get.length
        this.moveWidth = get[0].componentInstance.$refs.item_dom.offsetWidth

        this.currentOffset = this.moveWidth
        this.minMoveOffset = this.moveWidth / 2
        this.boxDom = this.$refs.box_dom

        console.log(this.itemLen, this.moveWidth, this.currentOffset, this.minMoveOffset, this.boxDom)
      },
      changeBoxDomStyle(offset, duration = '0ms') {
        this.boxDom.style.transition = `translateX(${offset})px`
        this.boxDom.style.transitionDuration = duration
      },
      carousel() {
        this.boxDom.addEventListenner('transitionend', () => {
          if (this.index === this.itemLen - 1) {
            this.index = 1
            this.currentOffset = this.moveWidth
            this.changeBoxDomStyle(-this.currentOffset)
          } else if (this.index < this.itemLen - 1) {
            this.index++
            this.currentOffset = this.moveWidth * this.index
            this.changeBoxDomStyle(-this.currentOffset, this.DEFAULT_DURATION)
          }
          console.log('进来没')
        })
      },
      autoPlay() {
        if (!this.isAutoPlay) { return; }
        this.isAutoPlay = true
        console.log('我进来了')
        console.log(this.boxDom)
        this.animate = setInterval(this.carousel, this.ANIMATION_UNTERVAL)
      }
    },
    watch: {
      screenWidth(val) {
        if (!this.timer) {
          this.screenWidth = val
          this.timer = true
          let that = this
          setTimeout(function () {
            that.screenWidth = that.$store.state.canvasWidth
            console.log(that.screenWidth)
            that.init()
            that.timer = false
          }, 400)
        }
      }
    }
  }
</script>

<style scoped>
  .onekit-swiper {
    overflow: hidden;
    position: relative;
  }

  .swiper-list {
    display: flex;
    height: 100%;
    transition: 2s all;
    transform: translateX(-000vw);
  }
</style>