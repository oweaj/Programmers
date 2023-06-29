function solution(i, j, k) {
    let count = 0
    
    for (let x = i; x <= j; x++) {
        let str = String(x).split("")
        for (let same of str) {
            if(same === String(k)) count++
        }
    }

    return count;
}