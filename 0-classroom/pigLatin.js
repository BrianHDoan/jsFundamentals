// let word = 'I dont like pig latin' ;
// vowels = ['a','e','i','o','u'];
// function pigLatin(names) {
//     for (i = 0; i < vowels.length; i++) {
//         let names = word.split(' ');
//         console.log(names)
//         if (names[i].charAt(0) == vowels[i]) {
//             let piggy = `${names}ay`;
//             console.log(piggy);
//             return;
//         } else {
//             let ord = names[i].replace(names[0],'');
//             console.log(ord, names.charAt(0)+'ay');
//             return;
//         }
//     }
// }
// pigLatin(word);  does not work
// Steps :
// 1) create and name a function with a parameter 
// 2) split string into multiple words [arr]; 
// 3) split words into multiple letters [arr];
// 4) check if first letter of word  is a consonant
//     a)if it is, send letter to back of word, with 'ay'
//     b) if it instanceof, add 'ay' to the end of the word
// 5)return word
// 6)return words

let sample = 'Autumn sure do not like pig latin';

function pigLatin(str) {
    let wordsArray = str.split(' ');
    wordsArray.forEach((word, index) => {
        let lettersArray = word.toLowerCase().split('');
        if (lettersArray[0] !='a' && lettersArray[0] !='e' && lettersArray[0] !='i' && lettersArray[0] !='o' && lettersArray[0] !=='u') {
            lettersArray.push(lettersArray[0])
            lettersArray.shift();
        } 
        lettersArray.push('ay');
        wordsArray[index] = lettersArray.join('');
    });
    return wordsArray.join(' ');
}

console.log(pigLatin(sample));