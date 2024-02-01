function solution(prices) {
    let result = []
    
    for (let i = 0; i < prices.length; i++) {    
        let second = 0
        let next = i + 1
        
        while (prices.length > next) {
            second++
            if (prices[i] <= prices[next]) {
                next++
                continue
            }
            if (prices[i] > prices[next]) break
        }
            
        result.push(second)
    }

    return result
}