let suffixes = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];
let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'black', 'white', 'pink', 'brown'];

function colNum() {
    suffixes.forEach((suffix, number) => {
        console.log(number+1 + suffix, 'is', colors[number])});
}
colNum();

exampleObj = {
    color: 'green',
    smashes: true,
    name: 'Hulk'
}

// function b(object) {
//     for (o in object) {
//         console.log(o);
//         if (object.o == true) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// } 

// console.log(b(exampleObj.color));  NOT THE WAY

function objChecker(obj, key, val) {
    let objKey = Object.keys(obj);  //isolating the object keys 
    if(objKey.includes(key)) {  // using .include to compare input key equals one of the object keys
        if (obj[key] == val) {  //bracket notation brings back the value of the object we can check against our inputed key
            return true;
        } else {
            return false
        }
    }
}

console.log(objChecker(exampleObj, 'color', 'green'));