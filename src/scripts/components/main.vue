

<template>
	<div class="main-top-border">
	<div class="main-top">
		<img src="/images/main/logo.png" />
		<input type="text" value="搜索城市" />
		<div><img src="/images/main/yes.gif"/></div>
	</div>
	</div>
	<div id="index-scroll" style="overflow: hidden;">
	<div class="scroll-content">
		<div class="head">
                    <img v-bind:src="imgArrow"/>
                    <span>下拉刷新...</span>
        </div>
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
	   	<div class="swiper-pagination">
	   		<ul>
	   			<li></li>
	   			<li></li>
	   			<li></li>
	   			
	   		</ul>
	   	</div>
	   	</div>
	                
	            
	    <div class="title">
	            <img src="/images/main/logo.gif" />
	            <span>推荐作品</span>
	    </div>
	    <!--<div class="main-content" id="lifescroll"> 
	    	
	    	<ul id="waterfall">
	    		<li v-for="item in list" v-link="{path:'/index/detail',query:{id:item.id}}">
	    			
	    			<img v-bind:src="item.img"/>
	                    
	                    <b>{{item.title}}</b>
	                    <div class="li-bot">
	                        <span>{{item.price}}</span>
	                        <img src="/images/main/shopping.gif"/>
	                    </div>
	               
	    		</li>
	    	</ul>
	    </div>-->
	    <div class="main-content-border">
		<div class="main-content-div">
	    	
	    	
	    	
	    	<div v-for="item in list" class="content"v-link="{path:'/index/detail',query:{id:item.id}}">
	    		<img v-bind:src="item.img" />
	    		<b>{{item.title}}</b>
	    		<div class="li-bot">
	                        <span>{{item.price}}</span>
	                        <img src="/images/main/shopping.gif"/>
	            </div>
	    	</div>
	</div>
	</div>
	    <div class="foot">
                  <img v-bind:src="imgArrow"/>
                  <span>上拉加载更多...</span>
        </div>
   </div>
</div>
<div class="scroll-view-top" v-on:click="scrollTop">
	<p><img src="/images/main/top.gif"/></p>
	<p>顶部</p>
</div>
   </template>
<script>
	import commonUtil from '../utils/common.util.js';
    import waterfallUtil from '../utils/waterfall.util.js';
	
	
	import {changeIndex} from "../vuex/actions";
	
	var mySwiper=null;
	var myScroll;
	export default{
		
		vuex:{
			actions:{
				change:changeIndex
			}
		},
		data(){
			return{
				list:[],
				imgArrow:'/images/arrow.png'
			}
			
		},
		ready:function(){
			var that=this;
			this.$http.get('/rest/list')
			.then((res) =>{
				this.list=res.data.data;
				console.log("sdf");
				
				// DOM 更新后，图片加载完 实例化 IScroll
                    Vue.nextTick(function() {
                        commonUtil.isAllLoaded('#index-scroll', function() {
                            myScroll = new IScroll('#index-scroll', {
                                probeType: 3,
                                mouseWheel: true,
                                click: true
                            });

                            myScroll.scrollTo(0, -35);

                            var head = $('.head img'),
                                topImgHasClass = head.hasClass('up');
                            var foot = $('.foot img'),
                                bottomImgHasClass = head.hasClass('down');

                            myScroll.on('scroll', function() {
                                var y = this.y,
                                    maxY = this.maxScrollY - y;
                                if (y >= 0) {
                                    !topImgHasClass && head.addClass('up');
                                    return '';
                                }
                                if (maxY >= 0) {
                                    !bottomImgHasClass && foot.addClass('down');
                                    return '';
                                }
                            });

                            myScroll.on('scrollEnd', function() {
                                if (this.y >= -35 && this.y < 0) {
                                    myScroll.scrollTo(0, -35);
                                    head.removeClass('up');
                                } else if (this.y >= 0) {
                                    head.attr('src', './images/ajax-loader.gif');

                                    // ajax下拉刷新数据
                                    that.$http.get('/rest/list')
                                        .then((res) => {
                                          that.list = res.data.data.concat(that.list);
                                          myScroll.scrollTo(0, -35);
                                          head.removeClass('up');
                                          head.attr('src', './images/arrow.png');
                                          Vue.nextTick(function() {
                                            myScroll.refresh();
                                          });
                                        })
                                }

                                var self = this;
                                var maxY = this.maxScrollY - this.y;
                                if (maxY > -35 && maxY < 0) {
                                    myScroll.scrollTo(0, self.maxScrollY + 35);
                                    foot.removeClass('down')
                                } else if (maxY >= 0) {
                                    foot.attr('src', '/images/ajax-loader.gif');
                                    //ajax上拉加载数据
                                    that.$http.get('/rest/list')
                                        .then((res) => {
                                          that.list = that.list.concat(res.data.data);
                                          foot.removeClass('down');
                                          foot.attr('src', './images/arrow.png');
                                          Vue.nextTick(function() {
                                            myScroll.refresh();
                                            myScroll.scrollTo(0, self.maxScrollY + 35);
                                          });
                                        });
                                }
                            });
                        });
                    });
                });

            // 足球生活：waterfall 瀑布流
//          var lifeScroll = new IScroll('#lifescroll', {
//            probeType: 3,
//            mouseWheel: true
//          });
//          waterfallUtil(lifeScroll,);
//
//          // css3waterfall 数据拉取
//          this.$http.get('/rest/listcss3waterfall')
//              .then((res) => {
//                  this.beautylist = res.data.data;
//                  Vue.nextTick(function() {
//                      commonUtil.isAllLoaded('#css3waterfall', function() {
//                        var myScroll = new IScroll('#css3waterfall');
//                      });
//                  });
//              });
				
				mySwiper=new Swiper("#index-swiper",{
					autoplay:1000,
					pagination : '.swiper-pagination',
					onSlideChangeStart:function(){
						that.curIndex=mySwiper.activeIndex;
					}
				});
				
			
				
		
			this.change(0);
		},
		methods:{
			scrollTop(){
				myScroll.scrollTo(0,-35);
			}
			
		}
	}
		
</script>