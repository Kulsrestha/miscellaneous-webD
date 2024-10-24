const button = document.querySelector('button');

// const buttonClickHandler = event => {
    // alert('Button was Clicked!!');
    // console.log(event);
    // event.target.disabled = true;
// };

// button.onclick = buttonClickHandler;

// button.addEventListener('click',buttonClickHandler);

// setTimeout(()=> {
//     button.removeEventListener('click',buttonClickHandler)
// },2000);

// buttons.forEach( btn => {
//     btn.addEventListener('click',buttonClickHandler);
// });
// buttons.forEach( btn => {
//     btn.addEventListener('mouseenter',buttonClickHandler);
// })

const form = document.querySelector('form');

form.addEventListener('submit', event=>{
    event.preventDefault();
    console.log(event);
})

const div = document.querySelector('div');
div.addEventListener('click', event => {
    console.log('Div clicked');
    console.log(event);
})

button.addEventListener('click',event =>{
    event.stopPropagation();
    console.log('button Clicked');
    console.log(event);
})

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem =>{
//     listItem.addEventListener('click', event =>{
//         event.target.classList.toggle('highlight');
//     } )
// })

list.addEventListener('click', event =>{
    console.log(event.currentTarget);
    //event.target.classList.toggle('highlight'); //target the lowest element

    event.target.closest('li').classList.toggle('highlight'); //target the closest ensestor
    form.submit();
})