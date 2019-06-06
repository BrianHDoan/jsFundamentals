function checker(word) {
    if (word == word.split('').reverse().join('')) {
        return word;
    } else {
        return 'This is not a palindrome'
    };
}
console.log(checker('noon'));