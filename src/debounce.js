// 防抖函数，接收两个参数，一个是要执行的函数，另一个是延迟时间
function debounce(fn, delay) {
    // 定义一个空的变量
    let timer = null;
    // 返回一个函数
    return function () {
        // 判断timer是否为空
        if (timer) {
            // 如果不为空，则清除定时器timer
            clearTimeout(timer);
        }
        // 给timer赋值一个定时器
        timer = setTimeout(() => {
            // 执行fn函数，改变函数的this指向，并传递参数
            fn.apply(this, arguments)
        }, delay);
    }
}