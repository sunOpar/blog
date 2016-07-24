import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import banner from './components/banner.vue'
import gallery from './components/gallery.vue'
import content from './components/content.vue'
import blog from './components/blog.vue'
import articleList from './components/articleList.vue'
import article from './components/article.vue'
// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)
const router = new VueRouter()
// 路由map
router.map({
	'/':{
		component:banner
		},
	'/gallery':{
		component:gallery
	},
	'/blog':{
		component:blog,
		subRoutes:{
			"/":{
			component:articleList
			},
			"/:articleName":{
				component:article
			}	
		}
	}
})
router.redirect({
	'*':'/'
})
router.start(App,'app')
