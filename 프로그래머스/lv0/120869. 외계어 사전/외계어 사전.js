function solution(spell, dic) {
    let result = []
    
    for (let str of dic) {
        let count = 0
        for (let x of spell) {
            if(str.includes(x)) {
                count++
            }
        }
        if (spell.length === count) {
            result.push(str)
        }
    }

    return result.length > 0 ? 1 : 2;
}