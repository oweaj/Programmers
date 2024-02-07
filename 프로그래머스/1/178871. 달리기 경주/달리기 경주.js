function solution(players, callings) {
    let temp = {}
    players.forEach((el, i) => temp[el] = i)

    for (let x of callings) {
        let index = temp[x]
        let next = players[index - 1]
        
        if (index > 0) {
            players[index - 1] = x;
            players[index] = next
            temp[x] = index - 1
            temp[next] = index   
        }
    }

    return players;
}