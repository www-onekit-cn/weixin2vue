<template>
  <page id="app">

  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage';
  import wx from '../weixin2vue/wx';
  export default OnekitPage({}, {


    onLoad() {
      wx.request({
        url: 'http://192.168.146.1:3000/test',
        responseType: 'arraybuffer',
        success(res) {
          console.log('request111111', res.data)
        },
        fail(err) {
          console.log('page 1  1111 failed', err)
        }
      })

      wx.request({
        url: 'http://192.168.146.1:3000/test',
        success(res) {
          console.log('request222222', res.data)
        },
        fail(err) {
          console.log('page 2 2222 failed', err)
        }
      })

    }

  });
</script>

<style>
  .navigator-hover {
    color: blue;
  }

  .other-navigator-hover {
    color: red;
  }

  .test_title {
    color: aqua;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    margin: 10px 0;
    text-shadow: 0 1px 1px black;
  }

  .test_children {
    display: block;
    text-align: center;
    /* width: 100%; */
    border: 1px solid black;
    margin-top: 20px;
    padding: 20px;
    font-weight: bold;
    font-size: 20px;
  }

  .test_children:last-child {
    margin-bottom: 100px;
  }

  .success {
    background: darkseagreen;
  }

  .wrong {
    background: palegoldenrod;
  }

  .err {
    background: tomato;
  }
</style>