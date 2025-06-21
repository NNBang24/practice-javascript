// const htmlNode = document.firstElementChild ;
// const bodyNode = htmlNode.lastElementChild ;
// const headerNode = bodyNode.firstElementChild;
// console.log(headerNode.firstChild);
// console.log(headerNode.firstElementChild);

// const articleNode = bodyNode.children[1];
// console.log(articleNode.lastChild);
// console.log(articleNode.lastElementChild)

// const mainElement = document.getElementsByTagName('main')[0 ];
// const containerClass = document.getElementsByClassName('container');
// const sectionId = document.getElementById('section-1');
// const containerClass = document.querySelectorAll('.container');
// console.log(containerClass);

// const section1Node = document.querySelector('#section-1');
// console.log(section1Node)
// const h2Node =section1Node.querySelector('h2');
// console.log(h2Node);
// console.log(h2Node.nextElementSibling);

// const liNodes = document.querySelectorAll('li');
// liNodes[2].setAttribute('name' ,'special');

// liNodes.forEach((item ,index) =>{
//     const order = index +1 ;
//     if(order % 2 === 0) {
//         item.setAttribute('class' , 'even');
//     }
//     else {
//         item.setAttribute('class' , 'odd');
//     }
// })

// const sectionNodes = document.querySelectorAll('section');
// sectionNodes.forEach((item) =>{
//     if (item.classList.contains('selected')){
//         item.style.color ='red';
//     }
//     else if (item.classList.contains('info')) {
//         item.classList.remove('info')
//     }
// })  ;


//
// const liNodes = document.querySelectorAll('.checkbox-list li');
// // liNodes.style.display = 'inline-block'

// liNodes.forEach(item => {
//     const pNode = item.querySelector('p');
//     pNode.style.display = 'inline-block';

//     const inputNode = document.createElement('input');
//     inputNode.setAttribute('type', 'checkbox');
//     item.insertBefore(inputNode, pNode)
// })

///
// const selectedClass = document.querySelectorAll('.container .selected');

// selectedClass.forEach(item => {
//     item.remove();
// })

///
// const buttonNode = document.querySelector('button');
// const inputNode = document.querySelector('input');
// const pNode = document.querySelector('p');

// buttonNode.addEventListener('click' ,(even) =>{
//     pNode.textContent = inputNode.value
//     // inputNode.value = pNode.textContent
// } )

const inputNode = document.querySelector('input');
const pNode = document.querySelector('p');
const buttonNode = document.querySelector('button')
// inputNode.addEventListener('change' , (even) =>{
//     if(even.target.value  > 18 ) {
//         pNode.textContent = 'Hop le'
//         pNode.style.color ='green'
//     }
//     else{
//         pNode.textContent = 'Khong hop le'
//         pNode.style.color ='red'
//     }
// })
buttonNode.addEventListener('click', () => {
    const age = Number(inputNode.value);

    if (age > 18) {
        pNode.textContent = 'Hợp lệ';
        pNode.style.color = 'green';
    } else {
        pNode.textContent = 'Không hợp lệ';
        pNode.style.color = 'red';
    }
});