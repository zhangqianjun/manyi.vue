
import '../styles/app.scss';


import index from "./components/index.vue";
import main from "./components/main.vue";

import person from "./components/person.vue";
import nodes from "./components/node.vue";
import lang from "./components/lang.vue";
import my from "./components/my.vue";
import myMain from "./components/my-main.vue";
import login from "./components/my-login.vue";

import detail from "./components/detail.vue";
import Vue from "./libs/vue.js";
import VueRouter from "./libs/vue-router.js";
Vue.use(VueRouter);

let router = new VueRouter();

let App = Vue.extend({});
//配路由

router.map({
	'/':{
		component:index,
		subRoutes:{
			'/':{
			component:main
			
			},
			'/person':{
				component:person
			},
			'/node':{
				component:nodes
			},
			'/lang':{
				component:lang
			},
			'/my':{
				component:my,
				subRoutes:{
					'/':{
						component:myMain
					},
					'/login':{

						component:login
					}
				}
			},
			'/detail':{
					component:detail
			}
		}
		
	}
});

router.start(App,'body');
