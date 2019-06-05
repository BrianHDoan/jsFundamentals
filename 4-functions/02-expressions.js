/************************
EXPRESSIONS
****************
let hey = function hi() {
  (1)
  console.log('HI')
}

1- The variable 'hey' is now representative of the function 'hi()'

*/

let hey = function hi() {
    console.log('HI')
  }
hi(); //will not work because it is a functional expression

/*
Difference between declaration and expression: 
Declaration gets hoisted
Expression ford not
*/