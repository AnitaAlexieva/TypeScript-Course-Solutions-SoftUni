interface CountableSet<T> {
    add(item: T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
}

class CountableSet<T> implements CountableSet<T> {
    private dict = new Map<T, number>()

    add(item: T) {
        this.dict.set(item, (this.dict.get(item) || 0) + 1)
    }

    remove(item: T) {
        if (this.dict.has(item) && this.dict.get(item)! > 0) {
            this.dict.set(item, this.dict.get(item)! - 1)
        }
    }

    contains(item: T) {
        if (this.dict.has(item) && this.dict.get(item)! > 0) {
            return true
        } else {
            return false
        }
    }

    getNumberOfCopies(item: T): number {
        return this.dict.get(item) || 0;
    }
}

// let countedSet = new CountableSet<string>();

// countedSet.add('test');

// countedSet.add('test');

// console.log(countedSet.contains('test'));

// console.log(countedSet.getNumberOfCopies('test'));

// countedSet.remove('test')

// countedSet.remove('test')

// countedSet.remove('test')

// console.log(countedSet.getNumberOfCopies('test'));

// console.log(countedSet.contains('test'));

let codesCounterSet = new CountableSet<200 | 301 | 404 | 500>();

codesCounterSet.add(404);

codesCounterSet.add(200);

console.log(codesCounterSet.contains(404));

console.log(codesCounterSet.getNumberOfCopies(200));


// codesCounterSet.add(205); //TS Error

// codesCounterSet.getNumberOfCopies(350); //TS Error