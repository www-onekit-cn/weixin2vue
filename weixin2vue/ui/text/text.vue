<template>
  <div
       :class="['onekit-text',onekitClass,
			 					this.userSelect? 'iselect': '']"
       :style="onekitStyle"
       :id="onekitId">
    <div style="display:none">
      <slot></slot>
    </div>
    {{html}}
  </div>
</template>

<script>
  import onekit_behavior from " ../../behaviors/onekit_behavior"
  export default {
    name: "onekit-text",
    mixins: [onekit_behavior],
    props: {
      'user-select': {
        type: Boolean,
        default: false,
        required: false,
      },
      'space': {
        type: String,
        default: '',
        required: false,
      },
      'decode': {
        type: Boolean,
        default: false,
        required: false
      }

    },
    conputed: {
      html() {
        var temp = this.$el.innerHTML;
        if (this.decode) {
          temp = temp.replace(/&amp;/g, "&");
          temp = temp.replace(/&lt;/g, "<");
          temp = temp.replace(/&gt;/g, ">");
          temp = temp.replace(/&nbsp;/g, " ");
          temp = temp.replace(/&#39;/g, "\'");
          temp = temp.replace(/&quot;/g, "\"");
        }
        return temp
      }

    }
  }
</script>

<style>
  .iselect {
    -webkit-touch-callout: none;
    /*系统默认菜单被禁用*/
    -webkit-user-select: none;
    /*webkit浏览器*/
    -khtml-user-select: none;
    /*早期浏览器*/
    -moz-user-select: none;
    /*火狐*/
    -ms-user-select: none;
    /*IE10*/
    user-select: none;
    display: inline-block;
  }
</style>