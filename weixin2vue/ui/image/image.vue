<template>
  <div :class="['onekit-image',onekitClass]"
       :style="onekitStyle"
       :id="onekitId"
       v-show="lazy">
    <div class="img"
         :style="{
						backgroundImage: `url(${src})`,
						width: width ? width : '300px', 
						height: height ? height : '223px',
						backgroundPosition: position ? position : '',
						backgroundSize: bgcover,
            backgroundRepeat: 'no-repeat',           
            }"
         ref="img">
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-image",
    mixins: [weixin_behavior, onekit_behavior],
    data: () => ({
      lazy: true
    }),
    props: {
      'src': {
        type: String,
      },
      'mode': {
        type: String,
        default: 'scaleToFill'
      },
      'lazy-load': {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      const dom = this.$refs.img
      if (dom) {
        this.$emit('bindload')
      } else {
        this.$emit('binderror')
      }
      window.addEventListener('scroll', this.lazyLoadfn)
    },
    methods: {
      lazyLoadfn() {
        if (!this['lazy-load']) return
        const height = document.body.offsetHeight
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        const imgbox = this.$refs.img

        let scrolHeight, offsetTop, top, bottom
        scrolHeight = imgbox.scrolHeight
        offsetTop = imgbox.offsetTop
        top = offsetTop - height > 0 ? offsetTop - height : 0
        bottom = scrolHeight + offsetTop
        if (scrollTop >= top && scrollTop <= bottom) {
          this.lazy = true
        } else {
          console.log('hide')
          this.lazy = false
        }
      }
    },
    computed: {
      bgcover() {
        let bgcover = ''
        switch (this.mode) {
        case 'aspectFit':
          bgcover = 'cover'
          break
        case 'aspectFill':
          bgcover = 'contain'
          break
        default:
        }
        return bgcover
      },
      width() {
        let bgwidth
        switch (this.mode) {
        case 'scaleToFill':
          bgwidth = '100%'
          break
        default:
        }
        return bgwidth
      },
      height() {
        let bgheight
        switch (this.mode) {
        case 'widthFix':
          bgheight = '100%'
          break;

        default:
          break
        }
        return bgheight
      },
      position() {
        let bgposition
        switch (this.mode) {
        case 'top':
          bgposition = 'top'
          break
        case 'bottom':
          bgposition = 'bottom'
          break
        case 'center':
          bgposition = 'center'
          break
        case 'left':
          bgposition = 'left'
          break
        case 'right':
          bgposition = 'right'
          break
        case 'top left':
          bgposition = 'top left'
          break
        case 'top right':
          bgposition = 'top right'
          break
        case 'bottom left':
          bgposition = 'bottom left'
          break
        case 'bottom right':
          bgposition = 'bottom right'
          break
        default:
          break;
        }
        return bgposition
      }
    }
  }
</script>

<style>
  .onekit-image {
    width: 100%;
  }

  .onekit-image img {
    width: 300px;
    height: 225px;
  }
</style>