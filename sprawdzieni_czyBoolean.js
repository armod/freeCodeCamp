function bouncer(arr) 
{
  let wynik = [];
  for(let i=0; i<arr.length; i++)
  {
    if (arr[i])
    {
      //console.log(arr[i]);
      wynik.push(arr[i]);
    }
  }
  console.log(wynik);
  return wynik;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
/* 
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"] */