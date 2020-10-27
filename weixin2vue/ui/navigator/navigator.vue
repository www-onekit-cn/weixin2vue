<template>
		<div
		:class="['onekit-navigator',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		@click="div_click"
		>
		<slot></slot>
		</div>
</template>

<script>
import wx from '../../wx'
import onekit_behavior from "../../behaviors/onekit_behavior"
export default{
    name: "onekit-navigator",
    mixins:[onekit_behavior],
		props:{
		
		url:{type:String}	
		},
		methods:{
			div_click(){
				const url = this.url
				wx.navigateTo({
					url
				})
			}
		}
}
</script>

<style>
</style>
