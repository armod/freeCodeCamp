// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//FUNKCJE NIE POWINNY ZAWIERAC/ZMIENIAC ZMIENNYCH GLOBALNYCH - FUNKCJA POWINNA BYĆ UNIWERSALNA/NEUTRALNA
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(ar, bookName) {
  let arr = [...ar];
  arr.push(bookName);
  console.log("=",arr);
  return arr;
  
  // Change code above this line
}

// Change code below this line
function remove(ar, bookName) 
{
  const arr = [...ar];
  const book_index = arr.indexOf(bookName);
  if (book_index >= 0) 
  {

    arr.splice(book_index, 1);
    return arr;

    // Change code above this line
    }
}