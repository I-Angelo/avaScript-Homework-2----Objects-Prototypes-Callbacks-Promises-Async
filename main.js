//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let i = 0; i < Object.keys(person3).length; i++) {
    if (Array.isArray(Object.values(person3)[i])) {
        console.log(Object.values(person3)[i])
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name, age, gender, counter) {
        this.age = age;
        this.name = name;
        this.gender = gender;
        this.counter = counter;
    }
    
    printInfo() {
        return `Name : ${this.name} \nAge : ${this.age + this.counter++} , \nGender : ${this.gender}`
    }
}

let Ivan = new Person('Ivan', 44, 'Alpha-male', 0);

// Use printInfo form the newly installed wilma (Human) class
console.log(Ivan.printInfo())
console.log(Ivan.printInfo())


class Person2n3 {
    constructor(name, age, gender, counter2) {
        this.age = age;
        this.name = name;
        this.gender = gender;
        this.counter2 = counter2;
    }
    
    
    printInfo() {
        return `Name : ${this.name} \nAge : ${this.age + this.counter2} , \nGender : ${this.gender}`
    }
}

let ageAdd = 0
let cubed2 = (ageAdd) => {
    return ageAdd 
}


let John = new Person2n3('John', 58, 'Male', cubed2(0));
let Pat = new Person2n3('Pat', 44, 'Female', cubed2(3));

console.log(John.printInfo())
console.log(Pat.printInfo())
 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
let string1 = "Ivan Angulo"
let res = new Promise((resolve, reject) => {
    if (string1.length > 10) {
        resolve()
    } else {
        reject()
    }
})

res.then(() => {
    console.log("Big word")
}).catch(() => {
    console.log("Small Number")
})





// And answer 2 code wars problems for tonight as well. One that you've done previously in python, one that you have not yet done. All must be produced in JavaScript.

// **** Codewars # 1

// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

function isDivisible(n, x, y) {
    let res = 0
    if ((n % x == res) && (n % y == res)) {
        return true
    } else {
      return false
    }
  }


// *** Codewars # 2


// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript

function numberToString(num) {
    return num.toString()
  }