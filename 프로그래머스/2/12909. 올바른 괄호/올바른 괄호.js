function solution(s){
    let check = s.replace(/\(\)/g, "")
    let count = 0

    for (let x of check) {
        x === "(" ? count++ : count--
        if (count < 0) return false
    }

    return !count ? true : false
}
