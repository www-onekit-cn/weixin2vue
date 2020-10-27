<template>
		<div
		:class="['onekit-navigation-bar',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		>
		<slot></slot>
		</div>
</template>

<script>
import onekit_behavior from "../../behaviors/onekit_behavior"
import wx from '../../wx'
export default{
    name: "onekit-navigation-bar",
    mixins:[onekit_behavior],
		props:{
			'title': String,
			'loading': Boolean,
			'font-color': String,
			'background-color':String,
			'color-animation-duration': {
				type:Number,
				default: 0
			},
			'color-animation-timing-func':{
				type:Number,
				default:'linear'
			}			
		},
		methods:{
			mounted(){
				const title = this.title
				wx.setNavigationBarTitle({
					title
				})
			}
		}
}
</script>

<style>
</style>
