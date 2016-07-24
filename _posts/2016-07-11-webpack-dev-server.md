---
title: webpack之如何配置实时更新
categories: [前端工程化]
date:2016-07-11
url:2016-07-11-webpack-dev-server
---
# webpack之如何配置实时更新

## 前期准备

### 插件下载

- `webpack-dev-server`

可以通过npm下载

```
npm install webpack-dev-server --save-dev
```

### 需要有一个webpack配置文件

- `webpack.config.js`

直接创建在根目录下即可


## 开干

配置webpack.config.js

```
var path = require("path");
module.exports = {
  entry: {
    app: ["./app/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devServer:{
		contentBase:'./src'
  }
};
```

### 文件目录

- app

`app`文件夹为初始化入口的目录，它与`build`目录的`bundle.js`一起绑定

- build

`bundle.js`所在的文件夹


### 配置理解

- path模块

path.solve(from,to);

可以把这个理解成命令行的cd命令;
__dirname：当前目录。

- entry

`app`文件夹里的`main.js`作为程序的入口点，绑定`build`文件夹的`bundle.js`

- output

**path:**该目录为bundle.js所在路径，也就是我们代码输出的地址（因为我们的代码最终输出给bundle.js,然后html加载bundle.js）。

**publicPath:**这里是打包后的文件地址。

>  this option is useful in the dev server, but its intention is for asynchronously loading script bundles in production. Say you have a very large single page application (for example Facebook). Facebook wouldn't want to serve all of its javascript every time you load the homepage, so it serves only whats needed on the homepage. Then, when you go to your profile, it loads some more javascript for that page with ajax. This option tells it where on your server to load that bundle from

这个选项的目的是异步加载捆绑的脚本。假如你有一个很大的SPA，比如facebook，它并不想每次加载主页的时候监视全部脚本，所以它只监视主页需要的插件，然后，当你要看`简介`页面的时候，他会加载简介页面的脚本，而这个选项就是告诉你去哪里监视加载这些脚本。
-- devServer

这是该插件的配置，因为我都通过命令行来写了，这里做一个演示

**contentBase:**表示你要查看以及监听的文件


### 输入指令

```
webpack webpack-dev-server --hot --progress --colors --port 8050 --inline 
```

可以把这个指令放到package.json的`script`下。