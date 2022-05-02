'use strict';

const images = ["0.jpg", "1.jpg", "2.jpg",]
const chosenImg = images[Math.floor(Math.random()*images.length)];
const bgImg = document.createElement("img"); // document.createElement() = 괄호안의 엘리먼츠 생성

bgImg.src = `img/${chosenImg}`; // img.scr = '경로/이미지.확장자'
document.body.appendChild(bgImg); // body.appendChild() 바디에 괄호안의 엘리먼츠 배치