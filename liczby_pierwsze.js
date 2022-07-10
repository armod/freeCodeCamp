/* function sumPrimes(num) 
{
  let arr = [];
  let sum =0;
  for(let i=2; i<num; i++)
  {
    arr.push(i);
  }
  for(let i=0; i<arr.length; i++)
  {
    for(let j=2; j<Math.sqrt(num); j++)
    {
      if(arr[i] % j == 0 & arr[i] != 2 & arr[i] != 3 & arr[i] != 5 & arr[i] != 7)
      {
        console.log(arr[i], i)
        arr.splice(i, 1);
      }
    }
  }
  sum = arr.reduce( (a, b) => a + b, 0)
  console.log(arr, sum);
  return sum;
} */
function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  }
  sumPrimes(20);
  /* 
  function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  } */