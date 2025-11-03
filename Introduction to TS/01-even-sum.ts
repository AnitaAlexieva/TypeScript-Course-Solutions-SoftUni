function evenSum(num1: number, num2: number, num3: number): boolean {
    let sum: number = num1 + num2 + num3;
    let isEven: boolean = false;

    if (sum % 2 === 0) {
        isEven = true
    } else {
        isEven = false
    }

    return isEven
}

console.log(evenSum(1, 2, 3))
console.log(evenSum(1, 1, 3))
