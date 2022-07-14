function steamrollArray(arr) 
{
  //arr.reduce((acc, val) => acc.concat(val), []);
  //const flatSingle = arr => [].concat(...arr);
  
  console.log(arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val), []))
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val), []);
}

steamrollArray([1, [2], [3, [[4]]]]);