function uniteUnique(arr) 
{
  let tab = [];
  //console.log("arg", arguments.length, arguments[0], tab);
  for(let i=0; i<arguments.length; i++)
  {
    tab = tab.concat(...arguments[i]);
  }
  console.log("tab=", tab);

  let noDup = tab.reduce( function (prev, curr) {
    if(prev.indexOf(curr) === -1)
    {
      prev.push(curr)
    }
    return prev
  }, []);

  console.log("noDup=", noDup);


  return noDup;
}

uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);
/* z MDN
const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

console.log(myArrayWithNoDuplicates) */

//INNE ROZWIĄZANIA
// function uniteUnique(arr1, arr2, arr3) {
//     // Creates an empty array to store our final result.
//     const finalArray = [];
  
//     // Loop through the arguments object to truly make the program work with two or more arrays
//     // instead of 3.
//     for (let i = 0; i < arguments.length; i++) {
//       const arrayArguments = arguments[i];
  
//       // Loops through the array at hand
//       for (let j = 0; j < arrayArguments.length; j++) {
//         let indexValue = arrayArguments[j];
  
//         // Checks if the value is already on the final array.
//         if (finalArray.indexOf(indexValue) < 0) {
//           finalArray.push(indexValue);
//         }
//       }
//     }
  
//     return finalArray;
//   }
  
//   uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


//   function uniteUnique(arr) {
//     const args = [...arguments];
//     const result = [];
//     for (let i = 0; i < args.length; i++) {
//       for (let j = 0; j < args[i].length; j++) {
//         if (!result.includes(args[i][j])) {
//           result.push(args[i][j]);
//         }
//       }
//     }
//     return result;
//   }
  
//   uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


//   function uniteUnique(...arr) {
//     return [...new Set(arr.flat())];
//   }
  
//   // Or as an arrow function
//   const uniteUnique = (...arr) => [...new Set(arr.flat())];

//   function uniteUnique() {
//     return [...arguments]
//       .flat()
//       .filter((item, ind, arr) => arr.indexOf(item) === ind);
//   }
  
//   uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);