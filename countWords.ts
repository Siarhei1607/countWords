let input: string = "aaa bb bb rrrrr aaa r t";

function countWords(str: string, n: number){
    let splitStr = str.split(' ');
    let res = new Map();
    for(let i = 0; i < splitStr.length; i++){
        if(!res.has(splitStr[i])){
            res.set(splitStr[i], 1)
        }else{
            let count: number = res.get(splitStr[i]);
            res.set(splitStr[i], count + 1)
        }
    }
    let arr = Array.from(res.entries());
    return arr.slice(0, n).sort((a, b) => b[1] - a[1])
}

countWords(input, 2);
export {countWords}