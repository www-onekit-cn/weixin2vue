<!--
<template>
  <div class="img"
       :style="{
						backgroundImage: `url(${src})`,
						width: width ? width : '300px', 
						height: height ? height : '223px',
						backgroundPosition: position ? position : '',
						backgroundSize: bgcover,
            backgroundRepeat: 'no-repeat',           
            onekitStyle}"
       ref="img"
       v-show="lazy"
       :id="onekitId"
       :class="['onekit-image',onekitClass]">
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
-->
<template>
  <div ref="div"
       :class="`onekit-image ${onekitClass}`"
       :style="`${onekitStyle}`"></div>
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
    'webp': {
      type: Boolean,
      default: false
    },
    'lazy-load': {
      type: Boolean,
      default: false
    },
    'show-menu-by-longpress': {
      type: Boolean,
      default: false
    }
  },
  watch: {
    src (src) {
      this.src_(src)
    },
    mode (mode) {
      this.mode_(mode)
    }
  },
  mounted () {
    this.src_(this.src)
    this.mode_(this.mode)
  },
  methods: {
    src_ (src) {
      this.$refs.div.style.backgroundImage = `url(${src})`
    },
    mode_ (mode) {
      switch (mode) {
        case "scaleToFill":
          this.$refs.div.style.backgroundSize = "100% 100%";
          break;
        case "aspectFit":
          this.$refs.div.style.backgroundSize = "contain", this.$refs.div.style.backgroundPosition = "center center";
          break;
        case "aspectFill":
          this.$refs.div.style.backgroundSize = "cover", this.$refs.div.style.backgroundPosition = "center center";
          break;
        case "top":
          this.$refs.div.style.backgroundPosition = "top center";
          break;
        case "bottom":
          this.$refs.div.style.backgroundPosition = "bottom center";
          break;
        case "center":
          this.$refs.div.style.backgroundPosition = "center center";
          break;
        case "left":
          this.$refs.div.style.backgroundPosition = "center left";
          break;
        case "right":
          this.$refs.div.style.backgroundPosition = "center right";
          break;
        case "top left":
          this.$refs.div.style.backgroundPosition = "top left";
          break;
        case "top right":
          this.$refs.div.style.backgroundPosition = "top right";
          break;
        case "bottom left":
          this.$refs.div.style.backgroundPosition = "bottom left";
          break;
        case "bottom right":
          this.$refs.div.style.backgroundPosition = "bottom right"
      }
    }
  }
}
</script>
