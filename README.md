# sunopar's world

## version

### v2.0.0

整个项目迁移至vue2

### v1.0.1

删除了源代码中对bootstrap和jquery的依赖，自己搭建栅格化布局，采用rem
作为单位。

### v1.0.0

适配桌面端和移动端
![show](./src/assets/show.gif)

## 前言

现在的前端是百家争鸣一片繁荣，新东西新概念层出不穷，前端的规范也一直在积极跟进。一个礼拜之前，我对webpack，node，vue是什么毫无概念，一个礼拜之后我利用它们制作出该博客，并对它们的使用和规范有了一定的了解。
我想说，前端的更新日新月异，也许会让很多前端er没有安全感，其实不然，只要掌握好基础，对于这些框架和工具的使用学习成本并不高，当然，如果你仅仅会使用是远远不够的，你需要的是对他们的原理进行分析理解，才能成为一个真正的工程师。希望所有奋斗在一线的前端同学，都能在这最好的时代，发光发热。


## 技术栈

### 工程化工具

- [npm](https://www.npmjs.com/)
- [Node](https://nodejs.org/)

通过Node完成只要创建好博客，输入`npm run publish`，便会自动遍历博客目录所有内容，将指定内容转码操作成我所需要的数据存放在指定文件夹。

包管理
- [webpack](https://github.com/webpack/webpack)

1. 使用CommonJS和ES6混合的模块化加载方案
2. 对图片等较小的资源进行base64转码
3. 对于文件的更新采用hash码

### 前端

- [Bootstrap](http://www.bootcss.com/)
- [jQuery](http://jquery.com/)
- [Vue](http://vuejs.org.cn/)
- [Vue-router](https://github.com/vuejs/vue-router)---路由管理
- [Vue-source](https://github.com/vuejs/vue-resource)---Ajax管理
- [SASS](http://www.w3cplus.com/sassguide/)
- [ES6](http://www.es6js.com/)---使用bebel编译

## 前端详解

### Direcotry
```
|- _posts-------存放博客
|- bin ------webpack打包后的地方
|- node_modules-----存放npm下载的第三方包
|- src ------本地资源路径，也就是你写代码的地方
  |- components ------存放你的vue组件
  |- lib ------存放你的第三方非npm下的插件,及公共资源
  |- filter------存放过滤器
  |- App.vue ------整个vue入口
  |- main.js ------整个页面的入口
  |- router.js------路由管理
|- data 页面存放的json数据
|- webpack.config.js ------webpack配置文件
|- package.json ------项目说明，module等的配置文件
|- index.html ------项目页面
```
### software

- [Git for windows](https://git-scm.com/download/win)
- [nodejs](http://nodejs.cn/download/)
- [sublime](http://www.sublimetext.com/3)
- [ruby](https://www.ruby-lang.org/zh_cn/downloads/)

### npm&webpack config
npm
主要是模块的管理和一些命令的集成(dev&build)

webpack.config.js

- loader:
 - vue:load vue
 - raw:load html
 - babel:load es6
 - flie-loader&url-loader:load images
- external:
extract third party by `<link>` or `<script>`
- devtool:
source-map
- plugin:
 - HtmlWebpackPlugin:creation of HTML files to serve your webpack bundles
 - ExtractTextPlugin:move every stylesheet into a separate css output files
 - CommonsChunkPlugin:Split your commons code into vendor and application

更多详情可以看我的`webpack.config.js`文件。

### 页面分析

components目前分为
```
|- header ---头部
|- content ----主体
  |- banner ---- 首页内容
  |- blog ---- 博客
    |- articleList----博客首页
    |- article -------博客详情页
  |- about ----about页面
```
banner，gallery，blog的配置使用vue-router配置

**example：**
```
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
      }
      ]
    }
  ]
})
### `publish.js`

该文件是用来遍历所有`_posts`目录里的博客，截取该博客里的
```
---
title: 人生不能等待
categories: [心路历程]
date:2015-08-20
url:2015-08-20-do-not-wait
---
```
生成`date`目录的`ArticleList.json`文件
```
{
	"articles": [
		{
			"title": "人生不能等待",
			"categories": "[心路历程]",
			"date": "2015-08-20",
			"url": "2015-08-20-do-not-wait"
		},
}
```
这样每次写完博客后，只要输入npm run publish,便会自动更新`ArticleList.json`文件，然后就可以直接用git推送到github，不需要再对源代码进行更改，以达到更高的自动化。
