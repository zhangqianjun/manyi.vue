<template>
	<div class="main-top-border">
	<div class="main-top">
		<img src="/images/main/logo.png" />
		<input type="text" value="搜索城市" />
		<div><img src="/images/main/yes.gif"/></div>
	</div>
	</div>
<div class="node-view">
	<div class="node-view-content">

    <ul class="node-picture">
       <li><img src="/images/node/Spreadtrum1.jpg"/></li>
       <li><img src="/images/node/Spreadtrum2.jpg"/></li>
       <li><img src="/images/node/Spreadtrum3.jpg"/></li>
       <li><img src="/images/node/Spreadtrum4.jpg"/></li>
       <li><img src="/images/node/Spreadtrum5.jpg"/></li>
       <li><img src="/images/node/Spreadtrum6.jpg"/></li>
    </ul>

    <div class="node-list">
    	<ul>
    		<li v-for="item in list">
    			<div class="left"><img v-bind:src="item.img"/></div>
    			
    			<div class="right">
    				<h3>{{item.title}}</h3>
	    			<em>{{item.p}}</em>
	    			<p>
	    				<span>{{item.date}}</span>
	    				<b>{{item.number}}</b>
	    			</p>
	    			
    				
    			</div>
    			
    		</li>
    	</ul>
    	
    </div>
    <div class="node-button" v-on:click="moreList">
    		查看更多
    </div>
</div>
</div>
</template>
<script>
	var Vue=require("../libs/vue.js");
	var VueResource=require("../libs/vue-resource.min.js");
	Vue.use(VueResource);
	var iscroll;
	export default{
		data(){
			return{
				list:[]
			}
		},
		ready:function(){
			this.$http.get("./mock/node.json")
			.then((res)=>{
				this.list=res.data;
			}),
			setTimeout(function(){
				iscroll=new IScroll('.node-view',{
					click:true
				})
			},500)
		},
		methods:{
			moreList(){
				console.log(0);
				var that=this;
				//var oldList=this.list;
				this.$http.get("./mock/node.json")
				.then((res)=>{
				that.list=that.list.concat(res.data);
				setTimeout(function(){
					iscroll.refresh();
				},500)
			});
			}
		}
	}
</script>