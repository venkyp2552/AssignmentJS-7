let str="icecream";
function truncateFn(str,len) {
    if(str.length>len){
        if(len<=3){
            return str.slice(0,len-3)+"..."
        }else{
            return str.slice(0,len)+"..."
        }
    }
    else{
        return str
    }
}
console.log(truncateFn(str,4));