function solution(order) {
    let str = String(order).split("");
    let count = 0;
    
    for (let x of str) {
        let num = Number(x);
        if(num % 3 === 0 && num !== 0) count++
    }

    return count;
}