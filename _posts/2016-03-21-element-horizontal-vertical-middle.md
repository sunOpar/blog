---
title: 元素水平垂直居中的hack
categories: [html与css]
date:2016-03-21
url:2016-03-21-element-horizontal-vertical-middle
---
# 元素水平垂直居中的hack

## 问题

实现灰色元素水平垂直居中

## 解决方法

```
position: absolute;
left: 0;right: 0;top: 0;bottom: 0;
margin: auto;
```

## 思维脉络

这是我之前看的一篇文章介绍的，只知如何使用但是不知其原理。打算趁这个机会研究一下。

## 方法原理

1.理解margin: auto;

Q: 为什么`margin: auto`只能实现水平居中而不能实现垂直居中？
A: 首先`margin: auto`的意思是上下左右全是`auto`，而根据规范，`margin-top/bottom：auto`，其计算值为0，也就是说`margin: auto`等价于`margin:0 auto`，当然这是有前置条件的，它们还与书写模式和文档流方向有关，这就是不能实现垂直居中的原因;

为什么可以实现水平居中，是因为水平方向上的`auto`，其计算值取决于可用空间。其实这些都是规定定好的^_^

2.理解`position: absolute`

页面中有三种定位机制：
普通文档流，浮动以及绝对定位。
当给元素设置为`position: absolute`时，其就会脱离普通文档流，因此不占据文档流空间。

[Developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Absolute_positioning)

> an element that is positioned absolutely is taken out of the flow and thus takes up no space

Q：它是基于什么定位的？
A：它是基于最近的设置了position属性（static除外）的祖先元素定位的，这个祖先元素称为其包含框（containing block）
1.如果祖先是行内元素，则包含框为第一个和最后一个行内元素生成的padding box（意思是包含框为除了margin和border的最大矩形）。
2.否则，包含框就是padding box。


[w3.org:containing block](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)

>The position and size of an element's box(es) are sometimes calculated relative to a certain rectangle, called the **containing block** of the element. 
If the element has 'position: absolute', the containing block is established by the **nearest ancestor with a 'position' of 'absolute', 'relative' or 'fixed'**, in the following way: 
1.In the case that the ancestor is an inline element, the containing block is the bounding box around the padding boxes of the first and the last inline boxes generated for that element. In CSS 2.1, if the inline element is split across multiple lines, the containing block is undefined.
2.Otherwise, the containing block is formed by the padding edge of the ancestor.
If there is no such ancestor, the containing block is the initial containing block.

Q: 如果它的祖先元素没有设置position属性，那是基于什么定位的？
A: 首先声明并不是基于body或者说html等根元素。其实在文档的根元素里，有一个矩形被称为 `initial containing block`，这个`initial containing block`为其包含框。这个包含框有可以看到的尺寸并且固定在*canvas*初始点。
【canvas】：其用来描述格式构造的渲染空间，它对于每一个空间的大小来说是无限大的，但是对于一般情况，它渲染的是一个有限区域，主要取决于用户的终端媒体。

[w3.org:containing block](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)
[w3.org:canvas](https://www.w3.org/TR/CSS2/intro.html#canvas)

>The containing block in which the root element lives is a rectangle called the initial containing block. For continuous media, it has the dimensions of the viewport and is anchored at the canvas origin; it is the page area for paged media. The 'direction' property of the initial containing block is the same as for the root element.
**The canvas**
For all media, the term canvas describes "the space where the formatting structure is rendered." The canvas is infinite for each dimension of the space, but rendering generally occurs within a finite region of the canvas, established by the user agent according to the target medium. For instance, user agents rendering to a screen generally impose a minimum width and choose an initial width based on the dimensions of the viewport. User agents rendering to a page generally impose width and height constraints. Aural user agents may impose limits in audio space, but not in time.


3.`top: 0; left: 0; bottom: 0; right: 0`

当绝对定位的元素设置`top: 0; left: 0; bottom: 0; right: 0`属性时，会给该块级元素一个新的边界框(bounding box)，此时该元素会竟可能的基于其父元素（body/容器：position:relative）填充可用空间来进行偏移。

[developer.mozilla.org:absolute](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

>Setting top: 0; left: 0; bottom: 0; right: 0; gives the browser a new bounding box for the block. At this point the block will fill all available space in its offset parent, which is the body or position: relative; container.
For absolutely positioned elements, the top, right, bottom, and left properties specify offsets from the edge of the element's containing block (what the element is positioned relative to). 

4.给块级元素设置一个宽高

给块级元素设置宽高，来阻止盒模型占据整个可用空间，并且促使浏览器基于新的边界框来计算`margin: auto`值。

[developer.mozilla.org:absolute](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

>The margin of the element is then positioned inside these offsets.

5.因为元素是绝对定位的因此脱离了普通文档流，至此，浏览器会给其`margin-top/bottom`值设置相等来让它居中

[w3.org:Absolutely positioned](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-height)

>If none of the three are 'auto': If both 'margin-top' and 'margin-bottom' are 'auto', solve the equation under the extra constraint that the two margins get equal values. If one of 'margin-top' or 'margin-bottom' is 'auto', solve the equation for that value. If the values are over-constrained, ignore the value for 'bottom' and solve for that value.

## 总结

```
position: absolute;
left/right/bottom/top: 0;
margin: auto;
```

### 优点：

可以使元素水平垂直居中，即使你调整了该元素的大小甚至padding，又或者你使用百分比数作为大小，它依旧会兢兢业业的居中而不需要多次修改代码，并且兼容ie8+。

### 注意：

1. 必须设置宽高。
2. 建议设置`overflow: auto`来防止文本溢出。
3. 不兼容Windows Phone。