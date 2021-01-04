<!--
 * @Autor: YeWei Wang
 * @Date: 2021-01-04 16:14:47
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-04 17:12:38
 * @Version: 1.0
 * @FilePath: \weixin2vue\weixin2vue\ui\picker-view\picker-view.vue
-->
<template>
  <div
       :class="['onekit-picker-view',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-picker-view",
    mixins: [weixin_behavior, onekit_behavior],
    props: {


    },
    methods: {

    }
  }
</script>

<style>
</style>