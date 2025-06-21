'use strict'
// var numbers = [3, 5, 7, 9, 11]
// // for ( var i = 0 ; i < numbers.length ; i++ ){
// //     console.log( numbers[i]);
// // }
// numbers.forEach(function (item, index) {
//     console.log(item + " " + index)
// });///
// var arr = [-20, 10, 15, 0, 1];
// var sum = 0;
// arr.forEach(function (item) {
//     if (item % 2 === 1) {
//         sum += item;
//     }
// });
// console.log(sum);
// //filter
// var arr = [-20, 10, 15, 0, 1];
// var result = arr.filter(function (item) {
//     if (item > 0) {
//         return true;
//     }
//     return false
// })
// console.log(result)

// // 
// var students = [
//     { name: 'Tran Van Anh', birthYear: 2004 },
//     { name: 'Nguyen Thi Mai Huong', birthYear: 2005 },
//     { name: 'Pham Thi My Trang', birthYear: 2003 },
//     { name: 'Tran Nhat Tan', birthYear: 2010 },
//     { name: 'Vo Tan Tien', birthYear: 2002 }
// ];

// var results = students.filter(function (item) {
//     var age = 2025 - item.birthYear
//     if ( age > 18){
//         return true ;
//     }
//     return false ;
// })
// console.log(results);

// // indexOf 
// var arr = [-1 ,2,3,4,5,6]
// var re = arr.indexOf(0);
// console.log(re)
// /// them va xoa phan tu cuoi mang 
// var  arr = [ 1,2,3,4,5];
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr)
// arr.unshift(10);
// arr.shift();
// // splice 
// var arr = [1,2,3,4,5,6,7];
// // var result = arr.splice(1);
// // console.log(result);
// // console.log(arr);
// var bang = arr.splice(1,0,'b','a')
// console.log(bang)
// console.log(arr)
// //
// var students = [
//  { id: 'GBK', name: 'Nguyen Thi Bong' },
//  { id: 'A2D', name: 'Tran Van Hung' },
//  { id: 'DMK', name: 'Vo Minh Quan' }
// ];
// students.push({ id: 'AIM', name: 'Tran Thi Hong Dung' });
// console.log(students);
// students.splice(1,0,{ id: 'UJH', name: 'Tran Vu Bao' });
// console.log(students);
// // map 
// var arrs = [1,2,3,4,5,6,7,8];

// var result = arrs.map(function(item){
//    return String(item);
// })
// console.log(result)
// ///
// var list = [
//  { name: 'Tran Van A', birthYear: 2000 },
//  { name: 'Nguyen Thi Lan Huong', birthYear: 1999 },
//  { name: 'Vo Tung Lam', birthYear: 2001}
// ];

// var result = list.map(function(item){
//     var age = 2025 - item.birthYear ;
//     return '<name>' + item.name + '</name><age>'+age + '<age>'
// })
// console.log(result);

// //REVERSE
// var list = [1,2,3,4,5,6,7];
// list.reverse();
// console.log(list)
// //
// var modules = [
//  { id: 'test_case_11A', createdAt: '2021-11-21 23:22:00' },
//  { id: 'erp_message_deliver', createdAt: '2021-12-30 08:02:00' },
//  { id: 'queue_system', createdAt: '2021-08-15 11:11:59' }
// ];
// modules.reverse();
// console.log(modules)

//bat tap
//cau 1 
var list = [
    { name: 'Nguyen Van Anh', point: 20 },
    { name: 'Tran Yen Ngoc', point: 15 },
    { name: 'Nguyen Manh Hung', point: 14 },
    { name: 'Pham Ngoc Minh Tuyet', point: 17 }
];
function sum(points) {
    // var tong = 0 ;
    // points.forEach(function(item){
    //     tong += item.point ;
    // })
    // return tong ;
    return points.reduce(function (acc, item) {
        return acc + item.point;
    }, 0);
}
var avg = sum(list) / list.length;

list.forEach(function (item) {
    if (item.point < avg) {
        console.log(item.name)
    }
});
//cau 2
var arr = [true, false, 'A', 'D', 24, '!', 'K'];
var a = arr.filter(function (item) {
    if (typeof item === 'string') {
        return item;
    }
})
console.log(a);
// cau 3 
var students = [
    { id: 1, name: 'Nguyen Hung', mark: 6.7 },
    { id: 2, name: 'Quoc Tuan', mark: 7 },
    { id: 3, name: 'Huy Bao', mark: 5 },
    { id: 4, name: 'Hong Nhung', mark: 6 }
];
students.unshift({ id: 5, name: 'Trung Kien', mark: 5.5 })
console.log(students);
var a = students.filter(function (item) {
    return item.name !== 'Nguyen Hung'
})
console.log(a)
//
// var findMarkMin = students[0] ;
// students.forEach(function(item){
//     if( findMarkMin.mark > item.mark){
//         findMarkMin = item ;
//     }
// })
var findMarkMin = students.reduce(function (acc, item) {
    return acc.mark > item.mark ? item : acc
}, students[0]);

var b = students.filter(function (item) {
    return item !== findMarkMin;
})
console.log(b)


/// cau 4
var numbers = [-2, 100, 2, -1, -4, 5, 6];
var result = numbers.map(function (item) {
    if (item < 0) {
        return 0
    }
    else {
        return item;
    }
})
console.log(result)

var abc = result.map(function (item) {
    return String(item);
})
console.log(abc)

// cau 6
var students = [
    { id: 1, name: 'Nguyen Hung', mark: 6.7 },
    { id: 2, name: 'Quoc Tuan', mark: 7 },
    { id: 3, name: 'Huy Bao', mark: 5 },
    { id: 4, name: 'Hong Nhung', mark: 6 }
];
var abcc = students.map(function (item) {
    return item.name
})
console.log(abcc)
//cau 7
var classA = [
    { id: 1, name: 'Tran Van A' },
    { id: 2, name: 'Tran Van B' },
    { id: 3, name: 'Tran Van C' },
    { id: 4, name: 'Tran Van D' },
];
var classB = [
    { id: 4, name: 'Tran Van E' },
    { id: 5, name: 'Tran Van F' },
    { id: 6, name: 'Tran Van G' },
    { id: 7, name: 'Tran Van H' },
];
var re = classA.concat(classB);
console.log(re);
// cau 8 
var arr = ['Red', 'Green', 'White', 'Black'];
console.log(arr.join(','))
console.log(arr.join('_'))
console.log(arr.join('+'))
// cau 9 
var numbers = [1, 2, 3, 4, 5] ;
var result = numbers.reduce( function(acc , item ){
        return acc + item
},'')
console.log(result)
// cau 11
var voters = [
 {name:'Bob' , age: 30, voted: true},
 {name:'Jake' , age: 32, voted: true},
 {name:'Kate' , age: 25, voted: false},
 {name:'Sam' , age: 20, voted: false},
 {name:'Phil' , age: 21, voted: true},
 {name:'Ed' , age:55, voted:true},
 {name:'Tami' , age: 54, voted:true},
 {name: 'Mary', age: 31, voted: false},
 {name: 'Becky', age: 43, voted: false},
 {name: 'Joey', age: 41, voted: true},
 {name: 'Jeff', age: 30, voted: true},
 {name: 'Zack', age: 19, voted: false}
];
var resultssss = voters.reduce(function(acc , item ){
    if ( item.voted){
        return acc + 1 ;

    }
    else return acc ;
},0)
console.log(resultssss)
