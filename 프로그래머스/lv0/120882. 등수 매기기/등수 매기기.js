function solution(score) {
    let result = new Array(score.length).fill(1)
    let avg = score.map(([a, b]) => (a + b) / 2)
    
    for (let i = 0; i < avg.length; i++) {
        for (let j = 0; j < avg.length; j++) {
            if(avg[i] < avg[j]) result[i]++
        }
    }
    
    return result
}