function solution(phone_book) {
    const sort = phone_book.sort()
    
    for (let i = 0; i < sort.length - 1; i++) {
        if (sort[i] === sort[i + 1].slice(0, sort[i].length)) {
            return false
        }
    }
    
    return true
}

// hash 풀이
// function solution(phone_book) {
//     const hash = {}
    
//     for (let num of phone_book) {
//         hash[num] = true
//     }
    
//     for (let item of phone_book) {
//         for (let i = 1; i < item.length; i++) {
//             const check = item.slice(0, i)
//             if (hash[check]) return false
//         }    
//     }

//     return true;
// }