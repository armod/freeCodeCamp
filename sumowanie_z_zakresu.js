function sumAll(arr) 
{
  arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 :-1;
  })
  console.log(arr, Math.max(...arr));
  let wynik = 0;
  let arr2 = [];
  for(let i=0; i<=Math.max(...arr) - arr[0]; i++)
  {
    arr2.push(arr[0]+i);
    wynik = wynik + arr2[i];
  }
  console.log(arr2);
  
  console.log("w",wynik);

  return wynik;
}

sumAll([5, 10]);