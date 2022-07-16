function myNew(Fn, ...args){
    // 定义一个空对象
    let obj = {};
    // 将这个空对象的原型等于构造函数的原型对象
    obj.__proto__ = Fn.prototype;
    // 改变构造函数this指向，指向这个空对象，并执行构造函数里的代码
    let result = Fn.apply(obj, args);
    // 判断构造函数的返回值是否是个对象，若是，则返回这个对象，若不是，则返回定义的空对象
    return result instanceof Object ? result : obj;
}

// 测试
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.say = function(){
    console.log(this.name, this.age);
}

let p = myNew(Person, "lzt", "3");
p.say(); // lzt 3


