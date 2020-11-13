<template>
  <page id="app">
    <!--
    <onekit-view @Tap="test_save">Save</onekit-view>
    <onekit-view @Tap="test_read">Read</onekit-view>
    -->
    <!--
    <input type="file" ref="eFile" @change="eFile_change" />
    -->
  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage';
  // import JSZip from 'jszip'
  // let saveAs = require('file-saver');
  import wx from '../weixin2vue/wx';
  export default OnekitPage({}, {
    eFile_change() {
      const file = this.$refs.eFile.files
      console.log(file)
      //
      // var zip = new JSZip();
      // zip.file("Hello.txt", "Hello World\n");
      // zip.file(file.name, file);
      // zip.generateAsync({ type: "blob" })
      //   .then(function(content) {
      //     // see FileSaver.js
      //     saveAs(content, "demo.onekit");
      //   });


    },

    onLoad() {
      /* wx.downloadFile({
         url: 'http://127.0.0.1:3000/demo.jpg',
         success: ({ tempFilePath }) => {
           wx.saveFile({
             tempFilePath,
             success: ({ savedFilePath }) => {
               this.setData({ savedFilePath })
             }
           })
         }
       })*/
      //   const that = this

      wx.request({
        url: 'http://192.168.146.1:3000/test',
        responseType: 'arraybuffer',
        success(res) {
          console.log(res)
        },
        // fail: err => {
        //   console.log(err)
        // }
      }).onHeadersReceived(() => {
        console.log('++++++++')
      })
      //   wx.downloadFile({
      //     url: 'http://192.168.146.1:3000/demo.jpg',
      //     success(res) {
      //       console.log(res)
      //       const src = res.tempFilePath
      //       that.setData({ src });
      //     },
      //     fail: err => {
      //       console.log(err)
      //     }
      //   });
      // }
    }


  });
</script>

<style>

</style>