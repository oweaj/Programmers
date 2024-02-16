function solution(n) {
    let count = 1
    
    for (let i = 1; i < n; i++) {  
        let sum = 0
        for (let j = i; j < n; j++) {
            sum += j;
            if (sum === n) {
                count++;
                sum = 0;
                break
            } else if (sum > n) {
                sum = 0;
                break
            }
        } 
    }

    return count;
}