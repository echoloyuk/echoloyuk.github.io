---
title: "JavaScript 原生DOM操作汇总"
bg: "//mac-blog.oss-cn-beijing.aliyuncs.com/blog-dom.jpeg"
---

用久了jQuery，对JS的原生的DOM操作变得十分生疏，在这里总结一下，便于以后快速查找。

## 查找元素

* `document.getElementById('');` 获得相应ID的元素，返回节点。
* `document.getElementsByName('')` 获得相应name的元素，返回数组。
* `document.getElementsByTagName('')` 获得相应tag的元素，例如`span`,`div`之类的。返回数组。

需要注意的是，除了`getElementById`之外，其他都是Element**s**。

另外，原生的JS不支持`getElementsByClassName()`方法，因此下面就自己写一个方法来实现吧。下面是示例代码，没有考虑IE的兼容性。
```
var getElementsByClassName = function (cls, elem){
    if (!elem){
        elem = document
    }
    var result = [];
    if (!cls || typeof cls !== 'string'){
        return false;
    }
    var node = elem.getElementsByTagName('*');
    var reg = new RegExp('[\\s]{0,}' + cls + '[\\s]{0,}');
    for (var i = 0, count = node.length; i < count; i++){
        if (reg.test(node[i].className)){
            result.push(node[i]);
        }
    }
    return result;
}
```

## 增删元素

* `createTextNode()` 创建文本节点。`createTextNode('this is a text')`
* `createElement()` 创建元素节点。`createElement('div')`
* `appendChild()` 在该节点中加入新的节点。 `appendChild(document.createTextNode('hello'))`
* `insertBefore()` 在某节点前面增加新的节点。`insertBefore(node1, node2)`在node2前面增加node1
* `removeChild()` 删除该节点中的某一个节点。`removeChild(node)`
* `replaceChild()` 将某一节点替换成新的节点。`replaceChild(node1, node2)`将node2替换为node1

需要说明的是，`insertBefore()`方法在网上很多转载，都说第二个参数可以为空，当第二个参数为空时，将按照appendChild方法进行添加。但我实际尝试，发现第二个参数是必须的。例如：
```
var a = document.createElement('a');
a.setAttribute('href', 'http://www.bing.com');
a.innerHTML = 'bing';
var p = document.getElementById('ee');
p.insertBefore(a); //只有一个参数时
```
![](//mac-blog.oss-cn-beijing.aliyuncs.com/dom-1.png)

同时，`replaceChild()`方法中的第二个参数也是必须的。

## 选择器
* `document.querySelector('')` 获取第一个匹配的元素
* `document.querySelectorAll('')` 获取全部匹配的元素

这两个方法中的字符串就是CSS选择器，它的用法和jQuery选择器一样。但是需要注意的是，IE8一下的版本不支持该方法。

## 节点属性
* `parentNode` 父节点
* `childNodes` 所有子节点（含文本节点）
* `firstChild` 第一个子节点（含文本节点）
* `lastChild` 最后一个子节点（含文本节点）
* `nextSibling` 下一个兄弟节点（含文本节点）
* `previoursSibling` 前一个兄弟节点（含文本节点）
* `nodeType` 节点类型。9为document节点，1为element节点，3代表text节点，8代表comment节点，11代表documentFragment节点
* `nodeValue` 当前节点为文本节点时的文本内容
* `nodeName` 节点的标签名。（文本节点为#text）

上述所有的获取节点的方法都包含所有的文本节点。关于文本节点，简单示例一下：
```
<div id="test">
    这是第一个文本节点
    <a href="#">line</a>
    这是第二个文本节点
</div>
<script>
var a = document.getElemetById('test');
console.log(a.childNodes); //node list: [这是第一个文本节点, <a>, 这是第二个文本节点]
</script>
```

* `firstElementChild` 第一个子元素节点
* `lastElementChild` 最后一个子元素节点
* `nextElementSibling` 下一个元素节点
* `previousElementSibling` 上一个元素节点
* `childElementCount` 子元素节点
* `children` 所有子元素节点

上述几个方法都不包含文本节点。

* `getAttribute()` 获取节点的属性
* `setAttribute()` 设置节点的属性
```
a.getAttribute('href');
a.setAttribute('href', 'http://www.bing.com');
```

* `attributes` 获得该节点的所有属性集合。它是属性对象数组。
多半有name和value。

例如：
```
<a id="link" href="http://www.baidu.com" target="_blank">baidu</a>
var a = document.getElementById('link');
console.log(a.attributes.target.name); //target
console.log(a.attributes.target.value); //_blank
```

* `textContent` 非IE，获得该节点内的所有子节点（包含文本节点）的文字信息，所有标签信息会被去掉。IE下为undefined.
* `innerText` IE专属，获得该节点内的所有子节点（包含文本节点）的文字信息。所有标签信息会被去掉。
* `outerText` IE专属，获得该节点和所有子节点点（包含文本节点）的文字信息。同上。
* `innerHTML` 获得该节点内所有子节点的html信息。
* `outerHTML` 获得该节点和所有子节点的html信息。

需要说明的是，`textContent`与`innerText`并不等价，在非IE浏览器上，`textContent`返回的是该节点中所有文本信息，并且，所有标签信息及其格式都会被忽略（例如`<br>`的换行样式），但是真正的html中的文本会被保留下来，如果您在html中存在换行符，则这里会转化成`\n`显示。`innerText`经过IE的几个版本的变化，已经逐渐与`textContent`接近，网上搜到的“不会得到display:node的元素中文本”并不准确，IE10下的IE7, 8, 9, 10都已经不忽略隐藏元素了。同时，它仍然会解析例如`<br>`等格式信息。这一点与`textContent`不同。

## CSS
* `style` 样式属性

节点的CSS属性通过`style`来修改，所有CSS中用`-`连接的CSS属性都变成驼峰式直接修改。例如：`document.getElementById('test').style.backgroundColor = '#ccc'`。

# Reference
* [JavaScript Tutorial](http://javascript.info/tutorial/dom)
* [MDN textContent](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent)
* [MDN node.insertBefore](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
* [javascript之DOM操作](http://www.cnblogs.com/kissdodog/archive/2012/12/25/2833213.html)


