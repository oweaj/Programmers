function solution(array) {

    let countNum = array.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc;
    }, {})

    let maxArr = Object.keys(countNum).sort((a, b) => countNum[b] - countNum[a]);
    
    return countNum[maxArr[0]] === countNum[maxArr[1]] ? -1 : Number(maxArr[0]);
}
