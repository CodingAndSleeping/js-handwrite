class myPromise {
    constructor(executor) {
        // promise有三个状态，分别为pending，fulfilled和rejected，初始状态为pending
        this.state = "pending";
        // 定义一个变量用来保存成功或失败的值
        let value = null;
        // 成功后的回调函数数组，实现promise的同步作用
        this.onResolveCallbacks = [];
        // 失败后的回调函数数组
        this.onRejectedCallbacks = [];
        // resolve函数
        let reslove = res => {
            // 加一个定时器使其变成异步函数
            setTimeout(() => {
                if (this.state == "pending") { // 判断状态是否为 pending
                    // 状态修改为 fulfilled
                    this.state = "fulfilled";
                    // value值修改为传入的值
                    this.value = res;
                    // 执行成功后的回调函数数组里的每个函数
                    this.onResolveCallbacks.forEach(fn => fn());
                }
            }, 0);
        }
        // reject函数
        let reject = err => {
            // 加一个定时器使其变成异步函数
            setTimeout(() => {
                if (this.state == "pending") { // 判断状态是否为 pending
                    // 状态修改为 rejected
                    this.state = "rejected";
                    // value值修改为传入的值
                    this.value = err;
                    // 执行失败后的回调函数数组里的每个函数
                    this.onRejectedCallbacks.forEach(callback => callback());
                }
            }, 0);
        }
        // 捕捉executor里的错误
        try {
            // 执行executor函数
            executor(reslove, reject);
        } catch (error) {
            // 有错误则执行reject函数
            reject(error)
        }
    }

    // then函数
    then(onFulfilled, onRejected) {
        // 判断传进来的参数是否是函数，如果不是则赋值一个空函数
        onFulfilled = typeof onFulfilled === "function" ? onFulfilled : () => { };
        onRejected = typeof onRejected === "function" ? onRejected : () => { };
        // 返回一个新的myPromise对象
        return new myPromise((reslove, reject) => {
            if (this.state == "fulfilled") { // 判断状态是否是fulfilled
                // 使其异步
                setTimeout(() => {
                    try {
                        // 执行onFulfilled函数，并接收返回值
                        const res = onFulfilled(this.value);
                        // 将返回值作为新promise中的reslove函数的参数
                        reslove(res);
                    } catch (err) {
                        reject(err);
                    }

                }, 0)
            }

            if (this.state == "rejected") { // 判断状态是否是rejected
                // 使其异步
                setTimeout(() => {
                    try {
                        // 执行onRejected函数，并接收返回值
                        const err = onRejected(this.value);
                        // 将返回值作为新promise中的reject函数的参数
                        reject(err);
                    } catch (err) {
                        reject(err);
                    }
                }, 0)
            }

            if (this.state == "pending") { // 判断状态是否是pending
                // 成功回掉函数数组里传入一个函数，函数里执行onFulfilled函数, 这个函数会在reslove函数执行时再执行
                this.onResolveCallbacks.push(() => {
                    try {
                        // 执行onFulfilled函数，并接收返回值
                        const res = onFulfilled(this.value);
                        // 将返回值作为新promise中的reslove函数的参数
                        reslove(res);
                    } catch (err) {
                        reject(err);
                    }
                })

                this.onRejectedCallbacks.push(() => {
                    try {
                        // 执行onRejected函数，并接收返回值
                        const err = onRejected(this.value);
                        // 将返回值作为新promise中的reject函数的参数
                        reject(err);
                    } catch (err) {
                        reject(err);
                    }
                })
            }
        })

    }

    // catch函数，catch函数本质就是then函数的第一个参数为空
    catch(onRejected) {
        return this.then(null, onRejected);
    }

}

// 测试
console.log("第一步")
new myPromise((reslove, reject) => {
    setTimeout(() => {
    reslove("成功了");
    reject("失败了");
    console.log("第三步");
    }, 1000);
})
    .then(
        res => {
            console.log(res);
            throw new Error("出错了！")
        },
        err => {
            console.log(err);
            return err;
        })
    .then(
        res => {
            console.log(res);
        },
        err => {
            console.log("错误是：" + err.message);
        })
console.log("第二步")
