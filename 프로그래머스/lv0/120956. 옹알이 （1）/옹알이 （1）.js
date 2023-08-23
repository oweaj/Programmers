function solution(babbling) {
    let arr = ["aya", "ye", "woo", "ma"]
    let count = 0
    
    for (let item of babbling) {
        let size = item.length
        for (let check of arr) {
            if (item.includes(check)) {
                size = size - check.length
            }
            if (size === 0) {
                count++
                break
            }
        }
    }
    
    return count;
}