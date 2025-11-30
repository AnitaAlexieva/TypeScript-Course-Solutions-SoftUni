type FunctionExport<T> = {
    [K in keyof T] : T[K] extends Function ? K : never
}[keyof T]

type AllFunctions<T> = Pick<T, FunctionExport<T>>

type test4 = {

name: string,

age: number,

test:() => string;

}

type extracted4 = AllFunctions<test>

type Employee4 = {

name: string,

salary: number,

work: () => void,

takeBreak: () => string

};


type extracted3 = AllFunctions<Employee>;

type Nope = {

name: string

};


type extracted5 = AllFunctions<Nope>;