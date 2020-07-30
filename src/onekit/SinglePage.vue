<template>
  <div id="app" style="height:100%;overflow:hidden;display: flex;flex-direction: column;">
    <div id="onekitwx_navigationBar" :style="{'display':'flex','justify-content':'space-between','align-item':'center','flex-shrink':0,background:WINDOW.navigationBarBackgroundColor}">
        <h2 id="onekitwx_navigationBar_title" style="font-size:18px;margin:0;line-height:50px;text-align:center;font-weight:normal;width:100%;top:0;left:0;position:absolute;pointer-events:none;">{{WINDOW.navigationBarTitleText}}</h2>
        <template v-if="WINDOW.navigationBarTextStyle=='black'">
        <img alt="back" id="onekitwx_navigationBar_back"  style="width:30px;height:30px;cursor: pointer;"
             src="./images/white/back.png" @click="back_click"/>
        <div id="onekitwx_navigationBar_menu" style="border-radius:15px;height:30px;margin-right:5px;border:1px solid #fff8;">
          <img id="onekitwx_navigationBar_more" alt="more" src="./images/white/more.png" style="position:relative;width:30px;height:30px;cursor: pointer;"/>
          <img id="onekitwx_navigationBar_quit" alt="quit" src="./images/white/quit.png" style="position:relative;width:30px;height:30px;cursor: pointer;"/>
        </div>
      </template>
      <template v-else>
        <img alt="back" id="onekitwx_navigationBar_back"  style="width:30px;height:30px;cursor: pointer;"
             src="./images/black/back.png" @click="back_click"/>
        <div id="onekitwx_navigationBar_menu" style="border-radius:15px;height:30px;margin-right:5px;border:1px solid #000;">
          <img id="onekitwx_navigationBar_more" alt="more" src="./images/black/more.png" style="position:relative;width:30px;height:30px;cursor: pointer;"/>
          <img id="onekitwx_navigationBar_quit" alt="quit" src="./images/black/quit.png" style="position:relative;width:30px;height:30px;cursor: pointer;"/>
        </div>
      </template>
    </div>
    <div style="flex-grow:2;overflow:scroll;">
      <router-view @updateWindow="updateWindow"></router-view>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default{
    data () {
      return {
        WINDOW:{}
      }
    },
    methods:{
      back_click(){
        history.back();
      },
      updateWindow(WINDOW){
         Vue.set(this,"WINDOW",WINDOW);
      }
    }
  }
</script>
<style scoped="scoped">

  #onekitwx_navigationBar{
    height:50px;display:flex;align-items:center;background:#fff;
  }

</style>
