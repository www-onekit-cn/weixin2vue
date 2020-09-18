<template>
  <div id="app">
    <router-view @updateWindow="updateWindow" />
    <div class="tab-bar">
      <span v-for="tab in tabs" class="item" @click="switchTo(tab.url)" :key="tab.pagePath">
        <img :src="$route.path.includes(tab.url) ? tab.selected : tab.normal" alt="">
        <span :class="{active:$route.path.includes(tab.url)}">{{tab.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  const APP_JSON = Vue.prototype.APP_JSON;
  export default {
    name:"onekit-tabs",
    methods:{
      switchTo(path){
        this.$router.replace(path);
      },
      updateWindow(WINDOW){
        this.$emit("updateWindow",WINDOW);
      },
    },
    data () {
      return {
        tabs: [ ]
      }
    },
    mounted(){
      let data = [];
      for(let tab of APP_JSON.tabBar.list){
        data.push( {
          name:tab.text,
          url:`/${tab.pagePath}`,
          normal: `/${tab.iconPath}`,
          selected: `/${tab.selectedIconPath}`
        })
      }
      Vue.set(this,"tabs",data);
    }
  }
</script>

<style scoped="scoped">
  body{display:flex;flex-direction:column;}
  #app {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    position: relative;
  }
  .tab-bar {
    height: 56px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
  }

  .tab-bar .item {
    display: flex;
    font-size: 12px;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #000;
  }

  .tab-bar .item span.active {
    color: #eb476d;
  }

  .tab-bar .item img {
    width: 28px;
  }
</style >
