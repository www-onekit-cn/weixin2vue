<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./image.css"></style>
<script src="./image.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-form>
      <onekit-view class="page-section">

        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">图片来源</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-picker :range="sourceType" @change="sourceTypeChange" :value="sourceTypeIndex" mode="selector">
                <onekit-view class="weui-input">{{sourceType[sourceTypeIndex]}}</onekit-view>
              </onekit-picker>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">图片质量</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-picker :range="sizeType" @change="sizeTypeChange" :value="sizeTypeIndex" mode="selector">
                <onekit-view class="weui-input">{{sizeType[sizeTypeIndex]}}</onekit-view>
              </onekit-picker>
            </onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">数量限制</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-picker :range="count" @change="countChange" :value="countIndex" mode="selector">
                <onekit-view class="weui-input">{{count[countIndex]}}</onekit-view>
              </onekit-picker>
            </onekit-view>
          </onekit-view>
        </onekit-view>

        <onekit-view class="weui-cells">
          <onekit-view class="weui-cell">
            <onekit-view class="weui-cell__bd">
              <onekit-view class="weui-uploader">
                <onekit-view class="weui-uploader__hd">
                  <onekit-view class="weui-uploader__title">点击可预览选好的图片</onekit-view>
                  <onekit-view class="weui-uploader__info">{{imageList.length}}/{{count[countIndex]}}</onekit-view>
                </onekit-view>
                <onekit-view class="weui-uploader__bd">
                  <onekit-view class="weui-uploader__files">
                    <onekit-block v-for="(image) in imageList">
                      <onekit-view class="weui-uploader__file">
                        <onekit-image class="weui-uploader__img" :src="image" :data-src="image" @tap="previewImage"></onekit-image>
                      </onekit-view>
                    </onekit-block>
                  </onekit-view>
                  <onekit-view class="weui-uploader__input-box">
                    <onekit-view class="weui-uploader__input" @tap="chooseImage"></onekit-view>
                  </onekit-view>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-view>

      </onekit-view>
    </onekit-form>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>