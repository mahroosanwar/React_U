//Decstructuring: Easily extract array element or object properties and store them in variables

//Array Destructuring
const number = [1, 2, 3];
[num1, , num3] = number
console.log(num1, num3)

//Object Destructuring
//syntex
{name} = {name:'Mahroos', age: 24}
console.log(name) //Mahroos
console.log(age)  //undifine(bcz no variable for age in left side)
