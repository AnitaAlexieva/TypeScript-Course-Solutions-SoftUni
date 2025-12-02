function validateAge(target: Object, propertyName: string, descriptor: PropertyDescriptor) {
    let original = descriptor.set;
    descriptor.set = function (age: number) {
        if (age <= 1 || age >= 200) {
            throw new Error(`Error: Age must be betweeen 1 and 200`)
        } else {
            original?.call(this, age)
        }
    }
}


class Age {

    private _age!: number;

    constructor(age: number) {

        this.age = age;

    }

    @validateAge
    set age(val: number) { this._age = val; }

    get age() { return this._age; }

}

let ageVal = new Age(10);

ageVal.age = -10;
