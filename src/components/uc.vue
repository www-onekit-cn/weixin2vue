<!--
 * @Autor: YeWei Wang
 * @Date: 2021-01-05 14:52:49
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-05 14:55:49
 * @Version: 1.0
 * @FilePath: \weixin2vue\src\components\uc.vue
-->
<template>
  <div>
    <span>{{ text }}</span>
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: 'uc',
    props: {
      text: String
    }
  }
</script>

<style>

</style>