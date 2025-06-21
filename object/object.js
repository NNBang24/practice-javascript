
// // person.name 
// // console.log(person['name']);
// // for ( var item in person){
// //     console.log(item);
// //     console.log(person[item])
// //     delete item.name
// //     console.log(item)
// // }


// // var entity = {
// //  id: '3G-1D',
// //  connectedCount: 2,
// //  createdAt: '2021-09-02 23:59:00',
// //  createdBy: 'user-01'
// // }
// // for ( var item in entity){
// //     console.log(entity[item])
// // }

// // var person = {
// //     name : 'Nguyen Nhat Bang' ,
// //     birthYear : 2003 ,
// //     country : 'Viet Nam',
// //     calculateAge : function(){
// //         console.log(2025 - this.birthYear)
// //     }
// // }
// // person.calculateAge()

// function dislay() {
//   console.log(this)
// }
// dislay()

// //
// 'use strict';

// var student = {
//   id: 'ST-11202',
//   name: 'Nguyen Thi Tuyet',
//   birthYear: 1999,
//   getInfo: function (currentYear) {
//     console.log(currentYear);
//     console.log(this);
//   }
// }
// student.getInfo.apply({}, [2022])

// // constructor function

// // var student = {
// //   id : 'A12',
// //   name : 'Nguyen Nhat Bang',
// //   country :  {
// //     code : 'Vi',
// //     name : 'Viet Nam'
// //   }
// // }
// function Student(id, name, country) {
//   this.id = id,
//     this.name = name,
//     this.country = country
// }

// Student.prototype.displayInfo = function () {
//   console.log(this.name)
// }
// var obj = new Student('A12', 'Nguyen Nhat Bang', { code: 'vi', name: 'Viet Nam' });
// console.log(obj)
// obj.displayInfo();

// //
// function Airplane(name) {
//   this.isFlying = false,
//     this.name = name
// }
// Airplane.prototype.takeOff = function () {
//   this.isFlying = true
// }
// Airplane.prototype.land = function () {
//   this.isFlying = false
// }
// // test 
// var obj1 = new Airplane('Bang');
// obj1.takeOff();
// console.log(obj1.isFlying)
// obj1.land();
// console.log(obj1.isFlying);
// // prototype
// // function Character(name, hp) {
// //  this.name = name;
// //  this.hp = hp;
// // }
// // Character.prototype.getName = function(){
// //   console.log("name: " + this.name + " , " +'Hp: ' + this.hp)
// // } 

// // var char = new Character('Bang' , 10 );
// // char.getName();
// /// bai tap 
// // cau 1
// var student = {
//   name: 'Nguyen Hung',
//   birthYear: 1990,
//   address: 'Ho Chi Minh City'
// };

// for (var item in student) {
//   console.log(typeof student[item])
// }
// // cau 2

// var subject = {
//   id: 'math-course',
//   name: 'Math',
//   joined: 3151,
//   isAvailable: false,
// };
// delete subject.joined;
// delete subject.isAvailable;
// for (var item in subject) {
//   console.log(item)
// }
// // cau 3 
// var countryInfo = {
//   name: 'VietNam',
//   gdb: 271.2,
//   population: 97.34
// }

// var obj = {};
// for (var key in countryInfo) {
//   obj[countryInfo[key]] = key;
// }
// console.log(obj)

// //cau 4 
// var student = {
//   name: 'Nguyen Hung',
//   learned: ['JavaScript', 'Python', 'Ruby'],
//   isGraduated: false,
//   grade: null,
// }
// student.learned.push('C#');
// console.log(student)

// student.learned.forEach(element => {
//   console.log(element);
// });
// student.grade = 'A+'
// console.log(student)
// for (var item in student) {
//   console.log(item + " : " + student[item])
// }
// // cau 5 
// ; // dap an C 
// // cau 6  dap an A 
// // cau 7 dap an C 
// // cau 8 dap an A
// // cau 9 
// function extract(task) {
//   console.log(this);
//   console.log(task);
// }
// const abc = extract.bind('letdiv', 'task 1')
// abc();
// // cau 10 
// var obj = {
//   view: '2D-GH-FP',
//   loop: function (number) {
//     for (var i = 0; i < number; i += 1) {
//       console.log(this);
//     }
//   }
// }
// var aabc = function () {
//   obj.loop.call('bang', 4)
// }
// aabc();

// // cau 11 
// function calculateAvg(number1, number2) {
//   var sum = number1 + number2;
//   var avg = sum / 2;
//   console.log('Avg: ' + avg);
//   console.log('This: ' + this);
// }
// var abcd = calculateAvg.apply(true, [10, 10])
// // cau 12 
// function Character(name) {
//   this.name = name;
//   this.hp = 100;
//   this.mana = 50
// }
// Character.prototype.getDame = function (damge) {
//   this.hp -= damge;
//   console.log('name :' + this.name + " , damge :" + this.hp + ", mana :" + this.mana)
// }
// Character.prototype.hit = function () {
//   if (this.mana >= 5) {
//     this.mana -= 5
//     console.log('name :' + this.name + " , damge :" + this.hp + ", mana :" + this.mana)
//   }
//   else {
//     console.log('Not enough mana')
//   }
// }
// var Character1 = new Character('bang')
// Character1.getDame(20);
// Character1.hit();


// var arr = [9, 4, 5, 2, 8, 6, 3, 7]
// var findMIn = arr[0];
// arr.forEach(function (item) {
//   if (findMIn > item) {
//     findMIn = item;
//   }
// })
// console.log(findMIn);

// //build-in object & methods 
// // var date = new Date('2022-07-10 23:00:00');
// // const intervar = setInterval(function() {
// //   date.setSeconds(date.getSeconds() + 1);
// //   console.log(date.getSeconds())
// // },1000)


// //cau 2
// function compare(date1, date2) {
//   if (date1.getTime() === date2.getTime()) {
//     return "Date1 = Date2";
//   }
//   else if (date1.getTime() > date2.getTime()) {
//     return "Date1 > Date2";
//   }
//   else return "Date1 < Dat2";

// }
// var date1 = new Date('2019/11/14 00:00')
// var date2 = new Date('2019/11/14 00:00')
// console.log(compare(date1, date2));
// // cau 3 

// var arr = [
//   new Date('2022-05-15'),
//   new Date('2022-07-09'),
//   new Date('2022-04-15')
// ]

// function findDateMax (arr){
//   let findMax = arr[0];
//   let findIndex = 0 ;
//   arr.forEach(function(item , index){
//     if ( findMax.getTime() < item.getTime()){
//         findMax = item ;
//         findIndex = index ;
//     }
//   })
//   return findIndex ;
// }
// console.log(findDateMax(arr));

// // cau 4 
// let stringValue = 'Deserunt mollit magna do dolor anim cupidatat id' 
// function formatVale (stringVale){
//   let input = stringVale.split(' ');
//   let save = [];
//   for ( const item of input){
//     let saves = item[0].toUpperCase() + item.slice(1)
//     save.push(saves);
//   }
//   return save.join(' ');

// } 
// console.log(formatVale(stringValue))
// //
// const  sayHello = () => {

// }

// var number1 = {age :20} ;
// var number2 = {age :20} ;
// console.log(number1 === number2)


// /// es6

// // const avg = (...numbers) => {
// //     let sum = 0 ;
// //     let index = 0 ; 
// //     numbers.forEach ((item)=>{
// //         sum += item ;
// //         index += 1 ;
// //     });
// //     return sum/index ;
// // }
// // console.log(avg(1,2,3,4,5,6,7,8,9))

// const avg = (...numbers) => {
//  const total = numbers.reduce((a ,b) => {
//     return a+b ;
//   },0)
//   return total / numbers.length;


// }
//  console.log(avg(1,2,3,4,5,6,7,8,9))
//  //
//  var arr = ['A', true, 1, 'B', 5, 'G', false];
//  var sum = 0 ;
//  var count = 0 ;
//  for ( const item of arr){
//     if(typeof item === 'number' ){
//       sum += item ;
//       count += 1 ;
//     }
//  } 
//  var avgs = sum / count ;
// console.log(avgs)

// /// 
// const list = ['javascript' , 'C#','python'] ;
// // const [,cShap,] =list
// const [js,...others] =list;
// const arrss = ['USB', ['Motor', 'Chair'], 'Computer', 'Car'];
// const [,[moto,],,car] =arrss;



// const person = {
//  name: 'Tran Van A',
// }
// const condition = true;
// if (condition) {
//  person = {
//  name: 'Tran Van B',
//  };
// }
// console.log(person.name);

// cau 1
const numbers = [1, '2', 3, '4', 5, '6', 7] ;

const parse =(numbers) => {
    const list = numbers.map((item) => {
        if ( typeof item === 'string'){
            return Number(item);
        }
        else return item ;
    })
    return list ;
}
console.log(parse(numbers));

//cau 3,4
const sum = (...numbers) => {
    const total = numbers.reduce((a , b) => {
        return a + b ;
    },0 )
    return total.toFixed(1) / numbers.length ;
}
console.log(` Tong : ${sum(1,2,3,4,5,6)}`);

// cau 5 
const fruits = ['Apple', 'Orange', 'Banana'];
const copiedValue = [...fruits];
console.log(copiedValue);

//cau 6

const numbers1 = ['1', '2', '3'];
const numbers2 = [4, 5, 6];
const result = [...numbers1 ,...numbers2];
console.log(result);

// cau 7 
const info = {
 address: 'Ho Chi Minh',
 country: 'Viet Nam',
 netIncome: 20000,
}
const person = {
 name: 'Nguyen Hung',
 birthYear: 2001,
    ...info 
}
console.log(person)
//
// const infor = [
//  ['firstName', 'Nguyen'],
//  ['lastName', 'Hung'],
//  ['address', 'Tan Binh, Ho Chi Minh']
// ];
// // const [[,firstName],[,lastName],[,...address]]= infor;
// console.log(address);
// cau 19 
const persons = {
 firstName: 'Nguyen',
 lastName: 'Hung',
 friends: ['Tien', 'Ngan', 'Cuong'],
};
const {
    firstName,
    lastName ,
    friends : listFrined 
} = persons ;

console.log(listFrined)
//
const personss ={
    firstName :'Nguyen',
    lastName :'Hung'        
}

const displayInfor = ({firstName , lastName}) => {
    console.log(`Hello ${firstName} ${lastName}`);
}
displayInfor(personss)


// class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Store {
    constructor(name) {
        this.name =name ,
        this.productList = []
    }
    add(product) {
        this.productList.push(product);
    }   
    remove(index) {
        if( this.productList.length <= 0 ){
            return undefined; 
        }
        return this.productList.splice(index,1);

    }
    sreach(name){
        return this.productList.find(function(item){
            return item.name.toLowerCase() === name.toLowerCase()
        })
    }
}
const store = new Store("Bang");
const sp1 = new Product("Áo thun", 150);
const sp2 = new Product("Áo thun", 150);

store.add(sp1); // thêm đối tượng Product vào mảng
console.log(store.productList);