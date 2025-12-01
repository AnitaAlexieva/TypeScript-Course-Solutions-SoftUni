
function log(target:Object, methodName:string, descriptor:PropertyDescriptor   ){
    const original = descriptor.value;
    descriptor.value = function (...args:string[]){
        console.log(`Function: ${methodName} called with arguments: ${args.join(', ')}`)
        return original.apply(this, args)
    }

}

class Person2{
    fName: string;
    lName: string;

    constructor(fName:string, lName:string){
        this.fName = fName;
        this.lName = lName;
    }

    @log
    static getFullName(lName:string, fName:string){
        return `${fName}, ${lName}`
    }

}

let person2 = new Person2('John', 'Does');

Person2.getFullName(person2.fName, person2.lName)

Person2.getFullName('Benny', 'Tres');