
//Write a “person” class to hold all the details.

class Person{
  constructor(name, age, gender, state, country){
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.state = state;
      this.country = country;
  }
}

let person = new Person("Tamilselvan", 24, "Male", "Tamil nadu", "India");
console.log(`“Person Details” 
${person.name}
${person.age}
${person.gender}
${person.state}
${person.country}
`)

//write a class to calculate the uber price.

const uber = {
  set kiloMeter(km){    
     this.price = `${km} km = Rs.${km * 22}` ;
  },
  get kiloMeter(){
     return this.price;
  }
}

uber.kiloMeter = 2;

console.log(`Answer : ${uber.kiloMeter}`)