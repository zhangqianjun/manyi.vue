<template>
	<div class="my-view-top">
		<ul>
			<li v-link="{path:'/index/my'}"> < </li>
			<li>登录</li>
			<li> </li>
		</ul>
	</div>
	<div class="my-login-view">
		<ul>
			<li><img src="/images/my/li1.gif"/><input type="text" placeholder="请输入手机号" v-model="user"/></li>
			<li><img src="/images/my/li2.gif"/><input type="password" placeholder="请输入密码" v-model="password"/></li>
			<li v-on:click="login" v-link="{path:path,query:{id:user}}">登录</li>
			<li><a v-link="{path:'/index/my/zhuce'}">注册新用户</a><a>忘记密码</a></li>
			<li>合作账户登录</li>
			<li><span></span><i>QQ登录</i></li>
		</ul>
		
		
		
		
	</div>
	<div v-on:click="ok">
		<vue-dialog v-if="dialog"></vue-dialog>
	</div>
	
</template>
<script>
import VueDialog from '../plugins/vue-dialog';
	 Vue.use(VueDialog);
	export default{
		data(){
			return{
				user:'',
				password:'',
				list:[],
				yes:false,
				path:'',
				dialog:false
			}
		},
		ready:function(){
			
			this.$http.get('/rest/user')
			.then((res)=>{
				this.list=res.data.data;
				
			})
		},
		methods:{
			
			login(){
				
				
				for(let item in this.list){
					
					if((this.user==this.list[item].user)&&(this.password==this.list[item].password)){
					this.yes=true;
					this.path='/index/my/myCenter';
					
					
					
				}else{
					this.dialog=true;
					this.path='/index/my/login';
				}
				}
				
			},
			ok(){
				this.dialog=false;
			}
		}
	}
</script>