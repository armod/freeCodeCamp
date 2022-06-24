function mutation(arr) 
{
  let tab1 = arr[0].toLowerCase();
  let tab2 = arr[1].toLowerCase();
  console.log(tab2);
  //const znaleziony;
  //console.log("arr[0].length =", arr[0].length);
  //console.log("arr[1].length =", arr[1].length);
  for (let i=0; i<arr[1].length; i++)
  {
    if (tab1.indexOf(tab2[i]) >= 0)
    {
      console.log("Znaleziono =", tab1.indexOf(tab2[i]), tab1, tab2[i]);
    }
    else 
    {
      console.log("Nie znaleziono =", tab1.indexOf(tab2[i]), tab1, tab2[i]);
      return false;
    }
  }
  return true;
}

mutation(["hello", "Hey"]);
mutation(["hello", "neo"]);
mutation(["floor", "for"]);


/* 
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"*/