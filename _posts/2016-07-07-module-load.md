---
title: 模块化加载-require.js
categories: [前端工程化]
date:2016-07-07
url:2016-07-07-module-load
---

## 为什么？

最早的时候，所有Javascript代码都写在一个文件里面，只要加载这一个文件就够了。后来，代码越来越多，一个文件不够了，必须分成多个文件，依次加载。下面的网页代码，相信很多人都见过。

```
<script src="1.js"></script>  
<script src="2.js"></script>  
<script src="3.js"></script>
<script src="4.js"></script>  
<script src="5.js"></script>  
<script src="6.js"></script> 
```

首先，加载的时候，浏览器会停止网页渲染，加载文件越多，网页失去响应的时间就会越长；其次，由于js文件之间存在依赖关系，因此 必须严格保证加载顺序（比如上例的1.js要在2.js的前面），依赖性最大的模块一定要放到最后加载，当依赖关系很复杂的时候，代码的编写和维护都会变 得困难。

使用模块化可以解决
1. 实现js文件的异步加载，避免网页失去响应；
2. 管理模块之间的依赖性，便于代码的编写和维护。

## 使用require.js

```
<script src="js/require.js" defer async="true"</script> 
<script src="js/require.js" data-main="js/main.js"></script> 
```

main为程序主入口，被首先加载

### 依赖其他模块写法

```
require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){  
// some code here  
}); 
```

require()异步加载moduleA，moduleB和moduleC，浏览器不会失去响应；它指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题。

### 自定义加载配置

**配置路径1：**

```
require.config({  
paths: {  
"jquery": "lib/jquery.min.js",  
"underscore": "lib/underscore.min.js",  
"backbone": "lib/backbone.min.js" 
}  
}); 
```

**配置路径2：**

```
require.config({  
baseUrl: "js/lib",  
paths: {  
"jquery": "jquery.min.js",  
"underscore": "underscore.min.js",  
"backbone": "backbone.min.js" 
}  
}); 
```

**配置路径3：**

```
require.config({  
paths: {  
　"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min" 
}  
}); 
```

### 定义模块写法

```
// math.js  
define(function (){  
	var add = function (x,y){  
	return x+y;  
	};
	return {  
		add: add  
	};  
}); 
```

如果模块依赖其他模块

```
define(['myLib'],function(myLib){
	function foo(){

	}
	return{
		foo:foo
	}
});
```

### 加载非规范的模块

加载backbone

```
它们的特征。
require.config({  
	shim: {  
   
		'underscore':{  
		exports: '_' 
		},  
		'backbone': {  
			deps: ['underscore', 'jquery'],  
			exports: 'Backbone' 
		}  
	}  
}); 
```

- `exports`输出变量值；
- `deps`表示依赖值。