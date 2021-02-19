<template>
  <div
       :class="['onekit-text',onekitClass,
						this.userSelect? 'iselect': '']"
       :style="onekitStyle"
       :id="onekitId"
       ref="dom">
    <span v-html="html"></span>
    <slot v-if="false"></slot>
  </div>
</template>

<script>
  import STRING from 'oneutil/STRING'
  import weixin_behavior from '../../behaviors/weixin_behavior'
  import onekit_behavior from '../../behaviors/onekit_behavior'
  export default {
    name: "onekit-text",
    mixins: [weixin_behavior, onekit_behavior],
    data() {
      return {
        oldValue: '',
        str: this.$slots.default[0].text
      }
    },
    props: {
      'user-select': {
        type: Boolean,
        default: false,
        required: false,
      },
      'space': {
        type: String,
        default: null,
        required: false,
      },
      'decode': {
        type: Boolean,
        default: false,
        required: false
      }
    },
    computed: {
      html() {
        let temp = this.str
        if (this.space) {
          temp = STRING.replace(temp, ' ', `&${this.space};`)
        }
        if (!this.decode) {
          temp = temp.replace(/&amp;/g, "&amp;&amp;")
          temp = temp.replace(/&lt;/g, "&amp;&lt;")
          temp = temp.replace(/&gt;/g, "&amp;&gt;")
          temp = temp.replace(/&nbsp;/g, "&amp;nbsp;")
          temp = temp.replace(/&#39;/g, "&amp;&#39;")
          temp = temp.replace(/&quot;/g, "&amp;&quot;")
          temp = temp.replace(/\\n/g, "<br />")
        }
        return temp
      }

    },
    mounted() {
      const timer = setInterval(() => {
        this.str = this.$slots.default[0].text
      }, 1000)

      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer)
      })
    }
  }
</script>

<style>
  .iselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: inline-block;
  }
</style>