// let username = 'briandoan';
// let password = 'class';

// let user = document.getElementsByClassName('username');
// let pass = document.getElementsByClassName('password');

// let btn = document.getElementById('btn'); 
// btn.addEventListener('submit', userInfo())

// function userInfo(e) {
// e.preventDefault();
    
//     if(user.value == username && pass.value == password) {
//         alert("You've been signed in");
//     } else {
//         alert("Username or password doesn't match");
//     }
// }

let seru = 'briandoan'
let serp = 'class'

let username = document.getElementById('username');
let password = document.getElementById('password');

let form = document.querySelector('form');
form.addEventListener('submit', userInfo);


function userInfo(e) {
    e.preventDefault();
    if (username.value == seru && password.value == serp) {
        alert("You've signed in")
    } else {
        alert('Username or Password donent match')
    }
}
