---
title: "记IE下的input标签中的padding"
subtitle: "IE的form表单的糟粕"
bg: "//mac-blog.oss-cn-beijing.aliyuncs.com/blog-shit-ie.jpg"
---


记得在我很久之前遇到的问题，那就是input在IE系列中对padding的支持不够好。如果我们给`input`定义`padding-left`和`padding-right`，希望输入的文字距离左右边框有一定的距离，再加上背景图片，实现一个像bing那样的输入框效果。但是，这样的想法固然好，但是在IE下会不尽如人意。查看bing的搜索框才知道，原来它的的搜索框图片和输入文字根本就不是一个input搞定的，而是分开实现的（这个非常常见）。于是我在网络上开始查找问题的原因，很多人把这个问题归结于IE的bug，但是，经过学习和尝试，我个人认为这不应该算是bug，而是在处理和显示上存在着不同。

先看一个例子，代码：
```
input.input{ 
    vertical-align:middle; 
    height:20px;
    background:#fff url(../images/bg/input_bg.png) repeat-x ; 
    line-height:20px; 
    border:1px solid #aebad7;
    color:#333; 
    text-align:left;
    font-size: 12px;
    padding:1px 24px 0 4px;
    font-family: 'lucida grande',helvetica,verdana,arial,sans-serif;
}  
```
以上代码是我工作中的一个实际例子，在FF下和IE下的效果如下：

![](//mac-blog.oss-cn-beijing.aliyuncs.com/ie-1.JPG)

![](//mac-blog.oss-cn-beijing.aliyuncs.com/ie-2.JPG)

上面两个图分别是FF和IE9下的效果。

FF下的`padding-right:24px;`生效了，在输入ABCDEFG后，未显示的被隐藏了，把下箭头的图片的位置空了出来，这是我们希望的。但是在IE全系列下，后面的字母貌似忽视了这个`padding-right`，大家会把这个归结于IE的bug，认为它对`padding-right`不支持。其实，IE是支持`padding-right`的，只不过，显示的方式不是我们想想的那样。经过和同事交流和讨论，我认为这个`padding-right`实际上存在。下面简单说明下我的看法。

先看看这个：
```
input{
    padding:0px 80px;
} 
```
这个代码很简单，就是将左右的边框内间距设定为80px，在FireFox下，它显示的如我们想象的那样：

![](//mac-blog.oss-cn-beijing.aliyuncs.com/ie-3.JPG)

图中为FrieFox的显示结果。我们看到左右input中左右两侧的间距已经空出来，这样，我们可以在input中添加背景图片，做成如上面的图中的那个效果。但是，在IE下，它的显示并不尽如人意:

![](//mac-blog.oss-cn-beijing.aliyuncs.com/ie-4.JPG)

可以看出，padding-right在输入过多文字后，并没有使输入光标与右边框保持80px的距离。这是为什么呢？原因是IE将padding-right看作是输入文本距离文本边界为80px，而不是文本显示域和边框间的距离。

![](//mac-blog.oss-cn-beijing.aliyuncs.com/ie-5.JPG)

上图可以清晰的显示出原因，当input中输入文本时，`padding-right`和`padding-left`是在文本中体现的，图中黑色边界就是文本域，可以看到文本的左右都有间距，这就是`padding`。红色的框就是input的边框，超出红色边框的其他内容是被盖住了，所以，可以看出，在input框来看，文字是到达了input的边框，随着文字的输入，input框（就是红色的框）会向右侧移动，一直到文本域的右边界。有一点可以证明的就是，当你写很多内容的时候，用鼠标在input框中全选，当全选到最右侧的时候，是能看到这个`padding-right`的。如下图:

![](//mac-blog.oss-cn-beijing.aliyuncs.com/ie-6.JPG)

相反，FireFox中的`padding-right`和`padding-left`是定义在input框上的，相当于在上图的红色边框上添加这个padding而不是黑色的边框。这就是为什么在FireFox，Chromes等浏览器上显示正常。（FireFox7貌似和IE的一样。） 

![](//mac-blog.oss-cn-beijing.aliyuncs.com/ie-7.JPG)

图中黑色的框为文本域，红色的框为input的边框，蓝色的框为`padding`定以后的显示域，可以看到，在input框中，无论文本写了多少，篮框内的文字才会被显示，因此，input框总会有左右两个间距，这就是我们预想的效果，也是非IE显示的结果。 因此，我们要向实现类似的这样的效果，如果非要实现各浏览器兼容，就需要通过div包裹一个input，然后`padding`的效果由div来负责实现了。

当然， 这仅仅是我个人通过实践和网络上学习得到的结果。仅供参考，如果大家有不同意的看法，也欢迎讨论和交流。

*该文章摘自我之前在cnblogs上的文章*。
