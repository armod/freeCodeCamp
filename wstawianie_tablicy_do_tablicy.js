function frankenSplice(arr1, arr2, n) 
{
  let arr = [...arr2];
  console.log(arr1);
  console.log(arr2);
  for(let i=0; i<arr1.length; i++)
  {
    arr.splice(n, 0, arr1[i]);
    n++;
  }
  console.log("Wynik =",arr);
  console.log(arr1);
  console.log(arr2);
  return arr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


/* 
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"] */

//inne rozwiązania
/* function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
  }

  function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
  }

  function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
  } */