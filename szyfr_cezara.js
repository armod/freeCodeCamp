function rot13(str) 
{
  let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(str.charCodeAt(0), str.charAt(0));
  let num = 65;
  console.log(String.fromCharCode(65));

  console.log("asd",str.charCodeAt(0));
  

  for(let i=0; i<str.length; i++)
  {
    //console.log(String.fromCharCode(str.charCodeAt(i)));
    if((str.charCodeAt(i)+13) > 90)
    {
      console.log("większy od 90 ->", (str.charCodeAt(i+13));
      console.log(abc[(str.charCodeAt(i)+13) - 91]);
    }
    else
    {
      console.log(abc[(str.charCodeAt(i)+13)]);
    }
  }
  return str;
}

rot13("SERR PBQR PNZC");