<template>
  <div
       :class="['onekit-checkbox-group',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import { eventBus } from '../../eventBus'
  export default {
    name: "onekit-checkbox-group",
    mixins: [weixin_behavior, onekit_behavior],
    data() {
      return {
        chckboxArr: []
      }
    },
    props: {
      'value': { type: Array, },
      'disabled': { type: Boolean },
      'bindchange': { type: Function }
    },
    model: {
      prop: "value",
      event: "select"
    },
    watch: {
      value(newValue) {
        this.$emit("change", newValue);
      }
    },
    methods: {
      selectItem(item) {
        const { value } = this;
        this.$emit("select", [...value, item]);
        console.log([...value, item])
      },
      deleteItem(item) {
        const { value: selectItems } = this;
        this.$emit(
          "select",
          selectItems.filter(selectitem => selectitem !== item)
        );
      }
    },
    mounted() {
      eventBus.$on('onekit-foem-item-reset', () => {
        this.chckboxArr.length = 0
      })
      eventBus.$on('checkBox-val-confirm', data => {
        this.chckboxArr.push(data)
        eventBus.$emit('onekit-checkbox-submit', this.chckboxArr)
      })
      eventBus.$on('checkBox-val-cancel', data => {
        const index = this.chckboxArr.indexOf(data)
        this.chckboxArr.splice(index, 1)
        eventBus.$emit('onekit-checkbox-submit', this.chckboxArr)
      })

    }
  }
</script>

<style scoped>

</style>