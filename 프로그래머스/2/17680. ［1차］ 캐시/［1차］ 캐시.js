function solution(cacheSize, cities) {
    let cache = []
    let result = 0
    if (!cacheSize) return cities.length * 5
    
    cities.forEach((el) => {
        el = el.toUpperCase()
        let check = cache.indexOf(el)
        // 캐시에 중복된 도시가 있다면
        if (check !== -1) {
            cache.splice(check, 1)
            result += 1
        // 캐시에 도시가 없다면
        } else {
            // 캐시 크기가 초과하면
            if (cacheSize <= cache.length) cache.shift()
            result += 5
        }
        cache.push(el)
    })
    
    return result;
}