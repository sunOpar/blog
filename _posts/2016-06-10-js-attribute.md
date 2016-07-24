---
title: 理解对象之attribute
categories: [JavaScript]
date:2016-06-10
url:2016-06-10-js-attribute
---
# 理解对象之attribute

这里所谈的atrribute，为属性的属性，也可以称之为属性的特征。这些特性的定义是为了实现js引擎用的，简单的说就是这些特性告诉js引擎，你遇到这些属性，该怎么办。


## 1.属性类型

例子：

```
Object.defineProperty(obj, 'name',{
     writable: false;
     value: 'abc';
}
```

ps：不要在IE8下使用。

设置后该值永远为abc，且不可修改。

1. 对象中每个属性都有内部特征，如[[configurable]]
2. 该特征为内部属性，不能直接访问。
3. 该特征通过Object.defineProperty(对象名，属性名，描述对象）;
4. 内部特征有2种：数据属性和访问器属性。


### 1.1数据属性

目的：
便于理解js对象，可以根据我们的需要更改属性的特性，如让属性只读

1. 包含一个数据值的位置。在这个位置可以读取和写入值。
2. 有四个描述行为的特性：Configurable, Enumerable, Writable, Value;
3. 设置了一些特性后(如writable:false)，不履行规则在严格模式下会报错
4. 调用Object.defineProperty如果不指定四个特性，则都默认为false。
5. 多数情况不会使用该方法更改特性，但有助于理解JavaScript对象。

### 1.2访问器属性

目的：
便于理解js对象，可以根据我们的需要更改属性的特性，如让属性的设置符合规则才写入，否则读取的值为我们要求的值。

1. 不包含数据值；而是包含一对getter和setter(非必需)
2. 有四个特性：Configurable, Enumerable, Get, Set;
3. 读取访问器属性时使用getter，负责返回有效值；写入访问器属性时调用setter并传入新值，该函数负责决定处理规则。
4. 如果不同时设置getter,setter，那么会导致属性只读或者只能写不能读；

例子：

```
var book = {
     _year: 2004,
     edition: 1 
}
Object.defineProperty(book,'year',{
     get: function(){
          return this._year;
     },
     set: function(newValue){
          if(newValue > 2004){
               this._year = newValue;
               this.edition += 1;
          }
     }
});
book.year = 2005;
console.log(edition)    //2;
```

解释：
1._year 下划线是一个典型的写法，用于表示（告诉，说明）该属性只能通过对象方法访问，并不是说真的只能通过方法访问，而是一个约定俗成的规则。
2.上述通过将访问器属性year设置为2005，该值（year）包含getter函数（返回_year值）setter函数(通过计算来确定正确版本)，当值符合我们的需要，将_year设置为该值，并且edition+1,如果不符合要求，则将原先的_year返还。

### 1.3定义多个属性

目的： 由于有可能为对象定义多个属性的可能性很大，该方法可以通过描述符一次性定义多个属性。

例子：

![demo](http://i2.piimg.com/567571/47312abdafe6bf9b.png)

以上代码定义了2个数据属性和一个访问器属性。

## 3.读取属性的特性

目的： 就是读取属性的特性，知道属性是只读的还是可以更改的。
var description = Object.getOwnPropertyDescription(book,'_year');
console.log(description.value)   //2004
