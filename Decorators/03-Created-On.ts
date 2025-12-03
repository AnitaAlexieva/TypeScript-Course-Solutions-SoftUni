@addCreatedOn
class User4 {

    constructor(public name: string, public age: number) {}

    displayUserInfo() {
        return `${this.name}, ${this.age}`;
    }
}

function addCreatedOn(constructor: { new (...args: any[]): User4 }) {
    return class extends constructor {
        createdOn = new Date().toString();
    };
}

const user6 = new User4("John Doe", 30);

console.log(user6.displayUserInfo());  
console.log(user6);
console.log((user6 as any).createdOn);
