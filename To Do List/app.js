const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const button = document.querySelector('button');

const buttonClickHandler = () =>{
    if(inputBox.value === ''){
        alert('You must enter a task!');
    }
    else{
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
};

button.addEventListener('click',buttonClickHandler);

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();