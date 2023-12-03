function solution(want, number, discount) {
    let result = 0;
    
    for (let i = 0; i <= discount.length - 10; i++) {
        let slice = discount.slice(i, i + 10);
        let flag = true
        for (let j = 0; j < want.length; j++) {
            let check = slice.filter((el) => el === want[j])
            if (check.length !== number[j]) {
                flag = false
                break
            }
        }
        if (flag) result++
    }

    return result
}