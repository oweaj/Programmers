function solution(A, B) {
    let splitA = A.split("")
    
    if (A === B) return 0
    
    for (let i = 1; i < splitA.length; i++) {            
        splitA.unshift(splitA.pop())
        if (splitA.join("") === B) return i
    }
    
    return -1
}