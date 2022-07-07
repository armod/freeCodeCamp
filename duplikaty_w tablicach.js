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