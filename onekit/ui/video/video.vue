<template>
		<div
		:class="['onekit-video',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		>
		<slot></slot>
		</div>
</template>

<script>
import onekit_behavior from "../../behaviors/onekit_behavior"
export default{
    name: "onekit-video",
    mixins:[onekit_behavior],
	props:{
	
		
	},
	methods:{
		
	}
}
</script>

<style>
</style>
