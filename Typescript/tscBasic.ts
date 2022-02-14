
const add = function (x: number, y: number): number {
    return x + y
}

const add2: (x: number, y: number, z?: number) => number = add

console.log(add(3, 4));

// ----------------------------------------------------------------
// constructor with extends
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    }

    run() {
        return `${this.name} is running`
    }
}

class Dog extends Animal {

    bark() {
        return `${this.name} is barking`
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name)
        console.log(this.name);

    }

    run() {
        return 'Meow ' + super.run()
    }
}

const animal: Animal = new Animal('wofie')
console.log(animal.run());

const lang: Dog = new Dog('lang')
console.log(lang.run());
console.log(lang.bark());

const maomao = new Cat('maomao')
console.log(maomao.run());



