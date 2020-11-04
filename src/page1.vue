<template>
  <page id="app">
    <onekit-view onekit-class="section section_gap">
      <onekit-label>
        <onekit-view onekit-class="section__title">type="switch"</onekit-view>

        <onekit-switch :checked="switch1Checked" @change="switch1Change" checked></onekit-switch>

      </onekit-label>
    </onekit-view>

  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage';

  var pageData = {
    data: {
      switch1Checked: true,
      switch2Checked: false,
      switch1Style: '',
      switch2Style: 'text-decoration: line-through'
    }
  };
  for (var i = 1;
    (i <= 2); ++i) {
    (function (index) {
      pageData[`switch${index}Change`] = function (e) {
        console.log(`switch${index}发生change事件，携带值为`, e);
        var obj = {};
        this.setData(obj);
        obj = {};
        this.setData(obj);
      };
    })(i);
  }
  export default OnekitPage({}, pageData);
</script>

<style>

</style>