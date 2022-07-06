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