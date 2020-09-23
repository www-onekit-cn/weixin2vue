<template>
		<div
		:class="['onekit-switch',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		>
		<slot></slot>
		</div>
</template>

<script>
import onekit_behavior from "../../behaviors/onekit_behavior"
export default{
    name: "onekit-switch",
    mixins:[onekit_behavior],
	props:{
	
		
	},
	methods:{
		
	}
}
</script>

<style>
</style>
