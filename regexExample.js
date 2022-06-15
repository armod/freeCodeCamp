//FLAGI
// g - flaga globalna dla wszystkich znaków
// i uwzględniająca wielkość liter

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[abcdefghijklmnopqrstuvwxyz]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//wypisuje wszystkie litery ze stringa
console.log("1:",result);

//wypisuje konkretny element ze stinga
console.log(result[10]);


//DLA DANEGO ZAKRESU
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result2 = quoteSample2.match(myRegex); // Change this line

console.log("2:",result);

//nie są samogłoskami lub cyframi
/* let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result); */


// SZUKA PODWÓJNYCH WYSTĄPIEŃ
/* let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex); */

//let reCriminals = /C*C+/; //znajduje wystąpienie C lub kulkuktorne wystąpienie lub żadne wystapinei

//SPRAWDZENIE CZY DLA USERa MOŻA STWORZYĆ DANĄ NAZWĘ
/* let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)
Code Explanation
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input */

//ZNAJDUJE "Oh no" JEŻELI W CIĄGU JEST OD 3 DO 6 ZNAKÓW "h"
/* let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

let ohStr1 = "Ohhhh no";
let ohStr2 = "Ohhhhh no";
let ohStr3 = "Ohhhhhh no";
let ohStr4 = "Ohhhhhhh no";
console.log(ohStr1.match(ohRegex));
console.log(ohStr2.match(ohRegex));
console.log(ohStr3.match(ohRegex));
console.log(ohStr4.match(ohRegex)); */