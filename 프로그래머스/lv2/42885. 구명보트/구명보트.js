function solution(people, limit) {
    let kg = people.sort((a, b) => b - a);
    let boat = 0;

    for(let i = 0; i < kg.length; i++) {
        if (kg[i] + kg[kg.length - 1] <= limit) {
            kg.length--
        } 
        boat++
    } 

    return boat
}
 
  // 효율성 실패

  // while (kg.length > 0) {
  //       let sum = kg[0] + kg[kg.length - 1];
  //       if (sum <= limit) {
  //         kg.pop();
  //         kg.shift();
  //         boat++;
  //       } else {
  //         boat++;
  //         kg.shift();
  //       }
  // }