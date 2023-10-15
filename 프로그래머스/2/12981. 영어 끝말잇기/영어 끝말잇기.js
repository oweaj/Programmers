function solution(n, words) {
    let temp = [words[0]]
    
    for (let i = 1; i < words.length; i++) {
        let endWord = words[i - 1].slice(-1)
        let startWord = words[i][0]
        
        if (endWord === startWord && !temp.includes(words[i])) {
            temp.push(words[i])
        } else {
            return [i % n + 1, Math.floor(i / n) + 1]
        }
    }

    return [0, 0]
}