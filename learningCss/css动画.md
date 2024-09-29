<h1 style="color:grey">css动画</h1>

动画需要先定义，再使用。

定义一个动画的基本内容如下：

```css
@keyframes your_animation_name{
    0%{
        /*your code...*/
    }
    /*中间还可以指定关键帧,如
    30%{
    ......
	}
    */
    100%{
        /*your code...*/
    }
}
```

[demo](file:///C:/vscode/html_css/learningCss/LearningCssAnimation_1.html)

介绍：(1)0%是动画的开始（初始帧），100%是动画的结束（结束帧）,中间可以插入多个时间节点的中间帧；

​			(2) 动画是使元素从一种样式逐渐变化为另一种样式的效果。您可以改变任意多的样式任意多的次数。

​		（3）请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。



而动画的使用需要在目标对象的animation-name属性中调用来使用。下面是一个例子：

```css
div {
    background-color:blue;
    width:200px
    height:200px
    animation-name:your_animation_name
    animation-duration:2s
}
```

这里的animation-duration指的是动画的持续时间，时间单位不限定。



常用属性：![](C:\Users\王启瑄\Pictures\Screenshots\屏幕截图 2024-09-09 164115.png)

[demo](file:///)

动画的简写如下：

animation:	动画名称	持续时间	运动曲线	何时开始	播放次数	是否反方向	动画起始或结束的状态

(animatio:	animation-name	animation-name	animation-timing-function	animation-delay	animation-iteration-count	animation-direction	animation-fill-mode)

更细地讲，运动曲线存在多种模式：

![](C:\Users\王启瑄\Pictures\Screenshots\屏幕截图 2024-09-09 165258.png)	

