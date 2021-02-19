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
  import picker from './multi-picker';
  import { eventBus } from '../../../../eventBus'
  import Vue from 'vue'
  import PickerTools from '../tools'
  export default {
    name: 'multilevel',
    props: {
      data: {
        default: '',

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
      data: {
        deep: true,
        handler(data) {
          // eslint-disable-next-line vue/no-mutating-props
          this.data = data;
          let pickerComponent
          typeof (Vue) == 'undefined' ? pickerComponent = require('vue').default.extend(picker): pickerComponent = Vue
            .extend(picker);
          this.pickerComponent = new pickerComponent();
          this.pickerComponent.vm = this.pickerComponent.$mount();
          document.body.appendChild(this.pickerComponent.vm.$el);
          this.pickerComponent.vm.parent = this;
          this.multilevelInit()
        }
      }
      // data(data) {
      //   // eslint-disable-next-line vue/no-mutating-props
      //   this.data = data;
      //   let pickerComponent
      //   typeof (Vue) == 'undefined' ? pickerComponent = require('vue').default.extend(picker): pickerComponent = Vue
      //     .extend(picker);
      //   this.pickerComponent = new pickerComponent();
      //   this.pickerComponent.vm = this.pickerComponent.$mount();
      //   document.body.appendChild(this.pickerComponent.vm.$el);
      //   this.pickerComponent.vm.parent = this;
      //   this.multilevelInit()
      // }
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
        disabled: false,
        changeOldValue: []
      }
    },
    methods: {
      multilevelInit() {
        for (let i = 0; i < this.column; i++) {
          this.pickerComponent.vm.columnArr.push(this.data[i])
        }
      },
      showPicker() {
        if (this.disabled) return
        this.pickerComponent.vm.showPicker()
      },
      change(data) {
        if (this.changeOldValue.length < this.data.length) {
          for (let i = 0; i < this.data.length; i++) {
            this.changeOldValue.push(0)
          }
        }
        this.newChangeValue = data.map(item => item.index)
        if (this.newChangeValue.length === this.changeOldValue.length) {
          let columIndex = PickerTools.findColumIndexDiffrent(this.newChangeValue, this.changeOldValue)
          let valueIndex = PickerTools.findValueIndexDiffrent(this.newChangeValue, this.changeOldValue)
          if (JSON.stringify(columIndex) !== undefined) {
            const data = {
              column: columIndex,
              value: valueIndex
            }
            eventBus.$emit('onekit-mutiPicker-change', data)
          }
          this.changeOldValue = this.newChangeValue
        }
        this.$emit('change', data);
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