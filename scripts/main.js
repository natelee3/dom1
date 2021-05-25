'use strict';

const bodyElement = document.querySelector('body');
const rootElement = document.querySelector('#root')
const title = document.getElementById('title');
const subtitle = document.querySelector('.subtitle');
const firstParagraph = document.querySelector('p');
const allParagraphs = document.querySelectorAll('p');
const button = document.getElementById('clickMe');

const h3element = document.createElement('h3');
h3element.innerText = "Hello, I am an h3 tag";

rootElement.append(h3element);


let clickCount = 0;

function clickCounter() {
    clickCount += 1;
    console.log('click count is ', clickCount);
    return clickCount;
}

button.addEventListener('click', function() {
    clickCounter();
    title.innerText = "Hello Javascript";
})