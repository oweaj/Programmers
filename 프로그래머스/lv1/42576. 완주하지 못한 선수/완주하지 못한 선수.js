function solution(participant, completion) {
    let start = participant.sort();
    let end = completion.sort();

   for (let i = 0; i < start.length; i++) {
       if(start[i] !== end[i]) {
         return start[i]  
       } 
   }
}
