'use strict';

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){ //SupreFunction
    const username = loginInput.value;
    event.preventDefault();
    localStorage.setItem (USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    painGreetings(username);
}
function painGreetings(username){ //show the greeting Function
    greeting.innerText = `Hello, ${username}!!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem (USERNAME_KEY);

if (savedUsername === null){ //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else if (savedUsername === "이진희"){ //show the greeting
    greeting.innerText = `${savedUsername}는 모히칸이다`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}else{
    painGreetings(savedUsername);
}