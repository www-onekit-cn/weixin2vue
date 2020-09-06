<template>
  <div @click="click"><slot/></div>
</template>
<script>
  import ui from "./ui.js"
  export default{
    mixins:[ui],
    props:{
      target:{type:String,default:"self"},
      url:{type:String},
      "open-type":{type:String,default:"navigate"},
      delta:{type:Number,default:1},
      "app-id":{type:String},
      path:{type:String},
      "extra-data":{type:String},
      version:{type:String,default:"release"},
      "hover-class":{type:String,default:"navigator-hover"},
      "hover-stop-propagation":{type:Boolean,default:false},
      "hover-start-time":{number:50},
      "hover-stay-time":{number:600},
      bindsuccess:{type:String},
      bindfail:{type:String},
      bindcomplete:{type:String},
    },
    methods:{
      click(){
        this.$router.push(this.url)
      }
    }
  }
</script>
