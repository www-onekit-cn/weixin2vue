<!--
 * @Autor: YeWei Wang
 * @Date: 2020-10-26 11:15:47
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: input
 * @LastEditTime: 2020-10-27 15:56:49
 * @Version: 小王的实习
 * @FilePath: \weixin2vue-master\onekit\ui\input\input.vue
-->
<template>
  <input
         :class="['onekit-input',onekitClass]"
         :style="onekitStyle"
         :id="onekitId" />
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-input",
    mixins: [weixin_behavior, onekit_behavior],
    props: {


    },
    methods: {

    }
  }
</script>

<style>
</style>