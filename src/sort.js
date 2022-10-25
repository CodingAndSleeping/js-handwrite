/**
 * 冒泡排序
 * @param {*} arr 目标数组 
 * @returns 排序后数组
 */
function bubbleSOrt(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
const arr = [4, 8, 0, 1, 5, 6];
console.log(bubbleSOrt(arr));

/**
 * 选择排序
 * @param {*} arr 目标数组 
 * @returns 排序后数组
 */
function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            const temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
}

const arr1 = [4, 8, 0, 1, 5, 6];
console.log(selectSort(arr1));

/**
 * 插入排序
 * @param {*} arr 目标数组 
 * @returns 排序后数组
 */
function insertSort(arr){
    for(let i =1; i<arr.length;i++){
        const temp = arr[i];
        let j = i;
        while(j>0){
            if(arr[j-1]>temp){
                arr[j] = arr[j-1]
            }else{
                break;
            }
            j--;
        }
        arr[j] = temp;
    }

    return arr;
}

const arr2 = [4, 8, 0, 1, 5, 6];
console.log(insertSort(arr2));


/**
 * 快速排序
 * @param {*} arr 目标数组 
 * @returns 排序后数组
 */
function quickSort(arr){
    if(arr.length === 1 || arr.length ===0 ) return arr;
    const left = [];
    const right = [];
    const mid = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i]<mid){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(mid, quickSort(right));
}

const arr3 = [4, 8, 0, 1, 5, 6];
console.log(quickSort(arr3));