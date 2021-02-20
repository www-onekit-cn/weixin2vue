<template>
  <div :class="['onekit-video',onekitClass]" :style="onekitStyle">
    <video :src='src' :id="onekitId" :poster="poster" :loop="loop" :controls="controls" ref="vedioDom"
      :class="[showFullscreenBtn ? 'show-button' : 'hide-button']" :style="{'object-fit': fit}"></video>
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-video",
    mixins: [weixin_behavior, onekit_behavior],
    data: () => ({
      video: ''
    }),
    props: {
      'src': {
        type: String,
        required: true,
      },
      'autoplay': {
        type: Boolean,
        default: false
      },
      'poster': {
        type: String
      },
      'loop': {
        type: Boolean,
        default: false
      },
      'show-fullscreen-btn': {
        type: Boolean,
        default: true
      },
      'controls': {
        type: Boolean,
        default: true
      },
      'object-fit': {
        type: String,
        default: 'contain'
      },
      'play-btn-position': {
        type: String,
        default: 'cenetr'
      },
      'pre-roll-unit-id': String,
      'post-roll-unit-id': String
    },
    computed: {
      fit() {
        return this['object-fit']
      }
    },
    mounted() {
      const videoContext = this.$refs.vedioDom
      this.video = videoContext
      this.video.addEventListener('play', () => {
        this._trigger_play()
      })
      this.video.addEventListener('pause', () => {
        this._trigger_pause()
      })
      this.video.addEventListener('ended', () => {
        this._trigger_ended()
      })
      this.video.addEventListener('error', () => {
        this._trigger_error()
      })
      this.video.addEventListener('timeupdate', () => {
        this._trigger_timeupdate()
      })
      this.video.addEventListener('webkitfullscreenchange', () => {
        this._trigger_fullscreenchange()
      })
      this.video.addEventListener('waiting', () => {
        this._trigger_waiting()
      })
      this.video.addEventListener('loadedmetadata', () => {
        const data = {
          width: this.video.videoWidth,
          height: this.video.videoHeight,
          duration: this.video.duration
        }
        this._trugger_loadedmetadata(data)
      })
    },
    methods: {
      _trigger_play() {
        this.$emit('play')
      },
      _trigger_pause() {
        this.$emit('pause')
      },
      _trigger_ended() {
        this.$emit('ended')
      },
      _trigger_error() {
        this.$emit('error')
      },
      _trigger_timeupdate() {
        this.$emit('timeupdate')
      },
      _trigger_fullscreenchange() {
        this.$emit('fullscreenchange')
      },
      _trigger_waiting() {
        this.$emit('waitting')
      },
      _trigger_adstart(e) {
        e.detail = {
          adType: 'preRollAd' | 'postRollAd'
        }
        this.$emit('adstart', e)
      },
      _trigger_adended(e) {
        e.detail = {
          adType: 'preRollAd' | 'postRollAd'
        }
        this.$emit('adended', e)
      },
      _trgger_adclose(e) {
        e.detail = {
          adType: 'preRollAd' | 'postRollAd'
        }
        this.$emit('adclose', e)
      },
      _trigger_aderror(e) {
        e.detail = {
          adType: 'preRollAd' | 'postRollAd'
        }
        this.$emit('aderror', e)
      },
      _trugger_loadedmetadata(data) {
        let {
          width,
          height,
          duration
        } = data
        let e = {}
        e.detail = {
          width,
          height,
          duration
        }
        this.$emit('loadedmetadata', e)
      }
    }
  }
</script>

<style>

</style>