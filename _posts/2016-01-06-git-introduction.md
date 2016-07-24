---
title: Git入门教程
categories: [Git]
date:2016-01-06
url:2016-01-06-git-introduction
---

[git中文指南](http://git-scm.com/book/zh)
这里有非常详细的git介绍，下面是一个简单的流程

## 1. 下载
1.[msysgit下载](http://msysgit.github.io)
2.[git图形界面](http://tortoisegit.org/download/)
ps：如果下载缓慢有可能被墙，可以使用迅雷下载，或者下载个vpn

## 2. git的前期准备
**这里说一下git的简单思路。**要使用代码的版本控制和多人协作，首先有一个git库，他被放在服务器上，当你要使用时就需要把这个git库下载到本地，本地操作完之后，会先把文件暂存，将文件放到暂存区域。然后提交到本地库。最后通过本地与服务器建立联系来把本地库的文件推送到服务器的git库里，这样就实现了本地与远程的同步。

### 1.注册
[github官网](https://github.com/)

###  2.new repository
新建一个项目
![repostory.png](http://upload-images.jianshu.io/upload_images/656716-becd8bfd296037bf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
会出现如上图页面，然后跟着他的要求一步步操作：
1. 在本地建立一个文件夹，名为你的项目名
2. 在里面创建一个readme.md文件
3. 右键该文件夹，选中git Bash,依次输入

```
git init ------------本地库初始化
git add README.md --------追踪README.md文件，放置到暂存区
git commit -m "first commit" ---------该文件被提交到本地库
git remote add origin git@github.com:sunbrother/aaa.git 将仓库连接到远程服务器
git push -u origin master 改动提交到远端服务器（并且是master分支）
```

当然，如果你已经有一个远程仓库想将他们克隆到本地，只需执行
`git clone git@github.com:sunOpar/myjava.git ------例子`

 ### 3.ssh key设置
有两种方法

#### 1.利用工具
1. 生成ssh key打开PuTTYgen
![PuTTYgen.png](http://upload-images.jianshu.io/upload_images/656716-95215134aaa83724.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
如图，点击Generate生成ssh key（在生成过程中滑动鼠标）生成好之后会出现如图
![key.png](http://upload-images.jianshu.io/upload_images/656716-3951c871a7699994.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
将上图的public key复制好
2. 建立联系

进入你的github账号→settings→SSH keys→Add SSH key
把你复制好的public key黏贴进去
此时顺便把private key保存一下。（这里公钥和私钥的关系相当于锁和钥匙的关系）
打开pageant，点击Add Key把你保存好的私钥添加进去。
**完成**

#### 2.通过命令行
1. 在命令行中输入`ssh-keygen -t rsa -C "your_emali"`
2. 此时可以设置你的密码，也可以一路回车过去
3. 此时会出现你的公私钥路径，进入找到.pub打开并复制
4. 进入你的github账号→settings→SSH keys→Add SSH key，
5. 把你复制好的public key黏贴进去
6. 结束（完美）

##3. git的使用

### git文件的修改

1. 打开本地文件夹里的readme进行修改
2. 此时在git bash里输入 git status 发现文件被修改，如图
![modified.png](http://upload-images.jianshu.io/upload_images/656716-64d892b34dbb0176.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3. 然后在命令框中依次输入
 ```git add <fileName/.> ---------------追踪改动并放到暂存区
git commit -m "修改文件"（双引号里面是你每一次修改的注释）-----改动提交到本地库
git push -u origin master -----------改动提交到远端repository```
**要记住，commit只会提交在他之前最近的一次add，之后add的不会被提交**
4. 此时刷新你github里的repository，会发现修改成功（增加文件同上）

![readme.png](http://upload-images.jianshu.io/upload_images/656716-2c30d15f944516eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### git文件的删除
这里我自己增加了一个bibi.html的文件
![bibi.png](http://upload-images.jianshu.io/upload_images/656716-59510fa0dd01215b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)在git bash命令框中输入
```rm -rf bibi.html ---------工作目录中bibi.html被删除
git rm bibi.html ----------记录此次删除操作
git commit -m "文件被删除" ----------根据记录的删除操作在本地库删除
git push -u origin master -------------远端删除```
如果只想在本地库删除，不想在工作目录中删除，只需输入 
`git rm --cached <fileName>`

## 4.git分支
**在git里，每一个分支其实相当于提交对象的指针，因此在多人协作时，在你要提交对象前，先用“git pull（更新你的本地库至最新改动）”方法。**

### 1.git分支创建
`git branch <branch>`

### 2.git分支切换
`git checkout <branch>`
这里checkout有两个作用：1. 是用来切换分支2. 将你的工作目录恢复到`<branch>`分支
tip：git是通过HEAD指针来知道你当前所在的到底是哪一个分支

### 3.git分支创建与切换
`git checkout -b <branch>`

### 4.git分支删除

#### 1.已合并的分支
`git branch -d <name>`

#### 2.未合并的分支`
git branch -D <branch>`

### 5.git分支合并
`git merge <branch>------------将name分支合并入当前分支`
需要注意的是，当前分支与name分支都对同一文件做过修改时，会出现合并冲突

### 6.获取git分支

#### 1.获取分支名
`git branch`

#### 2.获取分支的最后一次提交
`git branch -v`

#### 3.查看已合并到当前分支的分支
`git branch --merged `
这里面的分支通常可以使用-d删除

#### 4.查看未合并的分支
`git branch -- no merged`

## 5.git标签

### 1.标签分类
标签分为轻量标签和附注标签

#### 1.轻量标签
它只是一个特定提交的引用

#### 2.附注标签
附注标签是存储在数据库中的一个完整对象，包含打标签者的名字、电子邮件地址、日期时间等。

### 2.创建标签

#### 1.创建附注标签
`git tag -a v1.0 -m "version"`

#### 2.创建轻量标签
`git tag v1.1`

### 3.标签对比

![附注标签.png](http://upload-images.jianshu.io/upload_images/656716-2daf215a29a29e2a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**↑附注标签 ↓轻量标签**

![轻量标签.png](http://upload-images.jianshu.io/upload_images/656716-4662561a3184620b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 4.关于版本号
根据Semver的规范，版本号用小数点分割为三个数字。比如v3.2.1中**3是主要版本号，2是次要版本号，1是补丁。**
1. 主要版本号：有API变更导致不兼容旧版本的时候使用
2. 次要版本号：新增功能，但是向前兼容的情况下使用
3. 补丁：修复向前兼容的bug时使用

## 6.替换工作目录

### 1.从本地库更新
`git checkout <fileName>`
将本地库中最新的文件来覆盖工作目录的文件，对于新的文件和已经被add的文件将不受影响

### 2.从远端更新
```git fetch origin```