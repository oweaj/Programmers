function solution(s) {
    let str = s.split(" ");
    let temp = [];
    
    for (let x of str) {
        x === "Z" ? temp.pop() : temp.push(Number(x))
    }
    
    let result = 0;
    for (num of temp) result += num;
    
    return result;
}