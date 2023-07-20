function solution(arr, k) {
    let newArr = [...new Set(arr)]
    
    if (newArr.length > k) {
        return newArr.slice(0, k)
    } else {
        return [...newArr, ...Array(k - newArr.length).fill(-1)]
    }
}