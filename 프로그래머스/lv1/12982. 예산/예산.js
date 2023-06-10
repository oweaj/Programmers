function solution(d, budget) {
    let result = 0;
    let arr = d.sort((a, b) => a - b);
    
    for (let num of arr) {
        budget -= num;
        budget >= 0 ? result++ : result
    }
    
    return result;
}