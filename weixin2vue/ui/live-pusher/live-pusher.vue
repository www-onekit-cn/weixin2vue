<template>
	<video :class="['onekit-live-pusher',onekitClass]" :style="onekitStyle" :id="onekitId">

	</video>
</template>

<script>
	import weixin_behavior from "../../behaviors/weixin_behavior"
	import onekit_behavior from "../../behaviors/onekit_behavior"
	import wx from '../../wx'
	// import Vue from 'vue'
	// const wx = new WX(Vue.prototype)
	export default {
		name: "onekit-live-pusher",
		mixins: [weixin_behavior, onekit_behavior],
		props: {


		},
		methods: {

		},
		mounted() {
			wx.chooseVideo({
				sourceType: 'camera',
				success: res => {
					console.log(res)
				}
			})
		}
	}
</script>

<style>
</style>