function customTypeGuard(param: unknown): param is string[] {
    if (param && Array.isArray(param) && param.length > 0 && param.every((el) => typeof el === 'string')) {
        return true
    }

    return false
}

console.log(customTypeGuard({}))
console.log(customTypeGuard({ test: 'one' }))
console.log(customTypeGuard([]))
console.log(customTypeGuard(undefined))
console.log(customTypeGuard(null))
console.log(customTypeGuard([12, 13]))
console.log(customTypeGuard([12, 13]))
console.log(customTypeGuard(['a', 'b', 'c']))
