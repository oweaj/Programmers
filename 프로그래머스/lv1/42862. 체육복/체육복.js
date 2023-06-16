function solution(n, lost, reserve) {
    let result = 0
    let temp = new Array(n).fill(1)  // 학생전부 체육복 가지고있다는 가정 배열
    
    lost.forEach((item) => temp[item - 1] -= 1) // 체육복 도난당한 학생들 -1
    reserve.forEach((item) => temp[item - 1] += 1) // 체육복 여유있는 학생들 +1
    
    // 체육복 2개인 학생이 앞뒤로 0개인 학생에게 빌려줄수있는지 여부
    for (let i = 0; i < temp.length; i++) {
        if ((temp[i] === 0 && temp[i + 1] === 2) || (temp[i] === 2 && temp[i + 1] === 0)) {
            temp[i] = 1;
            temp[i + 1] = 1;
        }
    }
    
    for (let num of temp) {
        if (num >= 1) result++;
    }

    return result;
}