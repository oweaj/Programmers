function solution(numer1, denom1, numer2, denom2) {
    let bottom = denom1 * denom2
    let top = (denom1 * numer2) + (denom2 * numer1)
    let divNum;
    
    for (let i = 1; i <= bottom; i++) {
        if (bottom % i === 0 && top % i === 0) {
            divNum = i
        }
    }
    
    return [top / divNum, bottom / divNum]
}