// cau 1 
var course = 'JAVASCRIPT';
console.log(course);
//cau 2 
//cau 3 dap an D
//cau 4 cos
//cau 5
var age = 20;
console.log(typeof age);
console.log(typeof 20);
console.log(typeof "LetDiv");
var __a = true;
console.log(typeof __a);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
//cau 8 
var array = ['Lan', 'Hung', 'Tien', 'Cuong', 'Tuan'];
console.log(array[2]);
console.log(array[3]);
//cau 9 dap an c
var numbers = [10, 12, 14, 16, 18, 20];
numbers[6] = 50;
//cau 10 a c d 
//cau 11 
var characters = ['A', 'B', 'C', 'D']
characters[4] = 'E';
// characters.push('E')
console.log(characters);
// cau 12
var student = {
    name: 'Nguyen Nhat Bang',
    isStudent: true,
    birthYear: 2003,
}
student.isStudent = false;
student.friend = ['Lan', 'Hung', 'Tien', 'Cuong', 'Tuan'];
console.log(student);
// cau 14 
var stundents = {
    name: 'Tran Van A',
    birthYear: 2002,
    job: 'coder',
    country: {
        name: 'Viet Nam',
        code: 'vi',
    },
}
console.log(stundents.country);
console.log(stundents.country.name)
// cau 15   
var persons = [
    {
        name: 'Nguyen Hung',
        birthYear: 1990,
        job: 'coder'
    },
    {
        name: 'Bao Huy',
        birthYear: 1989,
        job: 'IT Manager',
    },
    {
        name: 'Thanh Duy',
        birthYear: 2000,
        job: 'Worker'
    },
];
console.log(persons[0]);
persons[0].name = 'Nguyen Van Hung';
console.log(persons[0]);
persons[2].isLeader = true;
console.log(persons[2])
console.log(persons.length);
persons[3] = {
    name: 'Lan Huong',
    birthYear: 2004,
    job: 'Stundent' ,
}
console.log(persons)
//cau 16 
var value = '1.5';
value = Number(value);
console.log(typeof value);
//
var age = 20 ; 
age += 2 ;
console.log(age);

