---
title: check git in path
categories: [工具使用问题]
date:2016-05-08
url:2016-05-08-check-git-in-PATH
---

## 问题

当我通过`node.js`安装`Grunt`，输入指令`npm install`时，出现了以下错误信息


```
npm ERR! not found: git
npm ERR! 
npm ERR! Failed using git.
npm ERR! This is most likely not a problem with npm itself.
npm ERR! Please check if you have git installed and in your PATH.
```

## 解决方法

根据提示要将git安装到Path变量中。
于是首先第一步找到git目录

### 找到git的url

一般情况下，git的目录如下所示

```
C:\Users\<user>\AppData\Local\GitHub\PortableGit_<guid>\cmd\git.exe
```

其中`user`和`guid`根据你自己的情况为主，每台电脑不一样。

### 测试git路径是否正确

将你的git路径输入到`commond prompt`中，如果出现git提示说明路径正确，否则要重新检查路径，知道出现git提示说明。

### 将url添加至Path

右击我的电脑→高级系统设置→高级→环境变量→系统变量
在这里找到你的Path变量，将你的url复制到该变量的末尾

```
;C:\Users\<user>\AppData\Local\GitHub\PortableGit_<guid>\cmd
```

注意该url之前有一个分号，并且不包含`git.exe`。
而且也不要覆盖Path变量之前的值，仅复制在末尾。

## 总结

在命令行出现该类似问题说明你安装的软件并没有配置环境变量，诸如`java，Grunt，git，node`等等都是需要配置环境变量的，至于为什么，我目前的知识也不知道。
未完待续