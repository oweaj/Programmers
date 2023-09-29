function solution(myString, pat) {
    
    let check = myString.lastIndexOf(pat)
    
    return myString.slice(0, check + pat.length)
}