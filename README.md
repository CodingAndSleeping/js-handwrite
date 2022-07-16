# js-handwrite

## instanceof

```js
function myInstanceOf(target, origin) {
    // 循环遍历目标对象的原型链
    while (target) {
        // 判断target的原型是否是origin的实例对象
        if (target.__proto__ === origin.prototype) {
            // 是，则返回true
            return true;
        }
        // 否则让target等于其原型
        target = target.__proto__;
    }
    // 若target的原型不存在了，则返回false
    return false;
}
```

## bind

```js
Function.prototype.myBind = function (context, ...args1) {
    // bind并不会立即调用而是返回一个函数，并且可以多次传参
    return (...args2) => {
        // 如果改变的指向为null或undefined，则指向window
        context = context || window;
        //  将this指向的函数（即调用myBind函数的函数）赋值给context对象的一个属性
        context.fn = this;
        // 用context来调用该函数，那么该函数中的this则指向context
        let result = context.fn(...args1, ...args2);
        // 删除context中的fn属性
        delete context.fn;
        // 返回 result（即该箭头函数）
        return result;
    }
}

// 测试
let obj = {
    name: "lzt"
}

function fn(a, b, c) {
    console.log(this.name, a, b, c);
}

fn(1, 2, 3); // undefined 1 2 3

let newFn = fn.myBind(obj, 1, 2);
newFn(3); // lzt 1 2 3
```

## apply

```js
Function.prototype.myApply = function (context, args) {
    // 如果改变的指向为null或undefined，则指向window
    context = context || window;
    //  将this指向的函数（即调用myBind函数的函数）赋值给context对象的一个属性
    context.fn = this;
    // 用context来调用该函数，那么该函数中的this则指向context
    let result = context.fn(...args);
    // 删除context中的fn属性
    delete context.fn;
    // 返回 result
    return result;
}

// 测试
let obj = {
    name: "lzt"
}

function fn(a, b, c) {
    console.log(this.name, a, b, c);
}

fn(1, 2, 3); // undefined 1 2 3

fn.myApply(obj, [1, 2, 3]); // lzt 1 2 3
```

## call

```js
Function.prototype.myCall = function (context, ...args) {
    // 如果改变的指向为null或undefined，则指向window
    context = context || window;
    //  将this指向的函数（即调用myBind函数的函数）赋值给context对象的一个属性
    context.fn = this;
    // 用context来调用该函数，那么该函数中的this则指向context
    let result = context.fn(...args);
    // 删除context中的fn属性
    delete context.fn;
    // 返回 result
    return result;
}

// 测试
let obj = {
    name: "lzt"
}

function fn(a, b, c) {
    console.log(this.name, a, b, c);
}

fn(1, 2, 3); // undefined 1 2 3

fn.myCall(obj, 1, 2, 3); // lzt 1 2 3
```