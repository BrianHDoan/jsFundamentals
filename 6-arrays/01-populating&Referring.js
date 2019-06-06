/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

*/

list =  [  'item1',   'item2',    'item3'];
console.log(typeof list);

let groceryList = ['orange', 'banana', 'oreos'];
console.log(groceryList[2]);

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Cory', 'Garrett', 'Brian']];

console.log(typeof students); //obects
console.log(students instanceof Array);

console.log(`Hello' ${students[6][2]} ', you look nice today`);

//Populating and Referring

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

food.push('Pizza');
food.splice(1, 1, 'Bananas');
food.splice(2, 0, 'Sweet Potato Pie');
food.pop();
food.shift();
food.unshift('Guacamole');

for (f of food) {
    console.log(f);
    //console.log(food[f]); used in forIn
}