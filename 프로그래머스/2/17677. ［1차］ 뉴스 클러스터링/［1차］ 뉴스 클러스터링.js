function solution(str1, str2) {
    let str1Arr = strCheck(str1)
    let str2Arr = strCheck(str2)
    let same = 0
    
    for (let i = 0; i < str1Arr.length; i++) {
        if (str2Arr.includes(str1Arr[i])) {
            same++
            str2Arr.splice(str2Arr.indexOf(str1Arr[i]), 1)
        } 
    }
    
    let different = str1Arr.length + str2Arr.length
    
    return different ? Math.floor((same / different) * 65536) : 65536
}

function strCheck(str) {
    let arr = []
    str = str.toUpperCase()
    
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] >= "A" && str[i] <= "Z" && str[i + 1] >= "A" && str[i + 1] <= "Z") {
            arr.push(str.slice(i, i + 2))    
        }
    }
    
    return arr
}