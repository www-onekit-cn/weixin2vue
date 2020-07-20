
  import OneKit from "../OneKit.js";
export default {
  methods: {
    ui_click(e) {
      this.$emit("tap", OneKit.raiseEvent(this.$el, "tap", e));
    }
  }
}
