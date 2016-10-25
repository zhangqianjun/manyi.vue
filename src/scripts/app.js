
import '../styles/app.scss';

import guide from "./components/guide.vue";
import index from "./components/index.vue";
import main from "./components/main.vue";

import person from "./components/person.vue";
import nodes from "./components/node.vue";
import lang from "./components/lang.vue";
import my from "./components/my.vue";
import myMain from "./components/my-main.vue";
import login from "./components/my-login.vue";
import zhuce from "./components/my-zhuce.vue";
import myCenter from "./components/my-center.vue";

import detail from "./components/detail.vue";


let router = new VueRouter();
import store from "./vuex/store";

let App = Vue.extend({store:store});
//配路由

router.map({
	'/':{
		component:guide
	},
	'/index':{
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
					},
					'/zhuce':{
						component:zhuce
					},
					'/myCenter':{
						component:myCenter
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
