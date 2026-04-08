'use strict';

const num = Math.floor(Math.random()*4)+1

const name = prompt("What is your name");

if (num === 2) {
    document.querySelector('#target').innerHTML = `${name}, you are a Gryffindor.`
}
else if (num === 1) {
    document.querySelector('#target').innerHTML = `${name}, you are a Slytherin.`
}
else if (num === 3) {
    document.querySelector('#target').innerHTML = `${name}, you are a Hufflepuff.`
}
else {
    document.querySelector('#target').innerHTML = `${name}, you are a Ravenclaw.`
}