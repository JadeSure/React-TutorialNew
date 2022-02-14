enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction[0]);


function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

const results2 = swap(['string', 123])

function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg
}
const arrs = echoWithArr([1, 2, 3])


interface IWithLength {
    length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length);
    return arg
}
const st = echoWithLength('str')
const arr2 = echoWithLength([1, 3, 4, 5])
const obj = echoWithLength({ length: 10 });


class Queue<T>{
    private data: T[] = new Array<T>();
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T | undefined {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(1)

console.log(queue.pop());
console.log('--------------');



const queue2 = new Queue<String>()
queue2.push('str')
// console.log(queue2.pop().length);


console.log(queue);
console.log(queue2);

interface KeyPair<T, U> {
    key: T;
    value: U;
}

let kp1: KeyPair<number, string> = { key: 123, value: "str" }


interface IPlus1 {
    (a: number, b: number): number
}

function plus(a: number, b: number): number {
    return a + b
}
const a: IPlus1 = plus

interface IPlus2<T> {
    (a: T, b: T): T
}
const c: IPlus2<number> = plus


// generic alias
type type1 = string;
type type2 = () => string;
type type3 = type1 | type2;

function getName(n: type3): string {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}


// type assertion
function getLength(input: string | number): number {
    //     // const str = input as String
    //     // if(str.length){
    //     //     return str.length
    //     // }else{
    //     //     const number = input as Number
    //     //     return number.toString().length;
    //     // }

    //     // 等价于
    if ((<string>input).length) {
        return (<string>input).length
    } else {
        return input.toString().length
    }
}
