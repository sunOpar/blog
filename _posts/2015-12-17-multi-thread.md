---
title: 浅析线程与多线程
categories: [JavaScript]
date:2015-12-17
url:2015-12-17-multi-thread
---

# aa

#### aaa

##### aaaa

###### aaaaaa


## 线程是什么

要说线程之前，就先说进程，进程是计算机里正在执行的程序，比如QQ，浏览器之类。而每一个进程都有一个执行顺序，该顺序是一个执行路径，或者叫一个控制单元。
而线程就是一个程序里面不同的执行路径，或者说线程是进程中一个独立的控制单元，他控制着进程的执行。而一个进程必须至少有一个线程，在java中，该线程叫主线程（main方法）想想我们在运行java时，JVM是不是都是从main方法开始执行？而那从第一条语句往下依次执行的路径就叫做执行路径，就是线程。想一想java虚拟机是不是有一个垃圾回收机制，而回收堆中垃圾的同时程序也在同时进行，此时其实就是一个多线程。

## 为什么要有多线程

显而易见，多线程可以提高程序运行的速度，并且有些情况（比如java的垃圾回收机制）必须要使用多线程，想一想等程序执行完再进行垃圾回收还有什么意义吗？

## 如何创建一个线程

通过查看api可知，java已经有一个描述线程的类——Thread
在API的文档中我们得知，创建新线程有两种方法

第一种：
将类声明为Thread的子类，并重写run方法，run方法里就是另外一条线程的执行语句。然后在main方法里建立Thread子类对象，并调用start方法。（start方法的目的是开启线程，并执行Thread类里的run方法）

```
public class ThreadTest extends Thread {
    public void run(){
        for(int i =0;i <100;i ++){
            System. out.println("xxxxxxxxxxx" );}
    }
    public static void main(String[] args) {
        ThreadTest t = new ThreadTest();
        t.start();
        for(int i =0; i <100; i++){
            System. out.println("yyy" );
        }
    }
}
```

此时查看控制台可以发现在打印xxx到一半的时候，突然打印了一段时间yyy如此反复直至全部打印完毕。从中可以看出说是多线程，但不是同时执行的（单核CPU），只是cpu将多个线程在很小的时间里来回切换，小到你感觉他是同时执行的。这也是多线程的一个特性：随机性。

第二种：

声明实现Runnable接口的类。然后该类实现run()方法。创建该类对象并将该对象作为Thread对象的参数来传递并启动。

```
public class ThreadTest implements Runnable {
    public void run(){
        for(int i =0;i <100;i ++){
            System. out.println(Thread.currentThread().getName()+ "xxxxxxxxxxx");     
        }  
    }
    public static void main(String[] args) {
        ThreadTest t = new ThreadTest();
        new Thread(t ).start();
        Thread th = new Thread( t);
        th.start();
        for(int i =0; i <100; i++){
           System. out.println(Thread.currentThread().getName()+ "yyy");
        }    
    }
}

```
两种方法的区别（实现和继承）

1.由于java是单继承的，这就是Runnable接口的用武之地
2.使用继承创建出的多线程，每一个线程都有独立的属性，彼此不共享

而采用实现接口方式，实际只用创建一个实现Runnable接口的对象，如果想要多个线程，就创建多个Thread对象，再将同一个实现Runnable接口的对象传递进去。

## 线程的状态

线程具备五种状态

1.被创建
创建线程或其子类的对象时，线程被创建

2.运行
线程具备运行资格以及运行权
当启动start方法时，线程运行

3.冻结状态
线程不具备运行资格以及运行权
当线程中执行到sleep(time)方法时，线程冻结，直至时间结束
当线程中执行到wait()方法时，线程冻结，直至执行到notify()

4.阻塞状态（临时状态）
线程具备运行资格但不具备运行权
该状态的出现是因为CPU（单核）同一时间只能执行一个线程，而那些在等待运行的线程的状态就叫阻塞状态

5.消亡
执行到stop()或者程序执行完毕。

## 线程的名称

通过执行Thread类.CurrentThread.getName()方法可以看出
线程默认的名字为
Thread-0 Thread-1……
当然可以通过构造方法或者setName()来对线程的名称进行更改

```
public class ThreadTest extends Thread {
    ThreadTest(String name){
        super(name );
    }
```

上面就是构造方法的例子

## 线程的安全问题

当多条语句在操作同一共享数据时，有可能会出现一条线程对这些多条语句没有执行完，系统又切到另外一条线程的情况，这时就会有可能出现对该共享数据误操作的情况，比如多操作。
这时就需要使用同步代码块，将对同一共享数据操作的语句放在代码块里，使得线程必须执行完同步代码块里的语句才能切换其他线程

### 同步代码块

同步代码块相当于一个房间，里面的代码假设是一个老婆。当一个线程进入该房间时，房间就会被上锁，直到他跟老婆做完所有该做的事情x_x，以后，离开房间，房间才会重新打开，才会允许别的线程进来。
格式如下

```
synchronaized(对象){
    老婆；
}
```