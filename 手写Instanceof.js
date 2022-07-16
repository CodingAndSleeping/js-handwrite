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

// 测试
let arr = [1, 2, 3];
console.log(myInstanceOf(arr, Array)); // true
console.log(myInstanceOf(arr, Object)); // true
console.log(myInstanceOf(arr, Number)); // false