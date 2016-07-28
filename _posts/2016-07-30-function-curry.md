---
title: 函数柯里化
categories: [JavaScript]
date:2016-07-30
url:2016-07-30-function-curry
---

## 什么是柯里化

在计算机科学中，柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。 在直觉上，柯里化声称“如果你固定某些参数，你将得到接受余下参数的一个函数”。
柯里化实现的原理

在函数式编程语言中，将函数可以当做对象传递调用，利用闭包实现。

## 柯里化的适用场景

当你要经常执行一个函数，但是这个函数有一些东西永远不变时。

### 例子：

比如你要判断浏览器是否支持addEventListener，如果不支持用attach,再不支持用on，判断完之后再绑定`click`事件正常情况下这么写

```
var addEvent = (element, type, handler)=> {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachHandler) {
            element.attachHandler('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    }
var ele = document.querySelector('div');
addEvent(ele,'click',doSth);
```
柯里化写法
```
var addEvent = ()=> {
        if (window.addEventListener) {
            return (type, handler )=>{
               element.addEventListener(type, handler, false);  
            }
        } else if (window.attachHandler) {
          return (type, handler )=>{
            element.attachHandler('on' + type, handler);
          }
        } else {
               return (type, handler )=>{
                 element['on' + type] = handler;
               }
        }
    }

var ele = document.querySelector('div');
var event = addEvent(ele)(doSth);
```