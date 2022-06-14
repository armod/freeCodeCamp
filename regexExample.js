let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[abcdefghijklmnopqrstuvwxyz]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//wypisuje wszystkie litery ze stringa
console.log("1:",result);

//wypisuje konkretny element ze stinga
console.log(result[10]);

let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result2 = quoteSample2.match(myRegex); // Change this line

console.log("2:",result);