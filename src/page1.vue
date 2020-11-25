<template>
  <page id="app">

    <!-- <input type="file" ref="eFile" @change="eFile_change" /> -->
    <div class="test" @Tap="test">aaaaaaaaaaaaaaaa</div>
  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage';
  // import JSZip from 'jszip'
  // let saveAs = require('file-saver');
  import wx from '../weixin2vue/wx';
  export default OnekitPage({}, {

    test() {
      wx.chooseVideo()
    },

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
      // wx.chooseImage({
      //   count: 9,
      //   sourceType: 'album',
      //   success: res => {
      //     console.log('okkkkk', res)
      //   },
      //   fail: err => {
      //     console.log('baddd', err)
      //   }
      // })

      wx.chooseMessageFile({
        count: 10,
        // type: 'file',
        extensions: 'md',
        success: res => {
          wx.compressImage({
            src: res.tempFiles[0].path,
            quality: 80,
            success: res => {
              console.log(res)
            }
          })
        }
      })

      // wx.chooseImage({
      //   count: 10,
      //   sourceType: 'album',
      //   sizeType: 'compressed',
      //   success: res => {
      //     console.log(res)
      //   }
      // })
    }


  });
</script>

<style>

</style>