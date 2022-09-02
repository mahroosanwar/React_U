class Human {
  constructor() {
    this.gender = "Male"
  }
  
  printGender() {
    console.log(this.gender)
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Mahroos"
  }
  
  printMyName() {
      console.log(this.name)
  }
}

const person = new Person()
person.printMyName()
person.printGender()
