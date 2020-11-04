<template>
  <page id="app">
    <onekit-checkbox-group @bindchange="checkboxChange">
      <onekit-lable v-for="(item,index) in items" :key="index" onekit-class="checkbox">
        <onekit-checkbox :value="item.name"
                         :checked="item.checked"
                         color="pink">
        </onekit-checkbox>
        {{item.value}}
      </onekit-lable>
    </onekit-checkbox-group>

  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage'
  export default OnekitPage({}, {

    data: {
      items: [{
          name: 'USA',
          value: '美国'
        },
        {
          name: 'CHN',
          value: '中国',
          checked: true
        },
        {
          name: 'BRA',
          value: '巴西'
        },
        {
          name: 'JPN',
          value: '日本'
        },
        {
          name: 'ENG',
          value: '英国'
        },
        {
          name: 'TUR',
          value: '法国'
        }
      ]
    },
    checkboxChange: function (e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    }
  })
</script>

<style>

</style>