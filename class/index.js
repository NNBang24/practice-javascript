//cau1
'use strict'
class Bankcount {
    constructor(id, amount) {
        this.id = id,
            this.amount = amount
    }
    withdraw(value) {
        this.amount -= value;
        return `Id : ${this.id} 
So tien rut : ${value}
So tien con lai ${this.amount} `;
    }
}
const obj = new Bankcount('1FG', 200);
console.log(obj.withdraw(20))

//cau 2
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Bird extends Animal {
    constructor(name) {
        super(name)
    }
}
const instance = new Bird('Hawk');

console.log(instance);

//cau 3
class Product {
    constructor(name, price) {
        this.name = name,
            this.price = price

    }
}
class Cart {
    constructor() {
        this.itemList = [];
    }
    add(item) {
        this.itemList.push(item)
        return item
    }
    getTotal() {
        let total = 0;
        for (let item of this.itemList) {
            total += item.price;
        }
        return total;
    }
}

const car = new Cart();
const pro = new Product('Bang', 1800);
const pro1 = new Product('Truc', 2000);
car.add(pro);
car.add(pro1);
console.log(car.itemList);
console.log(car.getTotal());

// cau 4 

class Character {
    constructor(hp, damge) {
        this.hp = hp;
        this.damge = damge
    }
    getDamge(damge) {
        this.hp -= damge
    }
}

class Hero extends Character {
    constructor(hp, damge, armor) {
        super(hp, damge);
        this.armor = armor
    }
    getDamge(damge) {
        this.hp -= damge - this.armor;
    }
    act(characters = []) {
        characters.forEach((item) => {
            if (item instanceof Monster) {
                item.getDamge(this.damge)
            }
        })
    }
}
class Monster extends Character {

    act(characters = []) {
        characters.forEach(item => {
            if (item instanceof Hero) {
                item.getDamge(this.damge)
            }
        })
    }
}


const hero = new Hero(150, 20, 5);
const monster1 = new Monster(100, 10);
const monster2 = new Monster(100, 10);
const monster3 = new Monster(100, 10);

const characters = [
    hero,
    monster1,
    monster2,
    monster3
]
for (const item of characters) {
    item.act(characters);
}
console.log(characters);
///
'use strict';
const person = {
    firstName: 'Tran',
    lastName: 'A',
    birthYear: 2000,
    getAge: function () {
        return 2022 - this.birthYear;
    }
}
console.log(person.getAge());


// bat dong bo 

// setTimeout(() => {
//     getA();
//     setTimeout(() => {
//         getB();
//         setTimeout(() => {
//             getC();
//         }, 5000)
//     }, 4000)
// }, 3000)
//


// const promise = new Promise((resolve , reject) => {
//     getData((response)=>{
//         if(response.status === 200){
//             resolve(response.data) 
//         }
//         else{
//             reject(` can't connect banckend`)
//         }
//     })
// });
// promise.then((data) =>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })


// promise.then((data) => {
//     console.log('success')
// }).catch(()=>{
//     console.log('error')
// })

//
const promiseChain = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('logic A');
        resolve();
    }, 500);
});
/// ;uon ta gia tri la 1 promise
promiseChain.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('logic B');
            // resolve()
            reject('Error logic B')
        }, 1000)
    })
}).then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('logic C');
            resolve()
        }, 1500)
    })
}).then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('logic D');
            resolve()
        }, 2000)
    })
}).catch((error) => {
    console.log(error);
})

///
function readFile() {
    ///
}
function saveToBackend() {

}

const promises = new Promise((resolve, reject) => {
    readFile('data.json', function () { 
        resolve(data); 
    });
});

promises.then((data) => {
    saveToBackend(data);
}).then(() => {
    console.log('success')
}).catch(() => {
    console.log('Please try again')
})

//asunc function

async function calculate() {
    var a = 10 ;
    var b = 20 ;
    return a + b ;
}
calculate() ; /// return promise 

console.log('helo')