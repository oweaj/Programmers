function solution(s, skip, index) {
    const arr = [...s]
    const ascSkip = [...skip].map((el) => el.charCodeAt())
    let result = ""
    
    arr.map((el) => {
        let ascCode = el.charCodeAt()
        for (let i = 0; i < index; i++) {
            ascCode++
            if (ascCode > 122) ascCode = 97
            
            while (ascSkip.includes(ascCode)) {
                ascCode++
                if (ascCode > 122) ascCode = 97
            }
        }
        result += String.fromCharCode(ascCode)
    })
    
    return result;
}