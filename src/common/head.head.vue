<template>
  <onekit-page id='app'>
    <onekit-view onekit-class="page-head">
      <onekit-view onekit-class="page-head-title">
        {{title}}
      </onekit-view>
      <onekit-view onekit-class="page-head-line"></onekit-view>
      <onekit-view v-if="desc"
                   onekit-class="page-head-desc">
        {{desc}}
      </onekit-view>
    </onekit-view>
  </onekit-page>
</template>
<script>
const ONEKIT_JSON = {
  "component": true,
  "usingComponents": {}
}
import OnekitComponent from '../../weixin2vue/OnekitComponent';
//import wx from '../weixin2vue/wx';
//let global = {};
export default OnekitComponent(ONEKIT_JSON, {}, {
  properties: {
    DATA: Object
  },
  attached: function () {
    if (this.DATA) {
      var data;
      if (typeof (this.DATA) == "string") {
        data = JSON.parse((('{' + this.DATA)) + '}');
      } else {
        data = this.DATA;
      }
      this.setData(data);
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
