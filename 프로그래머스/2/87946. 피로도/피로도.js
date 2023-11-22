function solution(k, dungeons) {
    let result = 0;

    const turn = (K, count, visit) => {  
        for (let i = 0; i < dungeons.length; i++) {
          if (!visit[i] && dungeons[i][0] <= K) {
            visit[i] = true;
            turn(K - dungeons[i][1], count + 1, visit);
            visit[i] = false;
          }
        }
        result = Math.max(result, count);
    };
    turn(k, 0, []);
 
    return result;
}