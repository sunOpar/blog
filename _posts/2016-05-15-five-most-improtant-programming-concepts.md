---
title: 谈谈五个最重要的程序思想
categories: [Quora]
date:2016-05-15
url:2016-05-15-five-most-improtant-programming-concepts
---

# What are the five most important programming concepts?

谈一谈什么是五个最重要的程序思想？

## 回答者信息

> name: Barry Rountree
Computer Scientist,LLNL
My research focuses on how computing will changes in future power-constrained exascale machines.

姓名：Barry Rountree
计算机科学家，就职于Lawrence Livermore国家实验室
我主要研究计算机未来的发展，关于如何突破百亿亿次级的功率限制。

>I have a BA in THeater from the Honors Tutorial College at Ohio University, an MS in Computer and Network Administration from Florida State University,adn a Ph.d. in Computer Science from the University of Arizona. I did my postdoc at the Center for Applied Scientific Computing and Lawrence Livermore National Laboratory and coverted to a staff position there a couple of years ago.

俄亥俄大学荣誉学院戏剧专业文学士，佛罗里达州立大学计算机与网络管理硕士，亚利桑那大学计算机科学博士，计算机应用科学博士后，之后的几年就职于Lawrence Livermore国家实验室。

## 回答

>1. Programming is, ultimately, self-taught. You can take classes to help that process along, but eventually you have to form and refine your own mental models of the langhages, the machine, and your program. If you're not spending time outside of class doing this work, you're memorizing trivia, not learning to program.

编程基本上是自学的。你可以通过上课来摆脱学习过程中的孤独，但是最后你还是要自己形成与改善属于你自己的，关于语言，机器以及程序的思维模式。如果你没有离开课堂去做这件事情，那么你不是在学编程，而是在死记硬背。

>2.The audience for computer code is other human beings, in particular, you six months from now. Be considerate to these people.

计算机代码的观众是其他人，特别可能是六个月后的你。 请对他们好一点。（意思是让你写的代码可读性高一点，不要写完过几天自己都看不懂了）

>3. Coding is easy, debuging is hard. Code to make debugging trivial. That can be test cases, source control, smaller and well-defined functions.... basically all of the "best practices" out there speak to this.

写代码简单，调试却很难。尽量写的代码让调试变的简单。可以通过程序测试，源代码控制，更小更明确的函数等等来让调试变得简单。所有这些基本上都在“最佳实践”上提到过。

>4. A debugged, tested, and documented line of code costs on the order of $100.  The best code is code that's never written because you were able to come up with a non-coding solution or reuse existing code.  The second-best solution involves deleting code to get the functionality you need.  Remember that as a programmer, you're hired to solve problems, not write code.

每一次调试，测试，以及代码注释的花费相当于一百美元。最好的编程就是不写代码，因为你已经找到了不通过代码就能解决问题的方法或者解决该问题的代码已经存在，你可以重复使用。第二个解决方法就是删除代码来满足你功能的需要。记住，作为一个程序员，你是被雇来解决问题的，不是光写代码的。

>5. Back when you were learning to read and write, you spent far more time reading than writing.  Current pedagogy emphasizes writing code over reading code --- what was the last programming class you took where you started with an existing 1k line program and read it?  As a professional, you'll be spending most of your time reading code you didn't write in order to find a bug or add a feature.  It's a skill worth developing early.

当你在学习编程的过程中，学习的时间比你写的还要多，赶快回头。现在的教育强调写代码的能力大于读代码，在最后一堂编程课上，当你在有一千行代码的基础上