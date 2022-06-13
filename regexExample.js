let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[abcdefghijklmnopqrstuvwxyz]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//wypisuje wszystkie litery ze stringa
console.log(result);

//wypisuje konkretny element ze stinga
console.log(result[10]);
