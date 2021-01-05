<template>
  <div :class="['onekit-picker',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <transition>
      <div class="picker-container" v-show="pickerState">
        <div class="btn-group">
          <div class="cancel btn">
            取消
          </div>
          <div class="confirm btn">确定</div>
        </div>
        <div class="picker-context">
          <div class="picker-item"
               v-for="(item, index) in range"
               :key="index">
            {{ item }}
          </div>
        </div>
      </div>
    </transition>
    <div class="child" @click="childClick">
      <slot>
      </slot>
    </div>

  </div>

</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-picker",
    mixins: [weixin_behavior, onekit_behavior],
    created() {
      // console.log(this.$slots)
    },
    data() {
      return {
        pickerState: false,
      }
    },
    props: {
      'hander-text': {
        type: String,
      },
      'mode': {
        type: String,
        default: 'selector'
      },
      'disabled': {
        type: Boolean,
        default: false
      },
      'bindcancel': {
        type: Function
      },
      'range': {
        type: Array || Object,
        default: Array
      }
    },
    methods: {
      childClick() {
        this.pickerState = !this.pickerState
      }
    }
  }
</script>

<style scoped>
  .child {
    border: 1px solid red;
  }

  .picker-container {
    width: 100%;
    text-align: center;
    background: rgb(36, 35, 35);
    color: #fff;
    height: 390px;
    position: absolute;
    bottom: 0;
    z-index: 999;
    overflow: hidden;
  }

  .btn-group {
    display: flex;
  }

  .btn-group .btn {
    flex: 1;
  }

  .btn-group .cancel {
    text-align: left;
    margin: 20px 0 0 18px;
    font-size: 16px;
    color: rgb(106, 119, 108);
  }

  .btn-group .confirm {
    text-align: right;
    margin: 20px 18px 0 0;
    color: rgb(31, 146, 50);
  }

  .picker-container .picker-context {
    width: 100%;
    height: 304px;
    margin: 60px 0;
    overflow-y: scroll;
  }

  .picker-context .picker-item {
    margin: 40px 0;
    font-size: 13px;
    font-weight: lighter;
  }
</style>