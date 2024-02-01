function solution(prices) {
    let result = []
    
    for (let i = 0; i < prices.length; i++) {    
        let second = 0
        for (let j = i + 1; j < prices.length; j++) {
            second++
            if (prices[i] <= prices[j]) continue
            if (prices[i] > prices[j]) break
        }
        result.push(second)
    }

    return result
}