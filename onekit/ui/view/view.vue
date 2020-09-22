<template>
		<div
		:class="['onekit-view',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		:hover-class="hoverClass"
		:hover-stop-propagation="hoverStopPropagation"
		:hover-start-time="hoverStartTime"
		:hover-stay-time="hoverStayTime"
		@click="view_click"
		>
		<slot></slot>
		</div>
</template>

<script>
export default{
	name: "onekit-view",
	props:{
		"onekitClass":{
			type:String,
			default:''
		},
		"onekitStyle":{
			type:String,
			defaul:''
		},
		"onekitId":{
			type:String,
			defaul:''
		},
		hoverClass:{
			type:String,
			default: "none"
		},
		hoverStopPropagation:{
			type:Boolean,
			default:false
		},
		hoverStartTime:{
			type:Number,
			default:50
		},
		hoverStayTime:{
			type:Number,
			default:400
		}
		
	},
	methods:{
		// view_click:function(e){
		// 	this.$emit('click',e.details)
		// },
		view_click:function(e){
			//console.log("image load success",e)
			this.$emit('tap',e.details)
		},
	}
}
</script>

<style>
</style>
