class User3 {

    private _name!: string;

    private _age!: number;

    private _password!: string;


    constructor(name: string, age: number, password: string) {

        this.name = name;

        this.age = age;

        this.password = password;

    }

    @validateName(3)
    set name(val: string) {
        this._name = val;
    }

    @validateAge2(1, 100)
    set age(val: number) {
        this._age = val;
    }

    @validatePassword(/^[a-zA-Z0-9]+$/g)
    set password(val: string) {
        this._password = val;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}

function validateName(minLength: number) {
    return function (
        target: any,
        propertyName: string,
        descriptor: PropertyDescriptor
    ) {
        let original = descriptor.set
        descriptor.set = function (newName: number) {
            if (newName < minLength) {
                throw new Error(`name must have a min length of ${minLength} characters`)
            }

            original?.call(this, newName)
        }
        return descriptor
    }
}

function validateAge2(min: number, max: number) {
    return function (
        target: any,
        propertyName: string,
        descriptor: PropertyDescriptor
    ) {
        let original = descriptor.set
        descriptor.set = function (newAge: number) {
            if (newAge < min || newAge > max) {
                throw new Error(`age must be between ${min} and ${max}`)
            }

            original?.call(this, newAge)
        }

        return descriptor
    }
}

function validatePassword(regex: RegExp) {
    return function (
        target: any,
        propertyName: string,
        descriptor: PropertyDescriptor
    ) {
        let orginal = descriptor.set
        descriptor.set = function (newPassword: string) {
            if (!newPassword.match(regex)) {
                throw new Error(`password needs to match ${regex}`)
            }

            return orginal?.call(this, newPassword)
        }
        return descriptor
    }
}

let user5 = new User3('John', 130,

    'hardPassword12');

let user21 = new User3('John', 30, '!test');

let user31 = new User3('John', 25, '@werty');

let user41 = new User3('Jo', 20,

    'password123');