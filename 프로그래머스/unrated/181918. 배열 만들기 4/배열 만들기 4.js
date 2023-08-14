function solution(arr) {
    let stk = [];
    
    for (let i = 0; i < arr.length; i++) {
        !stk.length ? stk.push(arr[i]) : stk[stk.length - 1] < arr[i] ? stk.push(arr[i]) : (stk.pop(), i--)
    }
    
    return stk;
}