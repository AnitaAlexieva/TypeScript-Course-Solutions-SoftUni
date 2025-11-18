class Person1 {
    firstName:string;
    lastName:string;
    age:number;

    constructor(firstName:string, lastName:string, age:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    introduce():string{
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`
    }
}

const person = new Person1("John", 'Doe', 30);
console.log(person.introduce());