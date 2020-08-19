<template>
  <div>Test</div>
</template>
<script>
import wx from "./onekit/wx";
import OnekitPage from "./onekit/OnekitPage";

export default OnekitPage({
  onLoad() {
    wx.request({
      url: "https://route.showapi.com/9-5", //仅为示例，并非真实的接口地址
      data: {
        x: "",
        y: "",
      },
      header: {
        "content-type": "application/json", // 默认值
      },
      success(res) {
        console.log(res.data);
      },
    });
  },
  // onLoad: function () {
  //   wx.downloadFile({
  //     url: 'https://example.com/audio/123', //仅为示例，并非真实的资源
  //     success (res) {
  //       // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
  //       if (res.statusCode === 200) {
  //         wx.playVoice({
  //           filePath: res.tempFilePath
  //         })
  //       }
  //       console.log(res);
  //     }
      
  //   })
  // }
});
</script>