function solution(array) {
    let count = 0

    for (let num of array) {
        let split = num.toString().split("")
        for (let x of split) {
            Number(x) === 7 ? count++ : 0    
        }
    }

    return count;
}