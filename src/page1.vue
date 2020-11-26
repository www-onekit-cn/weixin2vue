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

      wx.previewMedia({
        sources: ['https://www.baidu.com/link?url=8IpUAiMq7UwPdDUXae2zG9xppmgIR_UufW8CRAtEi_-6hOBu7Og6_njv7_-U0AjgKdAA1Etwp4Su23XkIBT78obrzoun1Y1AsXwIojGLBBrn4nFa3atom_zUDhIVjjmpV7l-6X57CKi5IgcmJsdlEWbfhZXjJXpqWbzPd1TvWw36ic7dMjYOdVlmv5xpWUfUGIPZtCa462uj2PFN42FwZvL0Cxc-Ax8NNLQ6IGbzfhUUPm_2zX7DH94E3YvD3jLoYp0ycErmhXR2aQd7e-guvdo_dD6YfZJH84hsqMkm5AwISiHGcINSX9oQoW1syM2BknFEXtUUcJPgMqkKtMekkZbEsLer6B3Kv25U8lLRjbi4gtU7U29BaVqYAULua3-yUtXpm7-bOnMsdwzn5myDHqkyne2HnhEuOwQ4y33lb2Jcwzm2faarpqMup5LAHS4W2foXGvRWP5qdIpNdqGO2Sa4BZejW1rKR6gWpW1guzYRhVZsLdTKtR52bcR6oCRECTo9yK6KMCBMe4Js2uq_wWM1dWAc3e7dX1dOo5pmjSktXNJ23r02DK15TEpIyifcnFNt8TiTorSM7-VaQlH6ki_swfJ4PD1bEQSOjysx6qcG&timg=&click_t=1606378591944&s_info=1342_765&wd=&eqid=c9e173580003197b000000065fbf645a',
          'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3589606448,3423653224&fm=115&gp=0.jpg'
        ],
        success: res => {
          console.log(res)
        },
        fail: e => {
          console.log(e)
        }
      })
    }


  });
</script>

<style>

</style>