/* Great for iterating over values in an object for in loops can
 "enumerable" which in our situation means able to be able to access these 
 directly within an ordering schema*/

let student = {
    name: 'Peter',
    awesome: true,
    degree: 'JavaScript',
    week: 1
}

for ( item in student ) {
    console.log(student[item])
}

let dogs = ['collie', 'pitbull', 'newfie', 'lab', 'dachshund'];

for ( dog in dogs) {
    console.log(dogs[dog]);
}

let name = 'brian';
let cap = '';
 for (n in name) {
    if (n == 0) {
        cap += name[n].toUpperCase();
    } else {
        cap += name[n].toLowerCase();
    }
 }
console.log(cap);