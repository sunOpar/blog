---
title: yeoman-bower-grunt之间的关系
categories: [前端工程化]
date:2016-07-08
url:2016-07-08-yeoman-bower-grunt
---

## 前置技能

### Node and NPM

nodeJs就是基于谷歌v8引擎的一个javascript环境，使js不仅可以运行在浏览器端，也能在服务器端运行。

NPM(Node Package Manager)，是nodeJs的包管理工具，其主要作用就是可以利用npm下载和管理库框架之类的开发工具。

#### NPM使用

NPM主要用的命令就是`npm install`，例如：

```
npm install -g yo
```

其中可以通过加入`-g`意味着全局安装。如果直接执行`npm install`不带其他任何参数，则意味着根据当前目录中`package.json`文件的要求安装工具。


### package.json

```
{
  "name":"xxx",
  ...
  "dependencies":{},
  "devDependencies": {
    "grunt": "^0.4.5"
  },
  "engines":{
  	"node": ">=0.10.0"
  },
  "script":{
    "test": "grunt test",
    "install":""
  }
  ...
}
```

如上就是一个简单的package.json文件，该文件采用json(JavaScript Object Notation)语法.
- `name`就是该package的名字;
- `dependencies`是该项目在生产环境中所依赖的包;
而`devDependencies`就是该项目在开发环境中所依赖的包。当在该文件目录下键入`npm install`时，就会根据devDependencies下的内容下载所需工具。这里为空是因为虽然我们的项目是一个node项目，但是将来在开发的时候是一个站点，声明是没有意义的。如上例子中`^0.4.5`意味着下载以0.开头的最新版本——0.x.x。而如果版本号为`~0.4.5`,则意味着下载以0.4开头的最新版本——0.4.x;
- `engines`是指项目所需的node版本必须大于0.10.0；
- `scrpit`，指可以直接运行的脚本命令,在上面的例子我们输入`npm test`，就会执行`grunt test`命令

### 前端集成解决方案

很简单，所谓前端集成解决方案,就是一套包含框架和库，帮助开发者高效构建web应用程序的工作流。而如何实现前端集成解决方案呢，这就用到了下面的Yeoman，Bower和Grunt/Gulp，这些都是通过命令行实现的；也有可视化的工具，如[FIS](http://fis.baidu.com)，[Spirit](http://alloyteam.github.io/Spirit)。

## Yeoman

### 什么是Yeoman

Yeoman是现代webapp的脚手架工具。

### Yeoman的作用

Yeoman可以方便的为你初始一个项目，包括生成项目文件，代码结构，包依赖，初始页面的例子，等等，他预制了大量的最佳实践——generators，并自动将其与工具整合起来供你使用。

### generators

根据你项目所需，比如你的项目中要用angular，那么你可以到Yeoman的官网中，找到`Discovering generators`子页面，在里面找到angular的generators，找到适合你的最佳实践，其中带有八字胡的generators表示为Yeoman官方推出。除了最佳实践，Yeoman还是为我们统一了一些现阶段公认的例如代码校验，测试，压缩这些基本工作的流程。

### 使用Yeoman

```
npm install -g generator-angular
yo
```

首先用npm下载generator，这里下载的是angular
直接在控制台输入yo便会自动出现提示，根据提示便可以根据你需要的generator生成项目。

**文件分析：**

- package.json

Yeoman构建的项目是基于node的项目，对于基于node的项目，首先看的是package.json文件，这里包含这个项目最直观的描述。上面已经说过了，这里就不再赘述。

- Gruntfile.js

就是Grunt的配置文件

- bower.json

bower的json文件，告诉bower该下载哪些配置包

- .bowerrc

bower本身的配置文件，比如线上的框架组件拉下来要存放的目录，可以在这个文件里配置

- .gitignore

指忽略不上传到git的文件

- .gitattributes

git的配置文件

- .editorconfig

第三方工具，指定编辑器如tab，代码缩进之类的操作

- test文件

项目的自动化测试

- app文件

存放我们项目的源文件，包括html，css，js，img之类

## Bower

### 什么是Bower

Bower是web包管理器。

### Bower的作用

一个web站点可以包括：框架，库以及一些公共部分等，而Bower就是用来跟踪管理这些。例如你有一个项目，他需要jQueryv1.2.1我们一般的做法是去官网下载指定的jquery版本(当然也可以用cdn),但是用了bower可以轻松的根据需要自动下载所需版本库。

### 使用Bower

**利用bower下载jquery**

```
bower instal jquery
```

首先bower会查找jquery是否在它的注册库里，然后找到对应的github地址，然后下载安装最新稳定版本。

如果组件没有在bower注册，那么可以尝试其他安装方式

1. github短写安装 jquery/jquery
2. 项目完整的github地址安装 https://github.com/jquery/jquery.git
3. 通过url进行安装 http://libs.baidu.com/jquery/1.9.0/jquery.js

bower.json好处：

- 版本仓库中只需要保存bower.json文件，其他成员把文件check到本地时，输入bower isntall，就会按照bower.json配置项下载包。

- 不占用公共库空间

- 保持公共库的最新稳定版本


**生成bower.json配置文件**


```
bower.init
```

根据提示一步步进行即可。

**安装包并写入devDependencies**

```
bower install angular --save-dev
```

不加dev就会写入dependencies

**.bowerrc**

directory为bower下载包的目录
proxy：代理如:"http//proxy.tencent.com:8080"
timeout:根据网速修改时间

## Grunt

### 什么是Grunt

Gurnt是javascript的任务运行器。其含有庞大的生态圈，可以提供各种你所需要的插件。

### Grunt的作用

对于需要重复执行的任务，例如压缩，编译，单元测试等，可以使用自动化工具来减少不必要的时间精力，而Grunt由于庞大的生态圈，可以在其找到各种你所需的自动化插件。

### 使用Grunt

安装：

```
npm install -g grunt-cli
```

gruntcli的作用是调用与gruntfile同一目录的grunt。

```
npm install grunt --save-dev
npm isntall grunt-contrib-jshint --save-dev
```

以上为一个简单的grunt以及插件下载

#### gruntfile结构

##### wrapper函数

所写代码必须放在此函数内

```
module.exports = function(grunt){
  
}
```


#### task,target,option,

target为task的目标，，而具体行为有option决定。

#### task

```
grunt [taskName]
```

默认会运行task下所有target。

```
grunt [taskName]:[targetName]
```

运行task下指定target

直接输入Grunt会执行default的task

task可以多个组合

一些常用task

```
<!-- 文件拷贝 -->
npm install grunt-contrib-copy --save-dev

<!-- 文件删除 -->
npm install grunt-contrib-clean --save-dev
```

*参考文章*

- http://ninghao.net/blog/2023
- http://colobu.com/2014/08/29/modern-web-development-tools/
- http://www.cnblogs.com/chyingp/p/npm.html