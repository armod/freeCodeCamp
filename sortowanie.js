function getIndexToIns(arr, num) 
{
  arr.sort(function(a, b) {return a - b});
  //console.log(arr);
  //console.log("indeks=",arr.indexOf(num));
  for(let i=0; i<arr.length; i++)
  {
    if (num <= arr[i])
    {
      console.log(" = ", num, i, arr[i]);
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);
getIndexToIns([4, 2, 5, 1, 3], 5);
getIndexToIns([10, 20, 30, 40, 50], 35);


/* 
const arr = [1, 42, 5, 21, 3, 9];
 
arr.sort((a, b) => {
  return a - b;
});

console.log(arr); */