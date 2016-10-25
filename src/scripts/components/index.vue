<template>
<div>
	
	<div class="index-view">
		<router-view></router-view>
    </div>
	
	<footer id="footer">
		<ul>
			<li :class="curIndex==$index?'light':''" v-for="item in items" v-on:click="changePage($index)" v-link="{path:item.path}">
				<img v-bind:src="curIndex==$index? item.imgs:item.img" />
				<span>{{item.b}}</span>
			</li>
			</ul>
	</footer>
</div>
	
</template>

<script>
import {changeIndex} from '../vuex/actions';
import {getIndex} from '../vuex/getters';
export default{
	vuex:{
		getters:{
			curIndex:getIndex
		},
		
	
		actions:{
			change:changeIndex
		}
	},
	data(){
		return{
			cur:0,
			items:[
				{path:'/index',img:'/images/main/main.gif',imgs:'/images/main/main-light.gif',b:'艺术品'},
				{path:'/index/person',img:'/images/main/person.gif',imgs:'/images/main/person-light.gif',b:'艺术家'},
				{path:'/index/node',img:'/images/main/node.gif',imgs:'/images/main/node-light.gif',b:'资讯'},
				{path:'/index/lang',img:'/images/main/lang.gif',imgs:'/images/main/lang-light.gif',b:'展讯'},
				{path:'/index/my',img:'/images/main/my.gif',imgs:'/images/main/my-light.gif',b:'我'},
			]
		}
	},
	methods:{
		changePage(i){
			this.cur=i;
		}
	}
}


</script>