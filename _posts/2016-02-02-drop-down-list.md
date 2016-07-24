---
title: 纯css实现下拉列表
categories: [html与css]
date:2016-02-02
url:2016-02-02-drop-down-list
---

# 作者的话

偶然一个机会，在网上看到一篇ted公开课【让我们教孩子编程吧】
里面有一个实例，说是一个小男孩制作了一个大鱼吃小鱼的游戏，他想为这个游戏做一个计分板（吃一条鱼加一分），便他在网上求教，后来被网站创作者发现后，告诉了他答案：变量。通过这个学到的知识点【变量】也许小男孩永远不会忘记。

从中可以看出，通过需求学习编程往往比为了学编程而学习编程要记得更劳并且更有价值。这也对我之后的学习以及写作产生的改变。

PS:以下代码每次只写出有更改的地方，无更改的地方不再赘述。每一部分的格式都是:效果图——思路——代码的顺序书写，目的是希望初学者可以根据效果图，辅以思路试着自己写出代码，最后再与作者的代码作比较，希望能通过这个方法明白，实现效果的方式是多种多样的，不要只局限在作者的思路中，当然最重要的是能锻炼自己编写代码的能力

## 任务概述

### 需要达到的效果

![_0](http://7xqo7w.com1.z0.glb.clouddn.com/%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8_0.gif)

1. 鼠标悬浮弹出下来菜单
2. 鼠标离开下拉菜单弹回

### 所涉及的知识点

1. `ul`,`li`列表的使用
2. css：display，伪类选择器，基于关系的选择器

## 任务

### 制作html部分

**效果图：**
![html](http://7xqo7w.com1.z0.glb.clouddn.com/%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8html.png)

**思路：**
1. 整个架构通过`<ul>`,`<li>`组件
2. 层级关系通过将新的`<ul>`放入上一级`<li>`中完成

注：如下代码为一个下拉，三个就重复三遍即可
**代码：**

```
	<div class="menu-bar">
		<ul>
			<li>
				<a href="#">Menu</a>
				<ul>
					<li><a href="#">Menu_1</a></li>
					<li><a href="#">Menu_2</a>
						<ul>
							<li><a href="#">Menu_2_1</li>
							<li><a href="#">Menu_2_2</li>
							<li><a href="#">Menu_2_3</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div> 
```

### css部分

#### 纵向的下拉列表
**效果图：**
![_1](http://7xqo7w.com1.z0.glb.clouddn.com/%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8_1.gif)

**思路：**

1. 通过`display:none`使列表消失
2. 通过hover设置悬浮状态

**代码：**

```
.menu-bar ul ul{
	display: none;
}
.menu-bar li:hover>ul{
	display: block;
}
```

#### 横向下拉列表

**效果图：**

![_2](http://7xqo7w.com1.z0.glb.clouddn.com/%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8_2.gif)
**思路：**

1. 通过float实现横向布局
2. 注意不要让列表挤在一起

**代码：**

```
.menu-bar>ul>li{
	float: left;
	width: 64px;
	}
```

#### 稍微修饰一下

**效果图：**

![_0](http://7xqo7w.com1.z0.glb.clouddn.com/%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8_0.gif)

**思路：**

1. 首先将列表，链接的默认样式取消，更改字体颜色
2. 给列表设置一定高度，并且使文字水平垂直居中
3. 这里可以通过基于关系的选择器来选择多重列表
4. 设置颜色时可以使用rgba使颜色更舒服。

**代码：**

```
ul,li{list-style: none;}
li{height: 40px;border-radius: 20px;}
a{text-decoration: none;color: black;}
.menu-bar>ul>li{
margin-left: 30px;
	line-height: 40px;
	text-align: center;
background-color: rgba(228,238,243,.5);
.menu-bar>ul>li>ul>li{
	width: 70px;
	background-color: rgb(228,238,243);
}
.menu-bar>ul>li>ul>li li{
	width: 85px;
	background-color: rgb(228,238,243);
}
.menu-bar li:hover>ul,.menu-bar li:hover{
	background-color: rgb(228,238,243);
}
```

## 所有代码

### html
```
<body>
	<div class="menu-bar">
		<ul>
			<li>
				<a href="#">Menu</a>
				<ul>
					<li><a href="#">Menu_1</a></li>
					<li><a href="#">Menu_2</a>
						<ul>
							<li><a href="#">Menu_2_1</li>
							<li><a href="#">Menu_2_2</li>
							<li><a href="#">Menu_2_3</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<a href="#">biu</a>
				<ul>
					<li><a href="#">biu_1</a></li>
					<li><a href="#">biu_2</a>
						<ul>
							<li><a href="#">biu_2_1</li>
							<li><a href="#">biu_2_2</li>
							<li><a href="#">biu_2_3</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<a href="#">duang</a>
				<ul>
					<li><a href="#">duang_1</a></li>
					<li><a href="#">duang_2</a>
						<ul>
							<li><a href="#">duang_2_1</li>
							<li><a href="#">duang_2_2</li>
							<li><a href="#">duang_2_3</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>
```

### css:
```
div{position: relative;
left: 35%;margin-top: 20%;
}
ul,li{list-style: none;}
li{height: 40px;
	border-radius: 20px;}
a{text-decoration: none;color: black;}
.menu-bar>ul>li{
	float: left;
	width: 64px;
	margin-left: 30px;
	line-height: 40px;
	text-align: center;
background-color: rgba(228,238,243,.5);}
.menu-bar>ul>li>ul>li{
	width: 70px;
	background-color: rgb(228,238,243);
}
.menu-bar>ul>li>ul>li li{
	width: 85px;
	background-color: rgb(228,238,243);
}
.menu-bar ul ul{
	display: none;
}
.menu-bar li:hover>ul,.menu-bar li:hover{
	display: block;
	background-color: rgb(228,238,243);
}
```

## 结束