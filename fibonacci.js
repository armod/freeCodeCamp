function sumFibs(n) 
{
  var sum = 0;
    let a = 0, b = 1;
    for(let i=0; i<n; i++)
    {
      if(b % 2 != 0 & b <= n)
      {
        sum += b;
        //console.log("niepa", "sum=", sum);
      }
      //console.log(b, sum);
      b += a;
      a = b - a;
    }
  console.log(sum);
  return sum;
}

sumFibs(4000000);


//Rekurencyjnie
// function fib(num)
//   {
//     if (num < 2)
//     {
//       return 1;
//     }
//     else
//     {
//       return (fib(num-2) + fib(num-1));
//     }
//   }
//   console.log(fib(66));