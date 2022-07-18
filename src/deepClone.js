function deepClone(obj) {
    // 判断传入的是否是引用类型或者null，如果不是引用类型或者是null，则直接返回
    if (typeof obj !== "object" || obj == null) {
        return obj;
    }
    // 定义一个新对象
    let newObj;
    // 判断传进来的是数组还是对象
    if (obj instanceof Array) {
        // 是数组就给newObj赋值一个空数组
        newObj = [];
    } else {
        // 是对象就给newObj赋值一个空对象
        newObj = {};
    }
    // 循环遍历对象上的key
    for (let key in obj) {
        // 判断是否是对象本身上的key，对象原型身上的key不进行拷贝
        if (obj.hasOwnProperty(key)) {
            // 递归调用deepClone
            newObj[key] = deepClone(obj[key]);
        }

    }
    // 返回这个新对象
    return newObj;
}


// 测试
let obj = {
    name: 'lzt',
    hobbies: ["sleep", "code"],
    friends: {
        name: "lzt2",
        age: 3
    }
}

newObj = deepClone(obj);
console.log(obj);
console.log(newObj);

// {
//     name: 'lzt',
//     hobbies: ['sleep', 'code'],
//     friends: { name: 'lzt2', age: 3 }
// }
// {
//     name: 'lzt',
//     hobbies: ['sleep', 'code'],
//     friends: { name: 'lzt2', age: 3 }
// }

newObj.hobbies.push("eat");
newObj.friends.age = 5;
console.log(obj);
console.log(newObj);

// {
//     name: 'lzt',
//     hobbies: [ 'sleep', 'code' ],
//     friends: { name: 'lzt2', age: 3 }
// }
// {
//     name: 'lzt',
//     hobbies: [ 'sleep', 'code', 'eat' ],
//     friends: { name: 'lzt2', age: 5 }
// }