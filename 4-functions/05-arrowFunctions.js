/**************************
FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
      (1)     (2)
  console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function


Consice
*********************
let hi = () => console.log('hi');

Block Body
*********************
let hi = () => {
  console.log('hi')
}

*/ 

// //Normal
// function coffee() {
//     console.log('Coffee is life.');
// }

// //Fat Arrow - concise, returns are default
// let coffee = () => console.log('Coffee is life.');

// // Fat Arrow - block, returns are not defaulted without writting it
// let coffee = () => {
//     console.log('Coffee is life.');
// }

let cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cats and ${puppy} dogs.`);
}
cats(2,12);

//Concise vs Block Bodies
//concise
let apples = x => `There are ${x} apples`;

console.log(apples(10));

//block
let apple2 = (x) => {
    let y = x + 28;
    return `There are ${y} apples also`
}
console.log(apple2(10));

/**************************
RETURN
***************

let hi = () => {
  return 'hi';
    (1)
};

let newName = hi();
      (2)      (3)

console.log(newName)

1- The keyword that brings our data out of our function
2- We need a new variable to hold the value of the return
3- When called, the function becomes the value of the return



***********/

function captializeName(name) {
    let capName = '';
    for (let l in name){
      if (l == 0){
        capName += name[l].toUpperCase();
      } else {
        capName += name[l].toLowerCase();
      }
    }
     //console.log(capName) // Autumn
    return capName; 
  }

  //console.log(capName);// variable is only available inside of function 
console.log(captializeName('autumn')); 


let x = () =>{
    return 3; 
} 

let y =(z) =>{
    return z*2; 
}

console.log(y(x()));

const tip = .2;
let money = (x) => {
    let total = ((tip * x) + x);
    return total;
}

let tipping = (money(32));
console.log(tipping);