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
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-rich-text",
    mixins: [onekit_behavior],
    computed: {
      html() {
        const html = this.replace(typeof (this.nodes) == "string" ? this.nodes : HTML.nodes2html(this.nodes),
          ' ', `&${this.space};`)
        console.log(typeof this.nodes)
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
      }

    },
    methods: {
      replace(string, str1, str2) {
        let result = ''
        let inTag = false
        for (let i = 0; i < string.length; i++) {
          const chr = string.substr(i, 1)
          switch (chr) {
          case '<':
            inTag = true;
            result += chr
            break;
          case '>':
            inTag = false;
            result += chr
            break;
          case str1:
            result += inTag ? chr : str2
            break;
          default:
            result += chr
            break;
          }
        }
        return result
      }
    }
  }
</script>

<style>
</style>