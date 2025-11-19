class Employee{
    public name : string;
    protected positon : string;
    private salary : number;

    constructor(name : string,positon : string, salary : number ){
        this.name = name;
        this.positon = positon;
        this.salary = salary;
    }

    getDetails():string{
        return `Name: ${this.name}, Position: ${this.positon}`
    }

    showSalary():string{
        return `Salary: $${this.salary}`
    }
}
const emp = new Employee("Alice", "Manager", 5000);

console.log(emp.getDetails());

console.log(emp.showSalary());

console.log(emp.name)

// console.log(emp.salary)

// console.log(emp.position)