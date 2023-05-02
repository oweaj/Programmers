function solution(array) {
    let arr = array.sort((a, b) => a - b);
    
    let divNum = Math.floor(arr.length / 2)
    
    return arr[divNum]
}