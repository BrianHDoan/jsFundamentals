/* What is a variable? Variables are named containers for storing data values
We name the variables so that we can refer to this data again.
*/

let a = 2;
   let     b       =       1;
/* (1)    (2)     (3)     (4)

1- Keyword
2- Variable name
3- assignment Operator
4- Variable value

*/
console.log(a+b);

/*notes on variables:
//1)  A variable name must begin with a letter, underscore, or dollar sign
//2)  Numbers may follow the above characters, but cannot come first
//3)  JavaScript is case sensitive-- 'hello' and 'HeLlo' are different variables
//4)  No spaces are allowed in variable names
//5)  camelCase is the best practice for naming variables. 
This is good practice because it helps keep variables readable--  var myName = 'Brian'; 
*/

/*
Var, let, and Const:
Var = 'old' keyword for variables ** We won't be using this often . If you have prior coding experience
and used var in the past, thats okay, but we want to try to stay in let

Let = 'new' keyword for variables (intrduced witth ES6 *newer version of JavaScript) for now best practive is to learn to use let

Const = also 'new'; declares variables meant to remain unchanged

/**************************
DECLARATIONS
**************************/
/*
Declarations are the LEFT SIDE of a variable
  It is simply the var x
  It is on the left side of the assignment operator (=)
Initializations are the RIGHT SIDE of a variable
  It sets the value of the variable
  It incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
*/

let x;
console.log('Declaration:' , x);  //Declaration: undefined

x = 10;
console.log('Initialization 1:', x); //Initialization 1: 10

x = 33;
console.log('Initialization 2:', x); //Initialization 2: 33

let y = 'Hello';
console.log('Both:', x, y);

/*
 * Const - also 'new'; declares variables meant to remain unchanged
 */
let today = 'Great!';
const elevenFifty = 'Wonderfull';
console.log(today, elevenFifty);

today = 'Lovely!';
console.log(today, elevenFifty);

// elevenFifty = 'Super'; throws an error, do not do this
console.log(today, elevenFifty);