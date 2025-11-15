let names = {
    fName: 'John',
    lName: 'Doe',
    age: 22,
    getPersonInfo() {
        return `${this.fName} ${this.lName}, age ${this.age}`;
    }
};

let address = {
    city: 'Boston',
    street: 'Nowhere street',
    number: 13,
    postalCode: 51225,
    getAddressInfo() {
        return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`;
    }
};

type Names = typeof names;
type AddressType = typeof address;   // <— СМЕНЕНО име!
type Person = Names & AddressType;

function createCombinedFunction(names: Names, address: AddressType) {
    return function(person: Person) {
        console.log(`Hello, ${person.getPersonInfo()} from ${person.getAddressInfo()}`);
    };
}

let combinedFunction = createCombinedFunction(names, address);
let combinedPerson: Person = Object.assign({}, names, address);

combinedFunction(combinedPerson);
