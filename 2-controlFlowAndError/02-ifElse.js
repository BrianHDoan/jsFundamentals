// * ELSE STATEMENT

/* 
if (condition) {
    console.log()
} else {
    console.log()
}
*/

let weather = 75;

if (weather , 70) {
    console.log('Wear a jacket!')
} else {
    console.log('no jacket necessary!')
};

let name = 'Brian'

if (name == 'Brian') {
    console.log(name)
} else {
    console.log('Hello, what is your name?');
};

if (name = 'Brian') {
    console.log('Hello, my name is ', name)
} else {
    console.log('Hello, is your name <name here> ?')
};

let name = 'aUTuMN';
let letter = name.charAt(0);

if (letter == letter.toUpperCase()) {
    console.log(name)
} else {
    console.log('hey its not written correctly')
};

if (letter == letter.toUpperCase()) {
    console.log(name[0]) 
} else {
    let ame = name.replace(name[0], '').toLowerCase();
    console.log(ame)
};

if (letter == letter.toUpperCase()) {
    let newName = name[0] + name.replace(name[0]).toLowerCase();
    console.log(newName)
} else {
    let ame = name.replace(name[0], '').toLowerCase();
    console.log(letter.toUpperCase()+ame)
};

let age = 21;

if (age >= 25) {
    console.log("Yay! You can can rent a car!")
} else if (age >= 21) {
    console.log("Yay! You can drink!")
} else if (age >= 18) {
    console.log("Yay! You can vote!")
} else {
    console.log("Sorry, you're too young to do anything." )
};