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