<template>
	<router-view></router-view>
	
</template>
<script>


import { changeIndex } from "../vuex/actions";

export default{
	vuex:{
		actions:{
			change:changeIndex
		}
	},
	ready:function(){
		this.change(4);
	}
}

</script>

