---
title: 如何三年内成为世界级程序员
categories: [Quora]
date:2016-04-20
url:2016-04-20-a-world-class-coder
---

[原文地址](https://www.quora.com/How-can-I-become-a-world-class-coder-in-under-three-years)

# 如何在三年内成为一个世界级的程序员

>I'm in the second year of my college and an amateur coder. What are some tips to excel in programming?

题主自述：我目前是大学第二年，是一个业余编程爱好者，有哪些技巧，可以让我胜任编程？

# 回答

>That's perfectly possible. You just need the right mindset and the right reading materials. In essence, you'll need to be well versed in the following subjects:

首先这是极为有可能的一件事。你只需要正确的心态和正确的阅读材料。本质上说，你需要精通以下几点：

>
- Computational models, machines, and the popular hardware architectures;
- Execution models, data modelling, effect modelling, recursion (including recursion schemes, such as catamorphisms, paramorphisms, and such), iteration;
- Most common algorithms, data structures, and analysis of algorithms;
- Type theory;
- How to write your own programming languages, parsers, interpreters and compilers;

- 计算机模型，以及流行的硬件体系结构
- 执行模型（Execution models），数据建模，效应模型，递归（包括递归方案）和迭代
- 大部分的一般性算法，数据结构，算法分析
- 类型原理
- 知道怎样自己写编程语言，包括解析器和编译器

>So, how do you go about learning all of this (which is quite a lot!)?

那么如何来学习这些内容呢（它们确实有点多）？

## 第一步——基础

>You start with the basics: "How does one go about designing programs?" Here you can either choose How to Design Programs or Structure and Interpretation of Computer Programs. HtDP has a simpler language and is more straight-forward to follow, but they both have essentially the same curricula. These books will introduce you to the theory of computation, and give you insights on how to think about programs. Additionally I'd recommend reading Bird and Wadler's amazing Introduction to Functional Programming, as well as Hughes' Why Functional Programming Matters.

先从最基本的开始————[如何设计一个程序?](http://htdp.org/)
或者[计算机语言构造与解析](https://mitpress.mit.edu/sicp/full-text/book/book.html)
两个相比较而言，《如何设计一个程序》的语言更简单，并且可以更直接明了的学习，不过它们本质上来说课程是相同的。这些书会介绍的是计算机理论，并且会给你一种计算机思维。此外建议阅读*Bird and Wadler*的[函数式编程](http://www.amazon.com/Introduction-Functional-Programming-International-Computing/dp/0134841891)
以及*Hughes*的[为什么函数式编程很重要](http://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf)

## 第二步————复杂的概念学习

>Once you're okay with the basics, you can move on to understanding more complex concepts. It's time to learn about all the different computational models, ideal machines, and some neat techniques of programming languages. Luckily, there's a book with this exact same title readily available for you: Concepts, Techniques, and Models of Computer Programming.

当你完成了基础部分，你可以开始理解一些更加复杂的概念了。现在可以开始学习所有不同的计算机模型，理想机械（ideal machines）以及优雅的编程技巧。非常幸运的告诉你，有一本现成的书讲述了我刚才说的所有[概念，技巧以及计算机程序模型](http://www.info.ucl.ac.be/~pvr/book.html)

## 第三步

>At this point, you should be well acquainted with most of the basic knowledge you'll need for writing and reasoning properly about programs. You can take one or two months to get acquainted with a handful of practical programming languages that interest you (I would particularly recommend going through Real World Haskell, and writing interesting applications in it. You should be able to do so in a couple of weeks).

此时，你应该对大部分的基础知识非常熟悉，接下来你要适当的写程序了。你可以花一到两个月时间来熟悉几个让你感兴趣的，并且是实用的程序语言，我特别建议大家翻看[真实的haskell世界](http://book.realworldhaskell.org/)，并且写一些有意思的程序（你应该能够在几周内完成）。

## 第四步————算法学习

>This is a nice time to deepen your knowledge in algorithms and data structures, check out Introduction to Algorithms and Okasaki's Purely Functional Data Structures. And if you have the time, spend some reading about Functional Pearls, specially Zipper. Another interesting addition to your knowledge will be Meijer's Functional Programming with Bananas, Lenses, Envelopes, and Barbed Wire. You might also want to spend some time learning more deeply about other practical tools that have different computational models, say if you're looking for a systems engineer job at a major company like Google, you'll probably want to be well acquainted with Java, Python, and C++.  

这是一个美好的时刻来深入学习算法和数据结构，通过[算法导论](http://www.amazon.com/Introduction-Algorithms-Thomas-H-Cormen/dp/0262033844)和*Okasaki*的[真·数据结构](http://www.amazon.com/Purely-Functional-Structures-Chris-Okasaki/dp/0521663504)来学习这些内容。
如果有时间，可以读一些关于*Function Pearls*，特别是*Zipper*。
另外，给大家推荐一个很有意思的网站[函数式编程与香蕉、镜头、信封和电线杆的故事](Functional Programming with Bananas, Lenses, Envelopes, and Barbed Wire)
也许你也想花点时间来升入学习一些不同于计算机模型的其他实用性的工具，如果你想在诸如Google之类的公司，找一个系统攻城狮职位，你应该精通Java,Python和C++。

## 第五步————知行合一

>At this point you should be comfortable with writing pretty reliable programs. Keep writing them. Lots of them. Collaborate with other programmers. Get a job where you feel like the worst programmer in the whole world. Read other people's code. Learn from everyone you can. And try to understand more deeply how to reason about performance (time-wise and space-wise) in the different computational models.

此时你应该可以轻松的写出优雅的程序了，记住要坚持多写多练。与其他程序员合作，找一个你认为全世界最要价值的工作。阅读别人的代码，心中牢记【三人行必有我师】。并且试着理解与推敲不同计算模型（从时间和空间两个维度）的执行。

## 第六步

>Finally, learn more about types (Types and Programming Languages and Practical Foundations for Programming Languages), learn about compilers and parsing theory (Modern Compiler Implementation in ML), and write your own programming languages.

最后，详细了解类型（types）————[类型与程序语言](http://www.cis.upenn.edu/~bcpierce/tapl/)、[编程语言的实用功能](http://www.amazon.com/Practical-Foundations-Programming-Languages-Professor/dp/1107029570)，以及编译解析的理论知识————[ML现代解析实现](http://www.amazon.com/Modern-Compiler-Implementation-Andrew-Appel/dp/0521607647) ,然后写出你自己的程序语言。

## 总结

>And most important of all: keep learning. Computers are rapidly evolving, and most of the things you've learnt two years ago will likely have already been superseded by now.

最最重要的事情是：时刻保持学习。计算机发展很快，很多你两年前学的东西，现在可能早就被替代了。
**You just can not afford to stop learning in this field.**