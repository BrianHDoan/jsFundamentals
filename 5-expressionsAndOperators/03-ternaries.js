let w = 6;

//if statement
if (w > 0) {
    console.log('Yes');
} else {
    console.log('No');
}

//Ternary
(w>0) ? console.log('yes') : console.log('no');

//else if
if (w == 0) {
    console.log("hello");
} else if (w < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

(w==0) ? console.log('hello') : (w<0) ? console.log('hi') : console.log('goodbye');

let age = 21;

(age >= 25) ? console.log("you're old enough to rent a car!") : (age >= 21) ? console.log("you're old enough to drink!") : (age >= 18) ? console.log("you're old enough to vote!") : console.log(age, " is too young to be able to do anything fun. That sucks for you.");

let yes = -8;

(yes < 0 && yes > -10) ? console.log('worked') : (yes > 0) ? console.log('worked') : console.log('did\'t work');