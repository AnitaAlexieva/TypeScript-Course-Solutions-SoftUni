function summarizePerson(
    id: number,
    fName: string,
    lName: string,
    age: number,
    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number]
) : [number, string, number, string, string]{

    const fullName = middleName ? `${fName} ${middleName} ${lName}` : `${fName} ${lName}`

    const hobbiesStr = hobbies && hobbies.length > 0 ? hobbies.join(', ') : `-`;

    const jobAndSalaryStr = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : `-`

    return [id, fullName, age, hobbiesStr, jobAndSalaryStr]
}

console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['SalesConsultant', 2500]))
console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']))
console.log(summarizePerson(21, 'Joseph', 'Angler', 28))
console.log(summarizePerson(21, 'Kristine', 'Neva', 23, ''))
