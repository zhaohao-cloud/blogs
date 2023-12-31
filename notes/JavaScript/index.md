# Javascript

## 原型和原型链

![](https://typro-zh.oss-cn-shanghai.aliyuncs.com/b4599b1c11093903233e88796a827cb0.png)

- Javascript中存在函数对象与普通对象
- __proto__为对象所专有，指向创建该对象的构造函数的prototype
- prototype为函数所专有,其本身为普通对象实例
- Function(函数对象)由其自身创建，所以其不仅是对象，也是构造函数，所以其__proto__ === prototype
- Object函数由Function创建，所以其Object.__proto__ === Function.prototype
- Function.prototype是Object的实例，所以Function.prototype.__proto__ === Object.prototype
- Object.prototype.__proto__ === null,虽然Object.prototype是由Object函数构造的，但是为了避免形成死循环，将其指向null

## 构造函数返回值

- 在构造函数里面，如果不写return的话默认就是返回创建的实例对象。
- 在构造函数里面，如果写了return的话
    1. 如果return的是一个基本数据类型的话比如，boolean,number,undefined等那么仍然返回实例对象；（<b style="color:yellow;">
       特别注意！</b>）
    2. 如果return的是一个对象的话，则返回该对象。原本的指向实例对象的this会被无效化。

## 严格模式

1. 变量必须用关键字声明后才能使用
2. 普通函数的this指向undefined
3. 立即执行函数的this指向undefined
4. setTimeout中函数的this指向的window（与普通函数不同）

## 回流和重绘

引起回流(**reflow**)的情况（回流一定导致重绘）：

1. 改变窗口大小
2. 改变文字大小
3. 内容的改变，如用户在输入框中敲字
4. 激活伪类，如:hover
5. 操作class属性
6. 脚本操作DOM
7. 计算offsetWidth和offsetHeight
8. 设置style属性

引起重绘(**repaint**)的情况：

1. 改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性

## ES6块级作用域——暂时性死区

ES6 明确规定，如果区块中存在let、const、class等命令,这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。
<b style="color:red;">凡是在声明之前就使用这些变量，就会报错。</b>

## 垃圾回收——变量
1. 全局变量不会被回收。<b style="color:red">注意！</b>
2. 局部变量会被回收，也就是函数一旦运行完以后，函数内部的东西都会被销毁。
3. 只要被另外一个作用域所引用就不会被回收 

## 事件执行过程
事件捕获 -> 事件处理 -> 事件冒泡
不支持事件冒泡的事件：abort,blur,focus,error,load,mouseenter,mouseleave,resize,unload

## var变量提升
函数会在变量赋值之前提升并定义