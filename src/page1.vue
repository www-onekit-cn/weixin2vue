<template>
  <page id="app">

    <input type="file" ref="eFile" @change="eFile_change" />

  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage';
  // import JSZip from 'jszip'
  // let saveAs = require('file-saver');
  import wx from '../weixin2vue/wx';
  export default OnekitPage({}, {
    eFile_change(e) {
      const file = e.target.files[0]
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
      // wx.uploadFile({
      //   url: 'http://192.168.146.1:3000/file_upload',
      //   name: 'file',
      //   filePath: file.name,
      //   formData: {
      //     'user': 'test'
      //   },
      //   success: (res) => {
      //     console.log('上传成功', res)
      //   }
      // })

    },

    onLoad() {

      wx.downloadFile({
        url: 'http://127.0.0.1:3000/demo.jpg',
        success: ({ tempFilePath }) => {
          wx.uploadFile({
            url: 'http://127.0.0.1:3000/file_upload',
            name: 'file',
            filePath: tempFilePath,
            formData: {
              'user': 'test'
            },
            success: (res) => {
              console.log('上传成功', res)
            },
            fail: (err) => {
              console.log('upload faild', err)
            }
          }).abort()

        },
      }).onProgressUpdate(res => {
        console.log('xxx', res)
      })
    }


  });
</script>

<style>

</style>