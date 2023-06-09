function solution(progresses, speeds) {
    let result = []
    
    while (progresses.length) {
        let count = 0
        
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i]
        }
        
        while(progresses[0] >= 100) {
            count++
            progresses.shift()
            speeds.shift()
        }
        // 완료면 저장
        if (count !== 0) result.push(count)
    }
    
    return result;
}