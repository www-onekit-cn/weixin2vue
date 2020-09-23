<template>
		<div
		:class="['onekit-canvas',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		>
		<slot></slot>
		</div>
</template>

<script>
import onekit_behavior from "../../behaviors/onekit_behavior"
export default{
    name: "onekit-canvas",
    mixins:[onekit_behavior],
	props:{
		"type":{
			type:String,
			defaul:""
		},
		"canvas-id":{
			type:String,
			defaul:""
		},
		"disable-scroll	":{
			type:Boolean,
			defaul:false
		},
	
		
	},
	methods:{
		
	}
}
</script>

<style>
</style>
