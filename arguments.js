//Znajduje w tablicy podanej jako pierwszy argument, argumenty podane jako nastepne wartości i usuwa je z tablicy
function destroyer(arr) 
{
  //przypisanie do zmiennej args wszystkich argumentów
  let args = [...arguments];
  //console.log(arguments[1], args, args.length);
  
  console.log(arguments[0], arr)
  //wyszukiwanie w pętli tyle razy i le jest argumentów
  for(let i=1; i<args.length; i++)
  {
    //console.log("arg nr", i, "=",args[i]);
    //iterowanie po każdym elemencie z pierwszej tablicy prze każdy argument
    for(let j=0; j<arr.length; j++)
    {
      //console.log(arguments[0].length, "args0=", arguments[0][j]);
      //jeżeli argument znajduje się w tablicy to usuwa go
      if(args[i] === arr[j])
      {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  console.log(arr);
  //w wyniku pozostaje przefiltrowana tablica bez argumentów
  return arr;
}

//destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);

//INNE ROZWIĄZANIA
/* function destroyer(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !valsToRemove.includes(val);
    });
  }

  //------------------------------------

  function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
  } */