---
title: for循环效率对比
categories: [JavaScript]
date:2016-03-05
url:url:2016-03-05-for-circle-efficiency-comparison
---

## 三种for循环

1.【普通】for循环

```
for(var i = 0;i < arr.length;i++){
	console.log(arr[i]);
}
```

2.【加强版】for循环

```
for(var i = 0,len = arr.length;i < len;i++){
	console.log(arr[i]);
}
```

3.【for-in循环】

```
fir(var i in arr){
	console.log(arr[i]);
}
```

## 时间对比

通过以下代码来计算三个循环的运行时间

```
function test1(){
var arr = new Array(1000000);
var date1 = new Date();
for(var i =0;i<arr.length;i++){
arr[i]=0;
}
var date2 = new Date();
for(var i =0,j=arr.length;i<j;i++){
arr[i]=1;
}
var date3 = new Date();
for(var i in arr){
	arr[i]=2;
}
var date4 = new Date();
var for1_time = (date2 - date1);
var for2_time = (date3 - date2);
var for3_time = (date4 - date3);
console.log(for1_time); //Firefox:10   Chrome:34
console.log(for2_time);	//Firefox:4    Chrome:5
console.log(for3_time);	//Firefox:750  Chrome:516
}
test1();
```

分析：加强for循环之所以运行时间最短是因为，它相对于普通for循环，少了每一次循环都需要的方法解析(arr.length)

## 结论

三者循环的时间关系
**加强for循环 < 普通for循环<`for-in`循环**


