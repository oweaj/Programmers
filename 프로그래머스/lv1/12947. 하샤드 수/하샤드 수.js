function solution(x) {
    let str = x.toString().split("");
    let sum = 0;

    for (let num of str) {
        sum += Number(num);
    } 
  
    return x % sum === 0 ? true : false
}