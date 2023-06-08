function solution(arr) {
    let temp = []
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            temp.push(arr[i])
        }
    }

    return temp;
}