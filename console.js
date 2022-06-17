/* let receivables = 10;
let payables = 8;
let netWorkingCapital = (receivables - payables);
console.log(`Net working capital is: ${netWorkingCapital}`); */


//splice() - Z TABLICY arr ZOSTAWIA TYLKO TE ELEMENTY, KTÓRY SUMA WYNOSI 10
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
let sum = 0;
for (let i = 0; i < arr.length; i++)
{
  sum = sum + arr[i];
  console.log("Suma = ", sum);
  if (sum < 10)
  {
    console.log("arr = [", i, "]");
  }
  else if (sum > 10)
  {
    sum = sum - arr[i];
    arr.splice(i, 1)
    console.log("usunięto arr[",i,"]=", arr[i],"suma=",sum)
    i--;
  }
  else if (sum == 10)
  {
    console.log("Nowa tablica = ", arr);
  }
  //console.log(arr[i]);
}
// Only change code above this line
console.log(arr);