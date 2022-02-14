interface Person {
    readonly id: number;
    name: string;
    age?: number;
}

let viking: Person = {
    id: 1234,
    name: 'viking'
}

console.log(viking.id);
console.log(viking.name);

class Car implements Radio {
    switchRadio() {
        console.log('car');

    }
}

class Cellphone implements RadioWithBattery {
    switchRadio() {

    }

    checkBatteryStatus() {

    }
}

interface Radio {
    switchRadio(): void;
}

// interface Battery
// {
//     checkBatteryStatus(): void;
// }

interface RadioWithBattery extends Radio {
    checkBatteryStatus(): void;
}


interface namelist {
    [index: number]: string
}

var list2: namelist = ["John", "Bran"]
console.log(list2[0]);


interface ages {
    [index: string]: number
}
// let agelist: ages = { "John": 15, 2: "nie" };

// console.log(agelist);

