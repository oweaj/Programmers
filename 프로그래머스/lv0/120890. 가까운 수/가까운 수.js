function solution(array, n) {
    array = array.sort((a, b) => a - b)
    let temp = [];
    
    for (let num of array) {
        temp.push(Math.abs(n - num));
    }
    
    let min = Math.min(...temp);
    let result = [];
    
    for (let i = 0; i < temp.length; i++) {
        if (min === temp[i]) result.push(i);
    }

    return array[Math.min(...result)];
}