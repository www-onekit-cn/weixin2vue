<template>
  <page id="app">

    <!-- <input type="file" ref="eFile" @change="eFile_change" /> -->
    <page id="app">
      <!-- <onekit-video :src="tempFilePath"></onekit-video>
      <onekit-image :src="origintempFilePath"></onekit-image> -->
      <!-- <img src="./kiko_20200309184916.jpg" alt=""> -->

    </page>
  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage';
  import video from '../weixin2vue/ui/video/video.vue';
  // import JSZip from 'jszip'
  // let saveAs = require('file-saver');
  import wx from '../weixin2vue/wx';
  export default OnekitPage({
    components: { video },
  }, {

    data: {
      tempFilePath: '',
      origintempFilePath: ''
    },

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

    onLoad: function() {

      // wx.previewImage({
      //   current: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1720212253,1779103205&fm=115&gp=0.jpg', // 当前显示图片的http链接
      //   urls: ['https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1720212253,1779103205&fm=115&gp=0.jpg', 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1720212253,1779103205&fm=115&gp=0.jpg'],
      //   success: res => {
      //     console.log(res)
      //   } // 需要预览的图片http链接列表
      // })

      wx.saveImageToPhotosAlbum({
        filePath: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1720212253,1779103205&fm=115&gp=0.jpg',
        success: res => {

          console.log(res)
        }
      })
    }


  });
</script>

<style>

</style>