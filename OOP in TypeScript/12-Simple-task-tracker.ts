class Task2{
    title:string;
    description:string;
    completed:boolean = false;
    private createdBy:string;

    constructor(title:string,description:string,createdBy:string){
        this.title = title;
        this.description = description;
        this.createdBy =createdBy;
}   

    get createdByUser(){
        return this.createdBy;
    }

    set createdByUser(user:string){
        this.createdBy = user;
    }

    toggleStatus():void{
        this.completed = !this.completed;
    }

    getDetails():string{
        return `Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`
    }

    static createSampleTasks() : Task2[]{
        return [
            new Task2("Learn TS", "Basics", "Gosho"),
            new Task2("Learn JS", "Top coding lessons", "Pencho")
        ]
    }
}

const task4 = new Task2("Complete homework",

"Finish math exercises", "Charlie");

task4.toggleStatus();

console.log(task4.getDetails());

const task5 = new Task2("Clean room", "Clean theroom", "Mary");

console.log(task5.getDetails());

const tasks = Task2.createSampleTasks();

tasks.forEach(task =>

console.log(task.getDetails()));