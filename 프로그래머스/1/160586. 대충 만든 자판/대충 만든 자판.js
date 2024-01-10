function solution(keymap, targets) {
    let mapKey = new Map();
    let result = []
    
    for(let item of keymap){
        for(let i = 0; i < item.length; i++){
            if (mapKey.has(item[i])) {
                mapKey.set(item[i], Math.min(mapKey.get(item[i]), i + 1))
            } else {
                mapKey.set(item[i], i + 1);
            } 
        }
    }
    console.log(mapKey)
    
    for (let tCheck of targets) {
        let keyNumber = 0
        for (let i = 0; i < tCheck.length; i++) {
            if (mapKey.has(tCheck[i])) {
                keyNumber += mapKey.get(tCheck[i])
            } else {
                keyNumber = -1
                break
            }
        }
        result.push(keyNumber)
    }

    return result
}