function solution(babbling) {
    let baby = ["aya", "ye", "woo", "ma"]
    let count = 0
    
    babbling.forEach((el) => {
        for (let a of baby) {
            if (el.includes(a + a)) break
            el = el.split(a).join("X")
        }
        !el.split("X").join("") && count++
    })
        
    return count;
}