//boolean , string, nums are primitive type 
const num = 1;
const num2 = num;   //num2 will copy the num exactly

console.log(num2)

//but objects & arrays are different they are reference types
//person object stored in memory  and const person is store pointer to that place in memory
const person = {
  name: 'mahroos'
};

person.name = 'Falah'
const secondPerson = person;

console.log(secondPerson);//output: [object Object] {
                                   //   name: "Falah"
                                   // }


//so we copy this in immutable away(actual copying the properties & value of the properties)

const secondPerson1 = {
  ...person
}
person.name = 'Happy'
console.log(secondPerson1)
