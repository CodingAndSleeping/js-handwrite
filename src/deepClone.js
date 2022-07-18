function deepClone(obj) {
    if (typeof obj !== "object" || obj == null) {
        return obj;
    }

    let newObj;
    if (obj instanceof Array) {
        newObj = [];
    } else {
        newObj = {};
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]);
        }

    }

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