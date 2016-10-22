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
// const router = new VueRouter()
// 路由map

var router = new VueRouter({
  routes: [
    { path: '/', component: App ,
      children:[
      { path:'/',component: banner},
      { path: '/gallery', component: gallery },
      { path: '/blog', component: blog,
        children:[
          { path: '/', component: articleList},
          { path: '/:articleName', component: article}
        ]
      },  
      ]
    },
	{ path: '*', redirect:'/'}
  ]
})
new Vue({
	el:'app',
	router:router,
	render: h => h('router-view')
})

