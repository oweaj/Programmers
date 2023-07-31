function solution(num_list) {
    let even = 0, odd = 0
    
    num_list.forEach((el, i) => {
        i % 2 === 0 ? even += el : odd += el
    })

    return even > odd ? even : odd;
}