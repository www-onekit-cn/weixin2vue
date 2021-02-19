<template>
  <div class="xx-picker" @click="showPicker">
  </div>
</template>
<style>
  .xx-picker {
    position: absolute;
    height: 100%;
    width: 100%;
  }
</style>
<script>
  import picker from './selector-picker';
  import { eventBus } from '../../../../eventBus'
  import Vue from 'vue'
  export default {
    name: 'multilevel',
    props: {
      data: {
        default: ''
      },
      placeholder: {
        type: String,
        default: '请选择地址'
      },
      separator: {
        type: String,
        default: '-'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      doneText: {
        type: String,
        default: '完成'
      },
      column: {
        type: String,
        default: '3'
      }
    },
    watch: {
      data(data) {
        // eslint-disable-next-line vue/no-mutating-props
        this.data = data;
        let pickerComponent
        typeof (Vue) == 'undefined' ? pickerComponent = require('vue').default.extend(picker): pickerComponent = Vue
          .extend(picker);
        this.pickerComponent = new pickerComponent();
        this.pickerComponent.vm = this.pickerComponent.$mount();
        document.body.appendChild(this.pickerComponent.vm.$el);
        this.pickerComponent.vm.parent = this;
        this.multilevelInit();
      }
    },
    destroyed() {
      this.pickerComponent.vm.distory = true;
    },
    data() {
      return {
        openPicker: false,
        pickerText: '',
        pickerComponent: '',
        index: [],
        changeData: '',
        disabled: false
      }
    },
    methods: {
      multilevelInit() {
        for (let i = 0; i < this.column; i++) {
          this.pickerComponent.vm.columnArr.push([])
        }
        if (this.column >= 1) this.pickerComponent.vm.columnArr[0] = this.data;
        if (this.column >= 2) this.pickerComponent.vm.columnArr[1] = this.data[0].children;
        if (this.column >= 3) this.pickerComponent.vm.columnArr[2] = this.data[0].children[0].children;

      },
      showPicker() {
        if (this.disabled) return
        this.pickerComponent.vm.showPicker()
      },
      change(data) {
        if (data[0].refresh) this.index[0] = data[0].index;
        if (data[1] && data[1].refresh) this.index[1] = data[1].index;
        if (data[0] && !data[0].refresh && data[0].index != this.index[0]) {
          if (this.column >= 2) {
            this.pickerComponent.vm.columnArr[1] = this.data[data[0].index].children;
            if (this.column >= 3) {
              this.pickerComponent.vm.columnArr[2] = this.data[data[0].index].children[0].children;
            }

            this.pickerComponent.vm.column++;
            this.index[0] = data[0].index;
          }

        }
        if (data[1] && !data[1].refresh && data[1].index != this.index[1]) {
          this.pickerComponent.vm.columnArr[2] = this.data[data[0].index].children[data[1].index].children;
          this.pickerComponent.vm.column++;
          this.index[1] = data[1].index;
        }
        if (data[2] && !data[2].refresh && data[2].index != this.index[2]) this.index[2] = data[2].index || 0;
        this.changeData = data;
        this.$emit('change', data);
        eventBus.$emit('onekit-picker-change', data[this.index].index)
      },
      done() {
        this.pickerText = [];

        for (let i = 0; i < this.changeData.length; i++) {

          this.pickerText.push(this.changeData[i].name);
        }
        this.pickerText = this.pickerText.join(this.separator);

        this.$emit('done', this.changeData)
      }
    },
    created() {
      this.disabled = eventBus.disabled
    }
  }
</script>