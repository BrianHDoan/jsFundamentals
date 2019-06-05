/**************************
CALLING FUNCTIONS
*************************
function hi() {
  console.log('HI');
}

hi();
(1);

1- This is how we call, or 'invoke' our function

*/

function hi() {
    console.log('HI');
    return 'Hi'; //return brings values outside a function
}

//hi // does nothing!
//hi();
//console.log(hi); //[Function: hi]
console.log(hi());

function list() {
    for (i = 1; i <= 10; i++) {
        console.log(i);
    }
}

list();

let arr = ['This', 'is', 'really', 'cool'];

function string() {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
string();  //one way

function show() {
    for ( a of arr) {
        console.log(a);
    }
}

show();  //another way

