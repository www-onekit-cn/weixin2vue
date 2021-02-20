<template>
  <div id="app"
       style="height:100%;overflow:hidden;display: flex;flex-direction: column;">
    <div id="onekitwx_navigationBar"
         :style="{'display':'flex','justify-content':'space-between','align-item':'center','flex-shrink':0,background:WINDOW_JSON.navigationBarBackgroundColor}">
      <h2 id="onekitwx_navigationBar_title"
          style="font-size:18px;margin:0;line-height:50px;text-align:center;font-weight:normal;width:100%;top:0;left:0;position:absolute;pointer-events:none;">{{WINDOW_JSON.navigationBarTitleText}}</h2>
      <template v-if="WINDOW_JSON.navigationBarTextStyle=='black'">
        <img alt="back"
             id="onekitwx_navigationBar_back"
             style="width:30px;height:30px;cursor: pointer;"
             src="../../../public/onekit/white/back.png"
             @click="back_click" />
        <div id="onekitwx_navigationBar_menu"
             style="border-radius:15px;height:30px;margin-right:5px;border:1px solid #fff8;">
          <img id="onekitwx_navigationBar_more"
               alt="more"
               src="../../../public/onekit/white/more.png"
               style="position:relative;width:30px;height:30px;cursor: pointer;" />
          <img id="onekitwx_navigationBar_quit"
               alt="quit"
               src="../../../public/onekit/white/quit.png"
               style="position:relative;width:30px;height:30px;cursor: pointer;" />
        </div>
      </template>
      <template v-else>
        <img alt="back"
             id="onekitwx_navigationBar_back"
             style="width:30px;height:30px;cursor: pointer;"
             src="../../../public/onekit/black/back.png"
             @click="back_click" />
        <div id="onekitwx_navigationBar_menu"
             style="border-radius:15px;height:30px;margin-right:5px;border:1px solid #000;">
          <img id="onekitwx_navigationBar_more"
               alt="more"
               src="../../../public/onekit/black/more.png"
               style="position:relative;width:30px;height:30px;cursor: pointer;" />
          <img id="onekitwx_navigationBar_quit"
               alt="quit"
               src="../../../public/onekit/black/quit.png"
               style="position:relative;width:30px;height:30px;cursor: pointer;" />
        </div>
      </template>
    </div>
    <div style="flex-grow:2;overflow:hidden;">
      <router-view @updatewindowjson="activity_updateWindowJson"></router-view>
    </div>

    <div>
      <span data-clipboard-action="copy"
            @click="copyLink"></span>
    </div>

  </div>
</template>
<script>
import Vue from "vue";

import clipboard from 'clipboard';
Vue.prototype.clipboard = clipboard;

export default {
  name: "onekit-activity",
  data () {
    return {
      WINDOW_JSON: {},
    };
  },
  methods: {

    back_click () {
      history.back();
    },
    activity_updateWindowJson ({ WINDOW_JSON }) {
      this.WINDOW_JSON = WINDOW_JSON;
    },
    copyLink () {
      let _this = this;
      let clipboard = new this.clipboard(".cobyOrderSn");
      clipboard.on('success', function () {
        _this.$toast("复制成功")
      });
      clipboard.on('error', function () {
        _this.$toast("复制失败")
      });
    }

  },
};
</script>
<style scoped="scoped">
@import "../../../public/onekit.css";
@import "../../../public/weui.css";

#onekitwx_navigationBar {
  height: 50px;
  display: flex;
  align-items: center;
  background: #fff;
}
</style>
