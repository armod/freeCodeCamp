function myReplace(str, before, after) 
{
  //console.log(before[0], after[0], before[0].match(/^[A-Z]/));
  if(before[0] == before.match(/^[A-Z]/))
  {
    //console.log("duża",before[0].toUpperCase());
    //after.replace(after[0], after[0].toUpperCase()); // after[0].toUpperCase();
    //console.log(str.replace(before, after[0].toUpperCase()+ after.substr(1)));
    return str.replace(before, after[0].toUpperCase()+ after.substr(1));
  }
  else
  {
    return str.replace(before, after.toLowerCase());  
  }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("I think we should look up there", "up", "Down");
myReplace("His name is Tom", "Tom", "john")