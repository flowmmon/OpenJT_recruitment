<h1 style="color: grey";>css2D变换</h1>

<h4>1.移动	translate</h4>

移动在运动状态上类似于平移，可以改变元素在页面内的位置。

例如：

```css
elem {
    transfrom: translate(x,y) 或
    transfrom: translateX(n)
    transfrom: translateY(n)
}
```

[demo](file:///C:/vscode/html_css/learningCss/LearningCssTranslate.html)

特点：（1）不会影响其他元素的位置

​			（2）translate(x,y)中的参数支持两种：

​					a.以px为单位的像素值		b.以对象自身长宽为基准的比例值



<h4>2.旋转	rotation</h4>

旋转在运动状态上默认体现为绕中心点旋转。

例如：

```css
elem {
    transform: rotate(degree)
}
```

[demo](file:///C:/vscode/html_css/learningCss/LearningCssRotate.html)

特点：（1）rotate里面的参数形式为：度数+deg，不要只写数字不写deg!

​			（2）度数为正时顺时针旋转，为负时逆时针旋转

​			（3）如果想改变旋转的中心点，使用属性transform-origin: x y修改，接受像素单位与比例单位与位置参数三种参数。



<h4>3.放缩	scale</h4>

放缩在运动状态上体现为对指定方向拉伸或收缩两种操作。

例如：

```css
elem {
    transform:scale(x,y)
    transform:scale(n)
}
```

[demo](file:///C:/vscode/html_css/learningCss/LearningCssScale.html)

特点：（1）scale里面的参数形式为纯数字且大于等于0，第一个位置表示x方向的放缩，第二个表示y方向的放缩。如果只提供一个参数，代表同时对xy两个方向应用同一个比例。

​			（2）scale缩放最大的优势：可以设置中心点缩放，默认以中心点缩放，不影响其他盒子。

​			（3）如果想改变旋转的中心点，使用属性transform-origin: x y修改，接受像素单位与比例单位与位置参数三种参数。



<h3>总结</h3>

----

  转换transform 我们简单理解就是变形 有2D 和 3D 之分 

 我们暂且学了三个 分别是 位移 旋转 和 缩放 

 2D 移动 translate(x, y) 最大的优势是不影响其他盒子， 里面参数用%，是相对于自身宽度和高度来计算的 

 可以分开写比如 translateX(x) 和 translateY(y) 

 2D 旋转 rotate(度数) 可以实现旋转元素 度数的单位是deg 

 2D 缩放 sacle(x,y) 里面参数是数字 不跟单位 可以是小数 最大的优势 不影响其他盒子

 设置转换中心点 transform-origin : x y; 参数可以百分比、像素或者是方位名词 

 <strong>当我们进行综合写法，同时有位移和其他属性的时候，记得要将位移放到最前</strong>