let str="Hello world Hello everyone."
let word="Hello"
let count=0
function occurenceFn(str,word){
    let spl=str.split(" ")

    for(let i=0;i<spl.length;i++){
        if(word==spl[i]){
            count++
        }
    }
    console.log(count);
}

occurenceFn(str,word)//2 times Hello repeated