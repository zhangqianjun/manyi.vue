<template>
<div class="main-top-border">
<div class="main-top">
		<img src="/images/main/logo.png" />
		<input type="text" value="搜索城市" />
		<div><img src="/images/main/yes.gif"/></div>
</div>
</div>
<div class="lang-view">
	
	<div class="person-top-border">
	<div class="person-top">
		<dl v-for="item in items"  :class="yes==$index? 'dldl' : ''">
			<dt v-on:click="changes($index)">
				<span>{{item.odt}}</span>
				<img v-bind:src="yes==$index? item.imgs:item.img" />
			</dt>
			<dd>{{item.dd1}}</dd>
			<dd>{{item.dd2}}</dd>
			<dd>{{item.dd3}}</dd>
			<dd>{{item.dd4}}</dd>
			<dd>{{item.dd5}}</dd>
			<dd>{{item.dd6}}</dd>
			<dd>{{item.dd7}}</dd>
			<dd>{{item.dd8}}</dd>
			<dd>{{item.dd9}}</dd>
			<dd>{{item.dd10}}</dd>
			<dd>{{item.dd11}}</dd>
		</dl>
	</div>
	</div>
	<div class="lang-view-content">
	<div class="lang-picture">
		<ul>
			<li v-for="lis in list">
				<img v-bind:src="lis.img" />
				<span>{{lis.title}}</span>
			</li>
		</ul>
		<div class="node-button" v-on:click="more">
    		查看更多
    	</div>
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
	var scroll;
	export default{
		vuex: {
      		actions: {
        		change: changeIndex
      		}
   		},
		data(){
			return{
				yes:5,
				list:[],
				items:[
					{img:'/images/person/sanjiao.png',imgs:'/images/person/sanjiao-light.png',odt:'艺术分类',dd1:'全部分类',dd2:'水彩画',dd3:'书法',dd4:'水彩画',dd5:'水彩画',dd6:'书法',dd7:'水彩画',dd8:'书法',dd9:'水彩画',dd10:'书法',dd11:'书法'},
					{img:'/images/person/sanjiao.png',imgs:'/images/person/sanjiao-light.png',odt:'艺术分类',dd1:'全部分类',dd2:'水彩画',dd3:'书法',dd4:'水彩画',dd5:'水彩画',dd6:'书法',dd7:'水彩画',dd8:'书法',dd9:'水彩画',dd10:'书法',dd11:'书法'},
					{img:'/images/person/sanjiao.png',imgs:'/images/person/sanjiao-light.png',odt:'艺术分类',dd1:'全部分类',dd2:'水彩画',dd3:'书法',dd4:'水彩画',dd5:'水彩画',dd6:'书法',dd7:'水彩画',dd8:'书法',dd9:'水彩画',dd10:'书法',dd11:'书法'}
				]
			}
		},
		ready:function(){
			this.$http.get('/rest/lang')
			.then((res)=>{
				this.list=res.data.data;
			}),
			
			setTimeout(function(){
				scroll=new IScroll('.lang-view-content',{
					click:true
				})
			},500);
			this.change(3);
			
		},
		methods:{
			changes(i){
				if(i==this.yes){
					this.yes=5;
				}else{
					this.yes=i;
				}
			},
			more(){
				var that=this;
				this.$http.get('/rest/lang')
			.then((res)=>{
				that.list=that.list.concat(res.data.data);
			});
			setTimeout(function(){
				scroll.refresh();
			},500)
			},
			scrollTop(){
				scroll.scrollTo(0,0);
			}
		}
	}
</script>