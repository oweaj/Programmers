function solution(a, b) {
    let dateEnd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let day = b + 4;     // 0부터 일요일이면 5가 금요일이니 1일이 금요일이라고하니 +4 해줌
    
    for (let i = 0; i < a - 1; i++) {
        day += dateEnd[i];
    }
    
    return week[day % 7];
} 