/* eslint-disable vue/custom-event-name-casing */
export default {
  props: {
    "onekit-id": { type: String, default: "" },
    "onekit-class": { type: String, default: "" },
    "onekit-style": { type: String, default: "" }
  },
  methods: {
    ui_mousedown() {
      this.$emit("Touchstart");
    },
    ui_mousemove() {
      this.$emit("Touchmove");
    },
    /*ui_mousecanvas() {
      this.$emit("Touchcancel");
    },*/
    ui_mouseup() {
      this.$emit("Touchen");
    },
    ui_click() {
      this.$emit("Tap");
    },
    /* ui_longPress() {
       this.$emit("Longpress");
     },*/
    ui_longclick() {
      this.$emit("Longtap");
    },
  }
}

