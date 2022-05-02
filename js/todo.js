'use strict';

const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";

let toDos = [];
// let newTodo = "";


function saveToDos(){
    localStorage.setItem (TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(!(savedToDos == null)){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function sayHello(item){
//     console.log("hello" + item);
// }

// if(!(savedToDos == null)){
//     const parsedToDos = JSON.parse(savedToDos);
//     parsedToDos.forEach((item) => console.log("오늘의 할일: " + item)); /// sayHello 펑션과 같은 역할 수행
// }