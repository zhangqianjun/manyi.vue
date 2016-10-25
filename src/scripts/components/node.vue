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
<div class="scroll-view-top" v-on:click="scrollTop">
	<p><img src="/images/main/top.gif"/></p>
	<p>顶部</p>
</div>
</template>
<script>

	import { changeIndex } from "../vuex/actions";
	var iscroll;
	export default{
		vuex: {
      		actions: {
        		change: changeIndex
      		}
    	},
		data(){
			return{
				list:[]
			}
		},
		ready:function(){
			this.$http.get("/rest/nodeList")
			.then((res)=>{
				this.list=res.data.data;
			}),
			setTimeout(function(){
				iscroll=new IScroll('.node-view',{
					click:true
				})
			},500);
			this.change(2);
			
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
			},
			scrollTop(){
				iscroll.scrollTo(0,0);
			}
		}
	}
</script>