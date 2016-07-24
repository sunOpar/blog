---
title: 设置多个div高度一致
categories: [html与css]
date:2016-02-27
url:2016-02-27-set-multi-div-height-same
---

## 实现目的
假设你的页面中有几列高度非固定的模块，他们的顶部是对齐的，而他们的高度会随着其内容的增删而变化，你又希望让他们无论如何都能保持高度一致，也就是说高度自适应且保持一致，这时就可以使用以下方法。

## 具体方法

**1.首先给他们设置一个外包裹层。**

效果如图：
![1](http://7xqo7w.com1.z0.glb.clouddn.com/%E5%A4%9A%E4%B8%AAdiv1.png)

具体如下
**html：**
```
<div class="content-wrap">------------外包裹层
	<div class="subcontent">------------每一列
		<img src="img/1.jpg" alt="风景">
		<div class="text">
			<p></p>
		</div>	
	</div>
	<div class="subcontent">------------每一列
		<img src="img/2.jpg" alt="风景">
		<div class="text">	
			<p></p>
		</div>
	</div>
	<div class="subcontent">------------每一列
		<img src="img/3.jpg" alt="风景">			
		<div class="text">	
			<p></p>	
		</div>	
	</div>
</div>
```
css部分就不说了，无亮点

**2.然后给每一个模块设置尽可能大的padding-bottom，这样就隐含的将其父类包裹层高度撑大了，因为包裹层的高度默认是随内部变化而变化的。**

效果图：
![2](http://7xqo7w.com1.z0.glb.clouddn.com/%E5%A4%9A%E4%B8%AAdiv2.png)

通过底部可以看出他们的高度还是不一致的。但是可以发现，包裹层的高度相当于模块中高度最高的那个。

![2-1](http://7xqo7w.com1.z0.glb.clouddn.com/%E5%A4%9A%E4%B8%AAdiv2-1.png)

**css:**
```
.subcontent{
	padding-bottom:10000px;
}
```

3.最后通过设置`margin-bottom`（负值）来抵消掉撑长的`padding-bottom`，可以这样理解，正的`margin-bottom`使包裹层向下伸，那么负的`margin-bottom`就会使得包裹层向上【卷】。通过设置负的`margin-bottom`，使得包裹层向上【卷】，其卷的水平线是一致，但是基线是根据高度最高的那一个模块来决定的（原因已经说过了，包裹层的高度相当于模块中高度最高的那个），最终使得三者高度一致。

![3](http://7xqo7w.com1.z0.glb.clouddn.com/%E5%A4%9A%E4%B8%AAdiv3.png)
可以这样理解：
1.三根绳子水平并排放置，长度分别为：50cm,20cm,30cm并且他们的头部在同一水平线上;
![4-1](http://7xqo7w.com1.z0.glb.clouddn.com/%E5%A4%9A%E4%B8%AAdiv4-1.png)
2.然后将他们每一个延长100cm,这样他们现在的高度分别是：150cm,120cm,130cm;
![4-2](http://7xqo7w.com1.z0.glb.clouddn.com/%E5%A4%9A%E4%B8%AAdiv4-2.png)
3.紧接着拿一把剪刀从底部开始向上剪100cm；
![4-3](http://7xqo7w.com1.z0.glb.clouddn.com/%E5%A4%9A%E4%B8%AAdiv4-3.png)
4.这时他们的长度分别为：50cm，20+30cm，30+20cm。
![4-4](http://7xqo7w.com1.z0.glb.clouddn.com/%E5%A4%9A%E4%B8%AAdiv4-4.png)

## 结束
*that all*