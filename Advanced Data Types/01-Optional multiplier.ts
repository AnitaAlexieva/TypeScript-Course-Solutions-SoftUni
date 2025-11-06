function optionalMultiplier(num1?: string | number, num2?: string | number, num3?: string | number): number {
    return Number(num1 || 1) * Number(num2 || 1) * Number(num3 || 1)
}

console.log(optionalMultiplier('3', 5, '10'))
console.log(optionalMultiplier('2', '2'))
console.log(optionalMultiplier(undefined, 2, 3))
console.log(optionalMultiplier(7, undefined, '2'))
console.log(optionalMultiplier())
