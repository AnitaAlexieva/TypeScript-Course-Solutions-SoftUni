type User1 = {
    id: number | string,
    username: string,
    passwordHash: string | string[],
    status: 'Locked' | 'Unlocked' | 'Deleted',
    email?: string
}

function validateUser(data: object) : data is User1 {

    const isValidId = "id" in data && 
    ((typeof data.id === "number" && data.id > 100) || 
    (typeof data.id === "string" && data.id.length === 14))

    const isValidUsername = "username" in data && 
        (typeof data.username === "string" && 
        (data.username.length >= 5 && data.username.length <=10));

    const isPassHashValid = "passwordHash" in data && 
    ((typeof data.passwordHash === "string" && 
        (data.passwordHash.length === 20)   
    ) || (Array.isArray(data.passwordHash) && 
    data.passwordHash.length === 4 &&
    data.passwordHash.every(el => typeof el === "string") &&
    data.passwordHash.every(el => el.length === 8)));

    const isStatusValid = "status" in data && (typeof data.status === "string" &&(
        (data.status === 'Locked' || data.status === 'Unlocked')))



    return isValidId && isValidUsername && isPassHashValid && isStatusValid;
}

console.log(validateUser({ id: 120, username: 'testing', passwordHash: '123456-123456-123456',
status: 'Deleted', email: 'something' }))

console.log(validateUser({ id: '1234-abcd-5678', username: 'testing',
passwordHash: '123456-123456-123456', status: 'Unlocked' }))

console.log(validateUser({ id: '20', username: 'testing', passwordHash: '123456-123456-123456',
status:'Deleted', email: 'something' }))

console.log(validateUser({ id: 255, username: 'Pesho', passwordHash: ['asdf1245', 'qrqweggw',
'123-4567','98765432'], status: 'Locked', email: 'something' }))