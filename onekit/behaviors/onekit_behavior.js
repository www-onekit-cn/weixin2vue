import OneKit from "../js/onekit.js";
export default {
  props:{
"onekit-id":{type:String,default:""},
"onekit-class":{type:String,default:""},
"onekit-style":{type:String,default:""}
  },
  methods: {
    /*ui_click(e) {
      this.$emit("tap", OneKit.raiseEvent(this.$el, "tap", e));
    }*/
  }
}

