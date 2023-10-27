function solution(k, tangerine) {
    let check = {}
    let count = 0
    
    tangerine.forEach((item) => {
        check[item] = (check[item] || 0) + 1
    })
    
    let checkArr = Object.values(check).sort((a, b) => b - a)
    
    for (let item of checkArr) {
        count++
        k -= item
        if (k <= 0) break
        
    }
    return count;
}