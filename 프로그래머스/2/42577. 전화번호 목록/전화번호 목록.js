function solution(phone_book) {
    const hash = {}
    
    for (let num of phone_book) {
        hash[num] = true
    }
    
    for (let item of phone_book) {
        for (let i = 1; i < item.length; i++) {
            const check = item.slice(0, i)
            if (hash[check]) return false
        }    
    }

    return true;
}