<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./editor.css"></style>
<script src="./editor.js"></script>
<template>
<onekit-page>
<onekit-view class="container" :style="'height:'+editorHeight+'px;'">
	<onekit-editor id="editor" class="ql-container" :placeholder="placeholder" @statuschange="onStatusChange" @ready="onEditorReady">
	</onekit-editor>
</onekit-view>

<onekit-view class="toolbar" catchtouchend="format" :hidden="false" :style="'bottom: '+isIOS ? keyboardHeight : 0+'px; height: '+toolBarHeight+'px; padding-bottom: '+isIOS ? safeHeight : 0+'px'">
	<onekit-i class="iconfont icon-charutupian" catchtouchend="insertImage"></onekit-i>
	<onekit-i :class="'iconfont icon-format-header-2 '+formats.header === 2 ? "ql-active" : """ data-name="header" :data-value="2"></onekit-i>
	<onekit-i :class="'iconfont icon-format-header-3 '+formats.header === 3 ? "ql-active" : """ data-name="header" :data-value="3"></onekit-i>
	<onekit-i :class="'iconfont icon-zitijiacu '+formats.bold ? "ql-active" : """ data-name="bold"></onekit-i>
	<onekit-i :class="'iconfont icon-zitixieti '+formats.italic ? "ql-active" : """ data-name="italic"></onekit-i>
	<onekit-i :class="'iconfont icon-zitixiahuaxian '+formats.underline ? "ql-active" : """ data-name="underline"></onekit-i>
	<onekit-i class="iconfont icon--checklist" data-name="list" data-value="check"></onekit-i>
	<onekit-i :class="'iconfont icon-youxupailie '+formats.list === "ordered" ? "ql-active" : """ data-name="list" data-value="ordered"></onekit-i>
	<onekit-i :class="'iconfont icon-wuxupailie '+formats.list === "bullet" ? "ql-active" : """ data-name="list" data-value="bullet"></onekit-i>
</onekit-view>
</onekit-page>
</template>