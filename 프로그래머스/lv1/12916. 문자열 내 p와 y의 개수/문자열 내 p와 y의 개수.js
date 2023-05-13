function solution(s){
  let str = s.toUpperCase();
  let count = 0;
  
  for (let x of str) {
      x === "P" ? count++ : x === "Y" ? count-- : 0
    }
  
  return count === 0 ? true : false;
}