

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`my name be ${this.name} and i be ${this.age}`)
    }
}



module.exports = Person