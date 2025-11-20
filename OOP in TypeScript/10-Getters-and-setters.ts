class User2 {
    private _username!: string;

    constructor(username: string) {
        this.username = username;
    }

    get username() {
        return this._username;
    }

    set username(newUsername:string){
        if(newUsername.length >= 3){
            this._username = newUsername;
        }else{
            throw new Error('Username must be at least 3 characters long')
        }
    }
}

const user1 = new User2("Martin");

user1.username = "johnDoe";

console.log(user1.username);

const user2 = new User2("jo");

const user3 = new User2("Martin");

user3.username = "Do";