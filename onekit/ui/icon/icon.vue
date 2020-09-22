<template>
  <i
    :class="['onekit-icon',typeClass,'iconfont icon-search','iconfont icon-clear']"
    :style="onekitStyle"
    :id="onekitId"
  ></i>
</template>

<script>
export default {
  name: "onekit-icon",
  mounted() {
    this.$el.style.setProperty("--icon-size", `${this.size}px`);
    //
    var color = this.color;
    if (!color) {
      switch (this.type) {
        case "success":
        case "success_no_circle":
        case "download":
        case "info_circle":
          color = "#20BF64";
          break;

        case "info":
        case "waiting":
          color = "#24B0FC";
          break;

        case "warn":
        case "cancel":
          color = "#F75355";
          break;

        case "circle":
        case "search":
        case "clear":
          color = "#B2B2B2";
          break;

        default:
          throw new Error(this.type);
          break;
      }
    }
    this.$el.style.setProperty("--icon-color", color);
  },
  props: {
    onekitClass: {
      type: String,
      default: "",
    },
    onekitStyle: {
      type: String,
      defaul: "",
    },
    onekitId: {
      type: String,
      defaul: "",
    },
    type: {
      type: String,
      required: true,
    },
    size: {
      type: Number | String,
      required: false,
      default: 23,
    },
    color: {
      type: String,
      required: false,
    },
  },

  computed: {
    typeClass() {
      return `weui_icon_${this.type}`;
    },
  },
};
</script>
<style scoped>
.onekit-icon::before {
  font-size: var(--icon-size);
  color: var(--icon-color);
}
/*
.weui_icon_search::before{

}
.weui_icon_clear::before{
    
}*/
</style>
