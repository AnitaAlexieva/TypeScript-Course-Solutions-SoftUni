class MockAuthrizationService {

    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { }

    canViewData(property: string) {

        switch (this.userRole) {

            case 'Admin': return true;

            case 'PersonalDataAdministrator': return ['name',

                'age'].includes(property);

            default: return false;

        }

    }

}

let mockAuthorizationService = new

    MockAuthrizationService('PersonalDataAdministrator');

class User {
    constructor(
        private _name: string,
        private _age: number,
        private _creditCardNumber: string
    ) { }

    @authorize(mockAuthorizationService)
    get name() {
        return this._name;
    }

    @authorize(mockAuthorizationService)
    get age() {
        return this._age
    }

    @authorize(mockAuthorizationService)
    get creditCardNumber() {
        return this._creditCardNumber
    }
}

function authorize(userService: MockAuthrizationService) {
    return function (target: Object, propertyName: string, descriptor: PropertyDescriptor) {
        let original = descriptor.get
        descriptor.get = function () {
            const hasAccess = userService.canViewData(propertyName);

            if (!hasAccess) {
                throw new Error('You are not authorized to view this information')
            }
            return original?.call(this)
        }
    }
}

const user4 = new User("John Doe", 30, 'ABCD-1234');

console.log(user4.name);

console.log(user4.age);

console.log(user4.creditCardNumber);