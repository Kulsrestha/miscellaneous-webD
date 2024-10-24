const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

section.className = 'red-bg';

button.addEventListener('click',function(){
  // if(section.className == 'red-bg visbile'){
  //   section.className = 'red-bg invisible';
  // }
  // else{
  //   section.className = 'red-bg visible';
  // }

  section.classList.toggle('invisible');

})

const li = document.querySelector('ul');
const newLi = document.createElement('li');

li.appendChild(newLi);
li.prepend(newLi);
li.lastElementChild.before(newLi);

newLi.textContent = "Item 4"; 

const secondLi = li.children[1];

secondLi.insertAdjacentElement("afterend",newLi);