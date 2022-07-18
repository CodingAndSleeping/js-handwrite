// 定时器版节流函数，接收一个函数和一个延迟时间
function throttle(fn, delay) {
    // 定义一个初始状态，为false
    let flag = false;
    // 返回一个函数
    return function () {
        // 如果flag为true，则直接返回，不再往下执行
        if (flag) return;
        // 修改flag为true
        flag = true
        // 设置定时器
        setTimeout(() => {
            // 执行fn函数，改变函数的this指向，并传递参数
            fn.apply(this, arguments);
            // 修改flag为false
            flag = false
        }, delay)

    }
}

// 事件戳版节流函数，接收一个函数和一个延迟时间
function throttle(fn, delay) {
    // 初始时间为0
    let time = 0;
    return function () {
        // 获取当前时间戳
        let now = new Date().valueOf();
        // 判断当前时间减去上一时间是否大于延迟时间间隔
        if (now - time >= delay) {
            // 执行fn函数，改变函数的this指向，并传递参数
            fn.apply(this, arguments);
            // 让time等于当前时间
            time = now;
        }
    }
}