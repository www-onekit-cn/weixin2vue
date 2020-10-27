<template>
		<div
		:class="['onekit-checkbox',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		>
		<slot></slot>
		</div>
</template>

<script>
import onekit_behavior from "../../behaviors/onekit_behavior"
export default{
    name: "onekit-checkbox",
    mixins:[onekit_behavior],
	props:{
		"value":{
			type:String,
			defaul:""
		},
		"disabled":{
			type:Boolean,
			defaul:false
		},
		"checked":{
			type:Boolean,
			defaul:false
		},
		"color":{
			type:String,
			defaul:"#09BB07"
		},
	
		
	},
	methods:{
		
	}
}
</script>

<style>
</style>
