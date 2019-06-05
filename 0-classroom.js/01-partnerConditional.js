let stringExample = 'string';
let numberExample = 0;
let boolExample = true;
let conditionExample = 0;

(typeof (conditionExample) == typeof (stringExample) ) ? console.log('This is a string') : (typeof (conditionExample)) == typeof (numberExample) ? console.log('This is a number.') : (typeof (conditionExample) == typeof (boolExample)) ? console.log('This a a boolean') : console.log('You messed up.');


let FB = 12;

x = FB %= 3;
y = FB %= 5;

switch (true) {
    case x == 0 && y == 0:
        console.log('Fizz Buzz')
        break;
    case x == 0:
        console.log('Fizz')
        break;
    case y == 0:
        console.assert('Buzz')
        break;
    default:
        console.log(FB)
        break;
}