const str="Hello World, How are You.."

//Upper Case Convertion
const strUpper=str.toUpperCase()

//Lower Case
const strLower=str.toLowerCase()

//Only First Char into Upper Case
const firstCharConv=str[0].toUpperCase()

//String Divideing ang swaping
const len=str.length
const hal=len/2
const firstHalf=str.slice(0,hal)
const secondhalf=str.slice(hal,len)
const merge=firstHalf.concat(secondhalf)
console.log(firstHalf)
console.log(secondhalf)
console.log(merge)

//Counting the repeating charcters
let obj={}
for(let i=0;str.length>i;i++){
    let count=str.charAt(i)
    obj[count]=(isNaN(obj[count])?1:obj[count]+1)
}
console.log(obj);


//Reversing the String
function reverseString(str){
    let strSplit=str.split("")
    let strRevesre=strSplit.reverse()
    let strjoinstrRevesre=strRevesre.join("")
    console.log(strjoinstrRevesre);
}
reverseString(str)
