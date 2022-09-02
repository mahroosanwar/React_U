//spread(...) to split up array element or object properties
//elements
const number = [1, 2, 3]
const newNumber = [...number,4]

console.log(newNumber)

//objects

const person = {
  name:'mahroos'
}

const newPerson = {
  ...person,
  age: 24
}

console.log(newPerson)

//rest(...) to merge a list of function argument into an array 

const filter = (...args) => {
  return args.filter(el => el === 1)
}

console.log(filter(1, 2, 3))
