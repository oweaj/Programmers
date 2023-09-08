function solution(arr, flag) {
    let result = []
    
    for (let i = 0; i < flag.length; i++) {
        if (flag[i]) {
            result.push(...Array(arr[i] * 2).fill(arr[i]))
        } else {
            let end = result.length
            result.splice(end - arr[i], arr[i])
        }
    }
    
    return result;
}