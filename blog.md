# OpenJT	前端学习记录



### Day 1 	2024.9.29

-----

#### 前言

为什么想学前端？其实是打比赛估计很缺前端（笑）。抱着解决万一哪天我真去打比赛我们组没有一个人会前端的的尴尬问题的想法(要是能跟工作室的各位组队就更好了)，我决定去挑战这次的技术马拉松。

还有一个原因，我之前了解过一点 html + css，我想真正学到一些技术，而不是浪费前面的学习成果。最后，祝我好运！



#### 网站设计

我现在脑子里没有任何的 idea 。于是我打算看看各个网站的布局设计（指路[Siteinspire | Cobble Hill Towers](https://www.siteinspire.com/websites/1664-cobble-hill-towers>)），使用webflow网站探索布局(<[Webflow: Create a custom website | Visual website builder](https://webflow.com/?utm_source=siteinspire&utm_medium=referral&utm_campaign=partnerships)>)。其实我觉得webflow的布局就不错...

但是好多控件的布局代码超出了我的知识储备，看不太懂，还是慢慢学吧。今日开始构建导航栏，按照openAi的网页结构大致分成了三个区域：header(nav),main,footer，并构建了基本形状。编写了nav.css以及body.css文件。



#### 声明

由于我的知识体系有些混乱，所以暂时不会从头做学习笔记，而是先一步步尝试搭建框架，并对遇到的问题进行解决，一些学习笔记在文件夹下面的Learning Css子目录下面，不时更新。







### Day  2 	2024.9.30

---

#### 昨日总结

昨天进行了导航条的初步布局工作，并拟定了两个区块：logo 区和导航栏目区，但是在实现的过程中遇到了几个难题：

1） logo 的大小和位置不好调整。我的logo原尺寸很大，直接加载会超出导航栏 nav ，于是我在 img 外面包裹了一层 wrapper ，以限制图片的展示区域，height 加上 max-height : 80%  的限制，确保 img_wrapper 高度与周围的文字比例协调。还有一点，如果对 img_wrapper 父 div ( nav )  直接使用 align-item ，会导致图片的左上角与导航栏的垂直中心线对齐。我使用 translate 将图片向左上平移了 50% ，解决问题。

2）导航栏目区布局方式。原来我打算使用一个 wrapper 包裹下面的子项目 div，但是需要合理调整他们的整体样式，分别编写 css ，比较难以管理。我借鉴了 webflow 导航栏的布局模式，使用无序列表 + css 完成了布局，好处是可以一劳永逸，只需编写 li 元素的 css，便可以直接应用于后面添加的栏目，同时对网页的尺寸变化响应更合理。



#### 今日进度

今天给导航栏新加入了一个搜索栏。作为 nav 的第二个子元素，其内部由 input 表单和一个放大镜 svg 组成。为了整体看起来比较和谐，我的 navbar_search （即搜索栏）设置了border_radius，同时把 border-width 设置成 1px 。图片按照前面的处理方式处理，高度缩小为 30px 。之后考虑做导航栏的悬停伪类效果。 



