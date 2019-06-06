let long =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
//console.log(colors);
//console.log(colors.length);
//console.log(colors.toString());

// console.log(typeof colors);
// console.log(typeof colors.toString());

colors.forEach(color => {console.log(color)});

let arr = [1,2,3,4,5];

console.log(arr instanceof Array);
newArr = arr.reverse();
newArr.forEach(num => {console.log(num)});