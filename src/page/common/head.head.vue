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
/* eslint-disable */
const ONEKIT_JSON = {
  "component": true,
  "usingComponents": {}
}
import OnekitComponent from '../../../weixin2vue/OnekitComponent';
import wx from '../../../weixin2vue/wx';
global = {};
export default OnekitComponent(ONEKIT_JSON, {}, {
  properties: ["DATA"],
  onLoad: function () {
    console.log("aaaaa",this.props.DATA)
    if (this.props.DATA) {
      var data;
      if (typeof (this.props.DATA) == "string") {
        data = JSON.parse((('{' + this.DATA)) + '}');
      } else {
        data = this.props.DATA;
      }
      console.log("xxxx", data)
      this.setData(data);
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
