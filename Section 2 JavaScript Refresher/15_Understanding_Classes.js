class Human {
  constructor() {
    this.gender = "Male"
  }
  
  myGender() {
    console.log(this.gender)
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Mahroos"
  }
  
  myName() {
      (console.log(this.name))
  }
}

const person = new Person()
person.myName()
person.myGender()
