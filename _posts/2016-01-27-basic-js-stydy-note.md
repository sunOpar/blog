---
title: javaScript基础笔记集合
categories: [JavaScript]
date:2016-01-27
url:2016-01-27-basic-js-stydy-note
---

## js简介
js是脚本语言。浏览器是逐行的读取代码，而传统编程会在执行前进行编译

## js存放的位置
1. html脚本必须放在`<script>`、`</script>`之内。
2. `<script>`可放置在`<head>`、`<body>`里
3. 和css一样，JS可以存放在外面，通过`<script src="">`来链接
4. 现代浏览器不需要声明`type="text/javascript"`
5. 通常的做法是把函数放入`<head>`或页面的底部，这样就可以把他们放到同一位置，并且不会干扰页面内容

## 消息对话框

### 直接弹出消息对话框alert
`alert("text");`
> w3c： alert() 函数在 JavaScript 中并不常用，但它对于代码测试非常方便。

### 确认消息对话框(confirm)
`var message=confirm("str");`---------------str为消息对话框显示的内容
**confirm返回值boolean**

### 获得内容对话框
`var message=prompt("str");`-------------str消息对话框显示的内容
**你输入的内容会被prompt返回**

### demo

```
<scrpit>
function xx(){
var message=confirm("str");
if (confirm==true){
document.write("str");}
</script>
<body>
<input type="button" onclick="xx()" value="xxx" />
</body>
```

## 数据类型

### 动态类型
js拥有动态类型，意味着相同的变量，可以用作不同类型。
```
var x=2;
var x ="a";
```

### 数字类型
1. js只有一种数字类型，可以加小数点，或者不加，太大或太小的数字可以用科学计数法
2. 整数最大15位，小数最大17位。
3.八进制以【0】开头，十六进制以【0x】开头。
科学计数法：
```
var a=123e5---12300000; 
var b=123e-5------0.00123
```

### 数组

#### 创建数组
```
var a = new Array() ;a=["a","b"];
var a =new Array("a","b");
var a =["a","b"];
```

#### 数组相加
`a.concat();`

#### 用数组中的元素组成字符串
`a.join(".")`-----默认两元素之间逗号隔开，这里设置用[.]隔开。

##### 排序
`a.sort();`

### 布尔
 var a =new Boolean(0);
 当值为空或者为：0、-0、null、""、false、undefined或者NaN时，返回false。

## 对象

### 对象简述
对象由{}分隔，在{}内，对象的属性以(name:value)来定义。属性用逗号分隔
`var person{firstname="a",lastname="b"}`
寻址方式：
   `person.firstname;person["firstname"]`

### 创建对象的方法
1.定义并创建对象实例。
```
dog=new Object();-----创建dog对象
dog.name="diudiu";-----dog对象属性
|| dog={name:"diudiu",};
```
2.使用函数定义对象，然后创建对象实例
```
function(name,habit){
	this.name=name;
	this.habit=habit;
}
var a=new dog("diudiu",bite);
```

### 为已有对象添加属性
假设dog对象已经存在，但是没有gf属性
`dog.gf="joyce";


## 变量
1. 当向变量赋值文本时，加引号
2. 赋值数字时，不要加引号，否则会当文本处理
3. 重新申明变量，变量的值不会丢失。


### 常用变量类型
`var a =new Number/Array/String/Boolean/Object;`

## 字符串
`var txt="abc";`
常用方法：
```
txt.lenght()------获取长度
txt.fontsize(12px)-----文字大小
txt.link("http://")----为字符串加链接
txt.strike()-------删除线
txt.toLowerCase/UpperCase----大小写转换
txt.indexOf("a")-----定位字母a出现位置
txt.match("a")-------查找字符，找到返回该字符，否则null
txt.replace(/b/,"xxx")-------把字符b替换成xxx
```

## 打开/关闭窗口

### 打开窗口
`window.open("url","name","features","replace")`

`window.open("http://www.baidu.com","_blank","width=200,height=200,status=no")`
![wondow_open](http://7xqo7w.com1.z0.glb.clouddn.com/window_open.png)
![features](http://7xqo7w.com1.z0.glb.clouddn.com/features.png)

### 关闭窗口
`window.close();`--------------关闭本窗口
`<窗口对象>.close();`----------关闭指定窗口

## 函数
1. 函数格式
`function name(){}`
2. 函数对大小写敏感
3. 函数可以返回值，通过return语句，并且return是一条函数结束语句。
4. 函数可以传参数，形参与实参一一对应。
5. 局部变量随函数而消亡。
6. 在函数内为全局变量赋值，该变量依旧是全局变量。



## 循环

### for/in循环
```
<script>
     var txt;
     var person={name:"bill",age=20}
     for(var x in person){
          txt+=person[x];
}
</script>
```
x遍历person对象每一个属性

### continue&break
1. continue只能用在循环中
2. break(不带标签)只能用在循环或switch中
3. break(带标签)，用于跳出代码块
格式：
```
label:{
statement1;
statement2;
break:label;
statement3;
statement4;
}
```
语句只会执行1，2；3,4不会执行

## 验证
JavaScript可用来在数据被送往服务器前对表单输入的数据进行验证

### demo
如果field值为空，返回false，否则true
```
function validate(field,alerttxt){
	with(field){
	if(value==null||value=="")
		{alert(alerttxt);return false}
	else return true;	
}
```

## DOM简介
DOM-document object model
定义：当网页被加载时，浏览器会创建页面的DOM。
它是用以访问html元素的正式w3c标准。
![html dom 树](http://7xqo7w.com1.z0.glb.clouddn.com/DOM-tree.png)
通过可编程的对象模型，js获得了足够的能力来改变html
它可以改变元素，属性，样式，以及对事件做出反应。

### 通过js改变html/css

#### 获取并改变html元素内容
```
var mychar=document.getElementById("idName");
mychar.InnerHTML="xxx";----------将id为idName的内容改为xxx
```

#### 改变元素属性

`document.getElementById("imageName").src="";`------改变图片链接

#### 改变元素样式

**格式**：`Object.style.property=new style;`

```
var mychar=document.getElementById("idName");
mychar.style.color="red";
```
	
#### 改变输出流

`document.write("sunOpar");`--------这个方法将覆盖原来的html页面

#### 增删元素

##### 增加

在id为box的div元素中增加p标签


html：

`<div id="box"></div>`

js:
```
var fir=document.creatElement("p");---创建p标签
var lat=document.creatTextNode("新文本");
fir.appendChild(lst);
var element=document.getElementById("box");
element.appendChild(fir);
```

##### 删除
要删除元素，需要得到该元素的父元素

```
var child=document.getElementById("id1");
child.parentNode.remove(child);
```

## 正则表达式

### 正则表达式简述
当你要检索某个文本时，可以使用一种模式来检索文本，RegExp就是这种模式。

### 定义
`var part=new RegExp("after");`---定义part的RegExp为【after】

### 检索(boolean)
`part.test("aftervax")`-----由于这个字符串包含【after】，返回true

### 检索(指定值)
`part.exec("aafterrr")`-------由于也包含，返回该值【after】

### 第二个参数
```
part=new RegExp("a","g")-----【g】意思是【global】，搜索所有的【a】
part.exec("acdadcda")------此时会返回所有【a】，输出是:【aaanull】
```

### 改变RegExp
`part.compile("before")`----把【after】改成【before】