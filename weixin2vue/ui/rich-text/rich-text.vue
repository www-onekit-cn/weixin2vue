<template>
  <div
       :class="['onekit-rich-text',onekitClass]"
       :style="onekitStyle"
       :id="onekitId"
       v-html="html">
    <slot></slot>
  </div>
</template>

<script>
  import HTML from '../../js/HTML'
  import TheKit from '../../js/TheKit'
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-rich-text",
    mixins: [onekit_behavior],
    computed: {
      html() {
        const html = TheKit.replace(typeof (this.nodes) == "string" ? this.nodes : HTML.nodes2html(this.nodes),
          ' ', `&${this.space};`)
        // console.log(typeof this.nodes)
        return html
      }
    },
    props: {
      'nodes': {
        type: [String, Array],
        default: () => {
          return []
        },
        required: false
      },
      'space': {
        type: String,
        default: '',
        required: false,
        validator(value) {
          return value == '' || value == 'ensp' || value == 'emsp' || value == 'nbsp'
        }
      }

    },
    methods: {

    }
  }
</script>

<style>
</style>