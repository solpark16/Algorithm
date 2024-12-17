function solution(myString) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return [...myString].map((el)=>{
        if (alphabet.indexOf(el)<11){
            return 'l'
        }
        return el
    }).join('')
    
}