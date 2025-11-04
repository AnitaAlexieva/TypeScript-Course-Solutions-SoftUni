function convertArrays(data: string[]): [string, number] {
    let concatenatedStr = '';

    for (let i = 0; i < data.length; i++) {
        concatenatedStr += data[i]
    }

    let concatenatedLength = concatenatedStr.length;
    return [concatenatedStr, concatenatedLength];
}

console.log(convertArrays(['How', 'are', 'you?']))