---
title: Git配置别名错误提示
categories: [Git]
date:2016-03-15
url:2016-03-17-git-alias-error
---

# 作者的话

我认为每一个知识点都是有价值的，但是知识点的学习不能是盲目，因为第一点盲目的学习并不能很好的吸收，很容易造成消化不良；第二点就是时间是有成本的，你花很多时间用在细枝末节上，那么你整体的进度会严重脱节；第三，知识点的价值恰恰体现在它如何来解决问题的，如果为了学知识点而学知识点会本末倒置毫无意义。因此我认为，知识点的学习应该是以问题为导向的，而不是以其本身为导向的，因为这样有一点为了学习而学习的感觉。所以我的博客分成2种：

1. 以现象为导向
2. 以问题为导向

对于第一种博客，可以将其大致分为以下几部分：

1. 描述现象；
2. 思维脉络
3. 现象产生的原因以及如何解决；
4. 总结

对于第二种博客，分为以下几部分：

1. 描述问题
2. 描述自己尝试解决问题的思维脉络
3. 解决问题的方法
4. 总结

整体来看就是这样的结构：

![blog](http://7xqo7w.com1.z0.glb.clouddn.com/ifeblog.png)

我之所以每一个博客里都有思维脉络这一个过程，是因为我认为在学习过程中应该【珍惜每一次犯错的机会】，所以我把我每次的思考过程写下来，看看自己针对一个问题或者一个现象是如何思考的，看看到底是哪个环节阻塞了自己，有针对的调整自己的思维惯性。

## 现象

使用alias缩写以下代码

```
git config --global.alias.pu "push -u origin"
```

时出现该提示

```
warning: push.default is unset; its implicit value has changed in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the traditional behavior, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

Since Git 2.0, Git defaults to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)
```

### 思考脉络

1. 首先仔细看了一下错误提示，发现是`push`命令在Git 2.0出现了更新
2. 接着我看了一下更新，大致意思是`push`命令传统的操作（matching）是将全部本地分支推送到远端，而更新之后（simple）的操作是将当前分支推送到远端；
3. 接着我按照提示输入了我想要的操作，问题解决了。

### 反思

我突然想到我之前写命令的时候为什么没有出现这个提示，在我第一次用缩写的时候提示了，接着我试着输了一下`git push`
似乎发现了不得了的事情，又一次出现了提示，然后整个思路理了一下发现，原来`git alias`不能配置多个主要指令一起啊。

### 总结
1. `git alias`操作设置缩写只能有一个主指令，但是可以配有多个附属指令
2. `push`操作有2中版本，matching版（老版本）是推送全部本地分支；而新的simple版（新版本）只推送当前分支。
3. 可以通过`git config --global push.default matching/simple`来配置你的push指令。