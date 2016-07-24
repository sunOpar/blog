---
title: 线性理解原型对象
categories: [JavaScript]
date:2016-03-05
url:2016-03-05-linear-know-prototype
---

# 简介
本文试图通过对对象的需求来线性地理解原型对象。
首先来看一下创建对象的方法有哪些。
## 创建对象的方法

1.定义并创建对象的实例

```
var dog=new Object();-------创建dog对象
//也可以写成 dog = Object();
var dog.name="diudiu"---------dog对象属性

```
2.通过对象字面量方法创建对象

```
 var dog={
	 name:"diudiu",
     bite:function(){}
 };
```

注意：{}中属性/值之间用':'而非'='，属性之间用','间隔。

3.使用构造函数定义对象，然后创建对象实例
什么是构造函数？
指有一个内部属性[construct]，通过new可以创建的那些函数

```
function dog(name,habit){
    this.name=name;
    this.habit=habit;
    this.bite = function(){
    alert('name');
}
}
var a=new dog("diudiu","bite");
```

在使用构造函数时，执行了如下过程：
1)执行new构造函数时，后台实际上执行了 new Object()的操作。
2)将构造函数的作用域给新对象。
3)执行构造函数内代码。
4)后台直接返回新对象。
可以看出，通过构造函数创建的对象，每个对象都有自己的独立空间。

## 原型对象

通过上面可以看出，通过构造函数创建对象，每一个对象都有一个独立的空间，这对于构造函数的属性来说是一件好事，而对于构造函数的方法来说，每个对象都新建了一个方法，这显然是资源浪费。因此这时可以通过原型对象来解决此问题。

### 1.什么是原型对象？

原型对象既然是对象，其实质也是构造函数的实例对象，每个构造函数在创建之初都拥有一个`prototype`属性，这个属性引用了一个对象，就是原型对象。对于构造函数的实例对象而言，其原型对象内部的属性和方法是共享的，因此我们可以实现修改一处，影响全部（该构造函数下的全部实例对象）。


```
function person(name,age){
     this.name = name;
     this.age  =age;
}
person.prototype.habit = function(hobbies){
     alert("I like movie");
}
person.prototype.leg = 'two';
```

### 2.访问属性原则

如果有一个属性，我们既在构造函数中创建了它，又在原型对象中和实例中创建了它，我们是访问的时候究竟是哪一个呢？
答案是：【就近原则】
具体表现为：实例属性>构造函数属性>原型对象属性。

### 3.动态创建原型对象

上面的代码看上去怪怪的（构造函数和原型对象分开书写），其实可以将他们封装在一起书写。
在构造函数内部创建原型对象：

```
function person(name,age){
     this.name = name;
     this.age = age;
     person.prototype.addr = '苏州';
     person.prototype.habit = function(hobbies){
         alert('i like movie');}
}
```

但是在实例化该函数时会发现每一次实例化都会执行一遍prototype。虽然不会开辟新的空间，但是也会额外的增加运行时间，因此可以给每一个原型对象属性上加上一条判断语句。

```
if(this.prototype.show==undefine)
```

### 4.使用字面量创建原型对象

```
function person(name,age){
     this.name = name;
     this.age = age;
     var person.prototype = {
          addr:'苏州',
          habit:function(hobbies){alert('i like movie');}
     }     
}
```

需要注意的是，通过字面量创建原型对象，不是给原有原型对象【添加/删除】属性或方法，而是【重写】。如果在这(字面量创建原型对象)之前，通过构造函数创建一个对象时，这时该函数的`prototype`为空，那么该对象的`_proto_`（原型链）在那个时候指向的函数的`prototype`也为空，你在之后通过字面量创建对象对象，其指向还是没有变，因此之前创建的对象并不会具有你之后通过字面量创建的prototype属性。

可能有人会问`proto`是什么意思，其实很好理解。

## proto、constructor、prototype三者之间关系


【_proto_】是一个原型链指针，指向对象的父亲，即构造函数的原型对象。而上一层的原型对象结构依然如此。如果想要获取该对象的某一个属性，同时该对象没有这个属性，那么系统会向该对象的父亲获取，还没有继续向上，一直到Object，而`Object._proto_= null`,表示原型链最顶端，如此形成了原型链结构，同时也解释了为什么所有JavaScript对象都具有object的基本方法。ps:倘若是通过字面量创建的对象，那么默认【proto】指向`Object.prototype`

【prototype】指向【函数】的丈夫，即函数的原型对象。而原型对象中有一个【constructor】属性，又指回构造函数。如果一个对象被通过构造函数创建出来，那么其_proto_指向其【构造函数】的【prototype】，也就是构造函数的原型对象。

## 总结

原型对象可以看做是一个函数的公共仓库，该函数的所有实例对象都拥有它，对象是通过`_proto`这把钥匙来指向该仓库。但是他们并不是恒等的。例如我们先让函数和对象同时指向一个仓库，然后更改函数的`prototype`，让对象仍然指向原先那个仓库，那么他们俩便不等了。




