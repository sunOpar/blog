---
title: 双飞翼布局介绍
categories: [html与css]
date:2016-02-07
url:2016-02-07-double-wings
---

## 双飞翼布局的意义
第一**可以实现三列布局左右固定宽度，中间宽度自适应，**第二个，通常三列布局都是按照左(sub)中(main)右(extra)顺序来写的，这样页面也会根据这个DOM结构来顺序加载，而如果用双飞翼布局，**可以使三列布局中`mian`先加载，`sub`和`extra`后加载。**

## 双飞翼布局的实现

### 双翼

**html:**

```
<body>
	<div class="main"></div>
	<div class="sub"></div>
	<div class="extra"></div>
</body>
```

1. 这里如果都设置左浮动，`main`就会出现在页面左边;
2. 我们都知道，如果浮动布局一排里显示不下时，行框就会被挤到下一行；
3. 那么如果边距为负，他会移动到页面以外，当值大于等于自身宽度时，他就会被移动到上一行。
4. 这时就可以使用负边距来实现另外两列的布局

**css:**

```
.main{ float:left;width:100%;}
.sub{  float:left;width:190px;margin-left:-100%;}
.extra{float:left;width:230px;margin-left:-230px;}
```

效果如图：
![_1](http://7xqo7w.com1.z0.glb.clouddn.com/%E5%8F%8C%E9%A3%9E%E7%BF%BC_1.png)

### 鸟身
1. 此时`sub`和`extra`都定位到正常位置了，但是`main`的左侧和右侧被挡住了。
2. 因为`main`,`sub`,`extra`都处在浮动层，而且`main`是固定宽度，如果给`main`设置margin或者padding值，会因为其固有的宽度而撑开飞翼布局，直接影响到`sub`,`extra`的位置；
3. 所以给`main`设置一个内层,为内层设置margin值

**html:**

```
<div class="main">
	<div class="main-content">
	</div>
</div>
<div class="sub"></div>
<div class="extra"></div>
```

**css:**

```
.main-content{margin:0 230px 0 190px;}
```

效果图：
![_0](http://7xqo7w.com1.z0.glb.clouddn.com/%E5%8F%8C%E9%A3%9E%E7%BF%BC_0.png)