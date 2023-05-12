function solution(my_string) {
    let result = [];
    let num = 1
 
   for (let str of my_string) {
       let strCheck = Number(str);
     
       if (!isNaN(strCheck)) {
           result.push(strCheck)
       }
   }
   
    return result.sort((a, b) => (a - b));
}