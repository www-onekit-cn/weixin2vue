/* eslint-disable vue/custom-event-name-casing */
export default {
  props: {
  },
  methods: {
    ui_mousedown(e) {
      this.$emit("Touchstart",e);
    },
    ui_mousemove(e) {
      this.$emit("Touchmove",e);
    },
    /*ui_mousecanvas() {
      this.$emit("Touchcancel");
    },*/
    ui_mouseup(e) {
      this.$emit("Touchend",e);
    },
    ui_click(e) {
      this.$emit("Tap",e);
    },
    /* ui_longPress() {
       this.$emit("Longpress");
     },*/
    ui_longclick(e,) {
      this.$emit("Longtap",e);
    },
  }
}

