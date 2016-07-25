---
title: 扒一扒vue的数据追踪原理
categories: [前端工程化]
date:2016-07-16
url:2016-07-16-vue-date-watch-theory
---
大家都知道在angular或vue中，数据的更新会实时的反应到dom上，那么到底是什么原理呢，下面就vue探讨一下。

打开vue的官网，可以看到它关于vue如何追踪变化的原理。

> 把一个普通对象传给 Vue 实例作为它的 data 选项，Vue.js 将遍历它的属性，用 Object.defineProperty 将它们转为 getter/setter。这是 ES5 特性，不能打补丁实现，这便是为什么 Vue.js 不支持 IE8 及更低版本。
用户看不到 getter/setters，但是在内部它们让 Vue.js 追踪依赖，在属性被访问和修改时通知变化。一个问题是在浏览器控制台打印数据对象时 getter/setter 的格式化不同，使用 vm.$log() 实例方法可以得到更友好的输出。
模板中每个指令/数据绑定都有一个对应的 watcher 对象，在计算过程中它把属性记录为依赖。之后当依赖的 setter 被调用时，会触发 watcher 重新计算 ，也就会导致它的关联指令更新 DOM。

![](http://i2.piimg.com/567571/10b2d4dcf5f0f690.png)

如图，可能有同学看到这里会有点蒙，那么我们就打开源码一探究竟。

![](http://7xqo7w.com1.z0.glb.clouddn.com/16-7-16/13229918.jpg)

可以看到defineproperty中给属性`getter`,`setter`的设置，通过函数名可以猜测，一旦该属性被获取，便会添加依赖；同样的，一旦该属性被更改，便会发出通知。

如果对`defineproperty`有疑惑的同学，可以翻翻js高程中attribute这一章，或者看看我的这篇文章[理解对象之attribute](http://www.sunopar.com/#!/blog/2016-06-10-js-attribute).