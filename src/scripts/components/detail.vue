<template>

	<div class="detail-view-top">
		<ul>
			<li></li>
			<li></li>
		</ul>
	</div>
<div class="detail-scroll-border">
<div class="detail-scroll">

	<div class="detail-view">
		<ul>
			<li><img v-bind:src="params.img"/></li>
			<li>{{params.name}}</li>
			<li>{{params.size}}</li>
			<li>{{params.price}}</li>
			<li><img v-bind:src="params.autorPicture"/><span>{{params.autor}}</span></li>
			<li>{{params.jieshao}}</li>
			
		</ul>
		
	</div>
	<div class="title">
	            <img src="/images/main/logo.gif" />
	            <span>相关作品</span>
	</div>
	<div class="main-content">
	    	
	    	<ul>
	    		<li v-for="item in params.zuopin" v-link="{path:'/detail',query:{id:item.id}}">
	    			
	    			<img v-bind:src="item.img"/>
	                    
	                    <b>{{item.title}}</b>
	                    <div class="li-bot">
	                        <span>{{item.price}}</span>
	                        <img src="/images/main/shopping.gif"/>
	                    </div>
	               
	    		</li>
	    	</ul>
	</div>
</div>
</div>

<div class="detail-view-bottom">
	<ul>
		<li><span>价格:<br/></span>{{params.price}}</li>
		<li>加入购物车</li>
		<li>立即购买</li>
	</ul>
</div>
</template>
<script>
	var Vue=require("../libs/vue.js");
	var VueResource=require("../libs/vue-resource.min.js");
	Vue.use(VueResource);
	
	export default{
		data(){
			return{
				params:[]
			}
		},
		ready:function(){
			this.$http.get('./mock/'+this.$route.query.id+'.json')
			.then((res)=>{
				this.params=res.data;
			}),
			setTimeout(function(){
				new IScroll('.detail-scroll-border');
			},500)
		}
	}
</script>