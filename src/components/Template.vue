<template>
  <div>
    <div :is='tem'></div>
    <slot></slot>
  </div>
</template>

<script>
  import * as wx_temp from '../templates'
  import Vue from 'vue'


  const optionsApi = {
    name: 'TEMPALATE',
    data: () => ({
      tem: ''
    }),
    props: {
      IS: {
        type: String
      },
      DATA: {
        type: Object
      }
    },
    created() {
      const res = this.isRes()
      this.tem = res
      // console.log(this.DATA, 'options API DATA')
      // console.log(this.res, 'options API')
    },
    methods: {
      isRes() {
        const res = eval(this.IS)
        return res
      }
    }
  }

  const data = { ...optionsApi }

  // console.log(data)

  const tempB = wx_temp.tempB(data)

  Vue.component('tempB', {
    template: tempB
  })

  export default optionsApi
</script>