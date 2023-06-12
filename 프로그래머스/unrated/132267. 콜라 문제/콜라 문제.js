function solution(a, b, n) {
    // a개 빈병을 가져다주면 콜라 b병 서비스, 만약 빈병 n개를 가져다 주면?
    let coke = 0;
   
    while(n >= a) {
        let change = Math.floor(n / a) * b;     
        n %= a 
        n += change;
        coke += change;
    }

    return coke;
}