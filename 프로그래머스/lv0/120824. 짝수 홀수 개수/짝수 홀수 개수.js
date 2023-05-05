function solution(num_list) {
    let even = [];
    let odd = [];
    
    for (num of num_list) {
        num % 2 === 0 ? even.push(num) : odd.push(num)
    }
    
    return [even.length, odd.length];
}