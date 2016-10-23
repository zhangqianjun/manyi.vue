

<template>
	<div class="main-top-border">
	<div class="main-top">
		<img src="/images/main/logo.png" />
		<input type="text" value="搜索城市" />
		<div><img src="/images/main/yes.gif"/></div>
	</div>
	</div>
	<div id="scroll-view" style="overflow: hidden;">
	<div class="scroll-content">
		<ul class="nav-view">
	        <li>
	            <img src="/images/main/sort_new1.png" />
	            <span>绘画</span>
	        </li>
	        <li>
	            <img src="/images/main/sort_new2.png"/>
	            <span>书法</span>
	        </li>
	        <li>
	            <img src="/images/main/sort_new3.png"/>
	            <span>陶瓷</span>
	        </li>
	        <li>
	            <img src="/images/main/sort_new4.png"/>
	            <span>珠宝玉石</span>
	        </li>
	        <li>
	            <img src="/images/main/sort_new5.png" />
	            <span>传统工艺</span>
	        </li>
	        <li>
	            <img src="/images/main/sort_new6.png"/>
	            <span>文玩杂项</span>
	        </li>
	
	    </ul>
	    <div class="swiper-container" id="index-swiper">
	   	<div class="swiper-wrapper">
	   		<div class="swiper-slide"><img src="/images/main/act13.png"></div>
	   		<div class="swiper-slide"><img src="/images/main/act12.jpg"></div>
	   		<div class="swiper-slide"><img src="/images/main/act11.jpg"></div>
	   		<div class="swiper-slide"><img src="/images/main/act3.jpg"></div>
	   		
	   	</div>
	   	<div class="swiper-pagination"></div>
	   	</div>
	                
	            
	    <div class="title">
	            <img src="/images/main/logo.gif" />
	            <span>推荐作品</span>
	    </div>
	    <div class="main-content">
	    	
	    	<ul>
	    		<li v-for="item in items" v-link="{path:'/detail',query:{id:item.id}}">
	    			
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
   </template>
<script>
	
	var Vue=require('../libs/vue.js');
	var VueResource=require('../libs/vue-resource.min.js');
	Vue.use(VueResource);
	
	var mySwiper=null;
	export default{
		data(){
			return{
				items:[]	
			}
			
		},
		ready:function(){
			var that=this;
			this.$http.get('/mock/list.json')
			.then((res) =>{
				this.items=res.data;
				console.log("sdf");
				setTimeout(function(){
					new IScroll('#scroll-view',{click:true});
				},500);
				
				mySwiper=new Swiper("#index-swiper",{
					autoplay:1000,
					pagination : '.swiper-pagination',
					onSlideChangeStart:function(){
						that.curIndex=mySwiper.activeIndex;
					}
				})
				
			
				
			})
			
		}
	}
		
</script>