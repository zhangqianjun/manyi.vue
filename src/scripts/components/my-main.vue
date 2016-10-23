<template>
<div class="my-view-top">
	<ul>
		<li v-link="{path:'/'}"> < </li>
		<li>提示</li>
		<li v-link="{path:'/'}"><img src="/images/my/main.gif"/></li>
	</ul>
</div>
<div class="my-view">
	<img src="/images/my/login_bg.jpg" />
	<div class="my-view-bg">
	
	<img src="/images/my/login_tips_txt.png" />
	<span>赶紧 登陆 购买吧</span>
	<div class="login" v-link="{path:'/my/login',params:{},query:{}}">登录</div>
	</div>
</div>
</template>