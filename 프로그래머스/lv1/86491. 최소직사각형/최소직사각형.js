function solution(sizes) {
    let sort = sizes.map(([a, b]) => a > b ? [a, b] : [b, a]);
    let maxArr = [0, 0];
    
    for (let num of sort) {
        if (num[0] > maxArr[0]) maxArr[0] = num[0]
        if (num[1] > maxArr[1]) maxArr[1] = num[1]
    }

    return maxArr[0] * maxArr[1];
}