var password = '1234';

if (password === '1234') {
    console.log('mat khau dung')
}
else {
    console.log('mat khau khong dung')
}

var age = 19;
if (age >= 14) {
    console.log('co cmnd');
}
else {
    console.log('chua co cmnd')
}

// 1
var isStudent = false;
if (isStudent === true) {
    console.log('i am a student')
}
else {
    console.log('i am not a student')
}
//2
var grade = 49;
if (grade >= 80) {
    console.log('Excellence');
}
else if (grade >= 70 && grade <= 80) {
    console.log('Goood');
}
else if (grade >= 50 && grade <= 70) {
    console.log('Average');
}
else {
    console.log('Not pass')
}
// switch case
var input = 1;
switch (input) {
    case 1:
        console.log('One');
        break;
    case '2':
        console.log('Two');
        break;
    case '3':
        console.log('Three');
        break;
    default:
        console.log("invalid")
        break;
}

var value = '1';
switch (value) {
    case 1:
        console.log('One');
        break;
    default:
        console.log('Invalid');
        break;
}

var charater = 'a';

switch (charater) {
    case 'a':
        console.log('true');
        break;
    case 'i':
        console.log('true');
        break;
    case 'e':
        console.log('true');
        break;
    case 'u':
        console.log('true');
        break;
    default:
        console.log('false');
        break;
}

// vong lap for
for (var i = 0; i <= 100; i++) {
    console.log('helo')
}

//
var sum = 0;
var n = 50;
for (var i = 0; i <= n; i++) {
    sum += i;
}
console.log(sum);

var arr = ['A', 'B', 'C', 'D'];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

var arrr = [10, 20, 50, 100, 22, 44, 29];
var sum = 0;
for (var i = 0; i < arrr.length; i++) {
    sum += arrr[i];
}
console.log(sum);

// so chan
var arr = [5, 2, 3, 12, 7, 8, 54];

for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (item % 2 === 0) {
        console.log(item)
    }
}
// break
var arr = [22, 2, 4, 7, 4, 12.14];
var n = 4;
for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (item === n) {
        console.log('yes')
        break;

    }
}
//continute
var arr = [5, 2, 3, 12, 7, 8, 54];
var sum = 0;
// for ( var i = 0 ; i <= arr.length ; i++){
//     var item = arr[i];
//     if( item % 2 === 1){
//         console.log(item);
//         sum += item ;
//     }
// }

// console.log(sum)
var arr = [5, 2, 3, 12, 7, 8, 54];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (item % 2 == 0) {
        continue;
    }
    sum += item;
}
console.log(sum)



var arr = [5, 2, 3, 12, 7, 8, 54];
var total = 0;
for (var i = 0; i < arr.length; i++) {
    total += 1;
}
console.log(total)
// while

var i = 1;
var sum = 0;
while (i <= 1000) {
    sum = sum + i;
    i++;
}
console.log(sum);
//func
function bang() {

}
var number1 = 10;
var number2 = 20;
bang();

//
function sumM(number1, number2) {
    var result = number1 + number2;
    // console.log("result: " + result);
    return result;
}

sumM(10, 29);

//
function findMIn(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (item < min) {
            min = item;
        }
    }
    return min;
}
var arr = [-10, -20, -30, 55, 11];
console.log(findMIn(arr))

////////
// phan 1
// cau 1 
var now = 2022;
var birthYear = 2010;
var age = now - birthYear;
if (age >= 18) {
    console.log('hop le')
}
else {
    console.log('yeu cau phai tren 18 tuoi')
}
// cau 2 
var uesd = 100;
var available = 100 - uesd;

if (available > 50) {
    console.log('dung luong con trong ' + available + '%')
}
else if (available <= 50 && available > 0) {
    console.log('dung luong cua ban sap het');
}
else {
    console.log('vui long mua them dung luong')
}
//cau 4

var operand1 = 20;
var operand2 = 50;
var operand = '/';

switch (operand) {
    case '+':
        var result = operand1 + operand2;
        console.log(result);
        break;
    case '-':
        var result = operand1 - operand2;
        console.log(result);
        break;
    case '*':
        var result = operand1 * operand2;
        console.log(result);
        break;
    case '/':
        var result = operand1 / operand2;
        console.log(result);
        break;
    default:
        console.log('toan tu khong hop le');
        break;
}
// PHAN 2
// cau 1 
for (var i = 5; i <= 15; i++) {
    if (i > 10) {
        console.log(i);
    }
}
//cau 2
for (var i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// cau 3 
var sum = 0;
for (var i = 0; i <= 50; i++) {
    sum += i;
}
console.log(sum);
//cau 4 
var sum = 0;
for (var i = 100; i >= 100; i--) {
    if (i <= 10 && i >= -10) {
        sum += i;
    }
}
console.log(sum)
// cau 5 
var numbers = [-5, 100, 20, 51, 15, 33];
for (var i = 0; i < numbers.length; i++) {
    var item = numbers[i];
    console.log(item + " " + i)
}
// cau 7
var numbers = [-5, 100, 20, 51, 15, 33];
for (var i = 0; i < numbers.length; i++) {
    var item = numbers[i];
    if (i % 2 === 0) {
        console.log(item);
    }
}
//cau 8 
var numbers = [-5, 100, 20, 51, 15, 33];
for (var i = 0; i < numbers.length; i++) {
    var item = numbers[i];
    if (item % 2 === 0) {
        console.log(item)
    }
}
// cau 9 
var arr = ['B', 'A', 'D', 'E', 'E']
var s = 'E';
function arrs(arr, s) {
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (item === s) {
            console.log('found!');
            break;
        }
    }
}
arrs(arr, s)

// phan 3 
// cau 1 
var list = [
    {
        name: 'Nguyen Van Dang',
        birthYear: 2000,
        point: 9.5,
    },
    {
        name: 'Tran Thi Hieu',
        birthYear: 1999,
        point: 4
    },
    {
        name: 'To Vinh Nghiem',
        birthYear: 2005,
        point: 7
    },
    {
        name: 'Vo Huynh Bach',
        birthYear: 2002,
        point: 8.5
    }
]

for (var i = 0; i < list.length; i++) {
    var item = list[i];
    if (item.point < 8) {
        console.log(item.name)
    }
}

//cau 2
var count = 0;
for (var i = 0; i < list.length; i++) {
    var item = list[i];
    if (item.point < 8) {
        count += 1;
    }
}
console.log(count)
//cau  3 
var sum = 0;
for (var i = 0; i < list.length; i++) {
    var item = list[i];
    sum += item.point;

}
var avg = sum / list.length;
console.log(avg)
// cau 4 
var list = [
    {
        name: 'Nguyen Van Dang',
        address: {
            street: 'Pho Quang',
            city: 'Ho Chi Minh'
        }
    },
    {
        name: 'Tran Thi Hieu',
        address: {
            street: 'Mai Chi Tho',
            city: 'Ho Chi Minh'
        }
    },
    {
        name: 'To Vinh Nghiem',
        address: {
            street: 'Quang Trung',
            city: 'Ha Noi'
        }
    },
    {
        name: 'Vo Huynh Bach',
        address: {
            street: 'Mai Hac De',
            city: 'Ha Noi'
        }
    }
]
for (var i = 0; i < list.length; i++) {
    var item = list[i];
    if (item.address.city === 'Ho Chi Minh') {
        console.log(item.name);
    }
}
// cau 5 
var arr = [5, 1, 5, 6, 1, 6, 2, 4];
var isValid = true;
for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (typeof item !== 'number') {
        isValid = false;
        break
    }
}
if (isValid) {
    console.log('hop le')
}
else {
    console.log('khong hop le ')
}
/// phan 4 

// cau 1 
var storage = [
    {
        id: 'BRTC',
        info: {
            firstName: 'Nguyen',
            lastName: 'Trung',
            email: 'nguyentrung@gmail.com'
        }
    },
    {
        id: '5RJH',
        info: {
            firstName: 'Tran',
            lastName: 'Ni',
            email: 'tranni@gmail.com'
        }
    },
    {
        id: 'IBMF',
        info: {
            firstName: 'Nguyen',
            lastName: 'Hieu',
            email: 'nguyenhieu@gmail.com'
        }
    }
];
var userEmail = 'letdiv.innovation@gmail.com';
var isValid = true;
for (var i = 0; i < storage.length; i++) {
    var item = storage[i];
    if (item.info.email !== userEmail) {
        isValid = false;
        break;
    }
}
if (isValid) {
    console.log('email da ton tai')
}
else {
    console.log('email hop le')
}

//cau 2 
var students = [
    {
        name: 'Vo Thi Thu Trang',
        points: [7, 9, 10, 9]
    },
    {
        name: 'Tran Huynh Phuong',
        points: [7, 8, 5, 8, 6]
    },
    {
        name: 'Nguyen Van Tai',
        points: [7, 9, 4, 7, 9]
    },
    {
        name: 'Phan Kien',
        points: [2, 5, 6, 3]
    },
];
for (var i = 0; i < students.length; i++) {
    var item = students[i];
    for (var j = 0; j < item.points.length; j++) {
        var iam = item.points[j];
        if (iam < 5) {
            console.log(item.name);
            break;
        }
    }
}

//cau 3 
var arr = [5, 10, 2, 0, 8, 14];
var findMIn = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (findMIn > arr[i]) {
        findMIn = arr[i];
    }
}
console.log(findMIn)
// cau 4 
var mountains = [
    {
        name: 'Fansipan',
        height: 3143
    },
    {
        name: 'Pu Ta Leng',
        height: 3049
    },
    {
        name: 'Pu Si Lung',
        height: 3076
    },
    {
        name: 'Bach Moc Luong Tu',
        height: 3046
    },
    {
        name: 'Tay Con Linh',
        height: 2427
    }
];
var findMax = mountains[0]
for (var i = 0; i < mountains.length; i++) {
    var item = mountains[i];
    if (findMax.height < item.height) {
        findMax = item
    }
}
console.log(findMax.name)
// cau 5 
var mountains = [
    {
        name: 'Fansipan',
        height: 3143
    },
    {
        name: 'Pu Ta Leng',
        height: 3049
    },
    {
        name: 'Pu Si Lung',
        height: 3076
    },
    {
        name: 'Bach Moc Luong Tu',
        height: 3046
    },
    {
        name: 'Tay Con Linh',
        height: 2427
    }
];
var minIndex = 0;
var findMin = mountains[0];
for (var i = 0; i < mountains.length; i++) {
    var item = mountains[i];
    if (findMin.height > item.height) {
        findMIn = item;
        minIndex = i;
    }
}
console.log(minIndex)
// cau 6 
var asean = [
    {
        country: 'Viet Nam',
        gdp: {
            in2020: 343.11,
            in2021: 368
        }
    },
    {
        country: 'Thai Lan',
        gdp: {
            in2020: 501.71,
            in2021: 546.22
        }
    },
    {
        country: 'Brunei',
        gdp: {
            in2020: 12,
            in2021: 15.69
        }
    },
    {
        country: 'Cambodia',
        gdp: {
            in2020: 25.19,
            in2021: 26.08
        }
    },
    {
        country: 'Indonesia',
        gdp: {
            in2020: 1059.64,
            in2021: 1150.25
        }
    }
];
var GDP1 = asean[0].gdp.in2021 - asean[0].gdp.in2020;
var countryss = asean[0].country;

for (var i = 0; i < asean.length; i++) {
    var item = asean[i];
    var GDP = item.gdp.in2021 - item.gdp.in2020;
    if (GDP1 < GDP) {
        GDP1 = GDP;
        countryss = item.country;
    }
}
console.log(countryss)
//cau 7 
var students = [
    {
        name: 'Nguyen Thi Anh',
        points: [7, 6, 8]
    },
    {
        name: 'Van Mai Ngoc',
        points: [10, 9, 5]
    },
    {
        name: 'Tran Thanh Thuy',
        points: [6, 6.5, 8]
    },
    {
        name: 'Vo Quoc Kien Hung',
        points: [4, 9, 8]
    },
    {
        name: 'Vo Quoc Kien Hung',
        points: [7.5, 7, 8]
    },
];
function summ(points){
    var tong = 0 ;
    for ( var i = 0 ; i < points.length ;i++){
         tong += points[i];
    }
    return tong ;
}

var findSumMIn = summ(students[0].points);
var fullName = students[0].name;
for ( var i = 0 ; i < students.length ;i++) {
    var sumAll = summ(students[i].points);
    if ( findSumMIn > sumAll){
        findSumMIn = sumAll ;
        fullName = students[i].name ;
    }
}
console.log(fullName);
// phan 5 
// cau 1 
var numbers = [5, 10, 88, 23, 59, 1] ;
for (var i = 0 ; i < numbers.length ; i++){
    var sum = numbers[i] + numbers[i+1];
    if ( sum % 2 === 0){
        console.log(numbers[i] + " " + numbers[i+1])
    }
}
//cau 2 
var numbers = [1, 2, 3, 4, 5, 6] ;
var isValid = true ;
for ( var i = 0 ; i < numbers.length ; i++) {
    if ( numbers[i] > numbers[i+1]){
        isValid =false ;
        break ;
    }
}
if(isValid){
    console.log('hop le')
}
else{
    console.log('khong hop le')
}


function tangdan(numbers) {
    for ( var i = 0 ; i < numbers.length ;i++){
        if ( numbers[i] > numbers[i+1]) {
            console.log('khong hop le');
            return ;
        }
    }
    console.log('hop le')
}
tangdan(numbers)