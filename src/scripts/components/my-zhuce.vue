<template>
	<div class="my-view-top">
		<ul>
			<li v-link="{path:'/index/my/login'}"> < </li>
			<li>注册</li>
			<li> </li>
		</ul>
	</div>
	<div class="my-zhuce-view">
		<ul>
			<li><p><span>手机号</span></p><input v-on:click="classChange"type="text"v-model="telphone" placeholder="请输入手机号" :class="inputBorder==1?bd:''"/></li>
			<li><p>验证码</p><input type="text" placeholder="请输入验证码"/></li>
			<li><p>短信验证码</p><input type="text" placeholder="请输入短信验证码"/></li>
			<li><p>密码</p><input type="text" placeholder="请输入密码"  v-model="password1" placeholder="edit me"/></li>
			<li><p>确认密码</p><input type="text" placeholder="请确认密码"  v-model="password2" placeholder="edit me"/></li>
			<li v-on:click="zhuce">注册</li>
			
		</ul>
		
		
		
		
	</div>
</template>
<script>

	
	export default{
		data(){
			return{
				telphone:'',
				password1:'',
				password2:'',
				inputBorder:0,
				items:[]
			}
		},
		ready:function(){
			this.$http.get("/rest/user")
			.then((res)=>function(){
				res.data.data=this.items;
			})
		},
		methods:{
			zhuce(){
				if(this.items==[]){
					
					this.items={"user":this.telphone,"password":this.password1};
					console.log(this.list);
				}else{
					this.items=this.items.concat({"user":this.telphone,"password":this.password1});
					console.log(this.items);
				}
				
				
				
				
			},
			classChange(){
				this.inputBorder=1;
			}
		}
	}
</script>