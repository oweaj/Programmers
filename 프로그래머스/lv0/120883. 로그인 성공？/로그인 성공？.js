function solution(id_pw, db) {
    
    for (let item of db) {
        if (id_pw[0] === item[0]) {
            return id_pw[1] === item[1] ? "login" : "wrong pw"   
        }
    }
    
    return "fail"
}