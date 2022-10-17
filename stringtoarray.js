/*By using split() method we can convert string into array. 
in this case string data will not get change it will in same stage,
but if we use any spaces and all then it will get change and dit will give in array for only.*/

let str="Hello world How are you!"
console.log(str.split(""));

//Output is below entire string comes into Array only.
[
    'H', 'e', 'l', 'l', 'o',
    ' ', 'w', 'o', 'r', 'l',
    'd', ' ', 'H', 'o', 'w',
    ' ', 'a', 'r', 'e', ' ',
    'y', 'o', 'u', '!'
  ]