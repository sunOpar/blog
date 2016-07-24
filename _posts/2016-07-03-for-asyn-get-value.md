---
title: 解决for循环闭包取值问题
categories: [JavaScript]
date:2016-07-03
url:2016-07-03-for-asyn-get-value
---

# 解决for循环闭包取值问题

## 代码

```
fuction doanimate(){
	for(var i = 0;i < 5;i++){
		elment[i].animate({
			top:'50px'
			},500,'linear',function(){
				element[i].css('top','0px');
		})
	}	
}

```

## 解析代码

### 代码目的

很简单，用的是jQuery库，目的是利用for循环，循环一共给5个元素设置动画，然后在动画结束后设置回调函数使其`top`值立即变为0。

### 问题

代码实际运行时只执行了animate动画，之后的回调函数没有执行，也就是元素的`top`值并没有变回0。

### 原因

animate内部实际上采用的是setInterval，利用时间比来动态移动元素属性占比。因此该方法是异步的。而在js中，遇到异步代码不是立即执行，而是先将它挂起，等同步代码执行完再执行的，这样就导致每一个`element[i].animate`取到了i的值，但是由于回调函数其实是一个闭包，这就导致回调函数中保存的是整个`doanimate`函数的变量对象，最终使得每一个回调函数中的i的值都是【5】。
### 解决方法

```
function doanimate(){
	for(var i = 0;i < 5;i++){
		(function(i){
			elment[i].animate({
				top:'50px'
				},500,'linear',function(){
					element[i].css('top','0px');
			})
		})(i);
		
	}
}
```

解决闭包保存整个变量对象的方法很简单，因为在js中，函数的参数是按值传递的，它传递的就是i当时是那个值，即0~4，因此在`animate`套上一层匿名函数，便解决该问题。