function pairElement(str) 
{
  let arr = [];
  for(let i=0; i<str.length; i++)
  {
    if(str[i] === "G")
    {
      arr[i] = ["G","C"];
    }
    if(str[i] === "C")
    {
      arr[i] = ["C","G"];
    }
    if(str[i] === "T")
    {
      arr[i] = ["T","A"];
    }
    if(str[i] === "A")
    {
      arr[i] = ["A","T"];
    }
  }
  console.log(arr);
  return arr;
}

pairElement("GCG");


//Inne rozwiązanie
// function pairElement(str) {
//     //create object for pair lookup
//     var pairs = {
//       A: "T",
//       T: "A",
//       C: "G",
//       G: "C"
//     };
//     //split string into array of characters
//     var arr = str.split("");
//     //map character to array of character and matching pair
//     return arr.map(x => [x, pairs[x]]);
//   }
  
//   //test here
//   pairElement("GCG");