function rot13(str) 
{
  let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //console.log(str.charCodeAt(0), str.charAt(0));
  let num = 65;
  //console.log(String.fromCharCode(65));

  console.log("asd",str.charCodeAt(0), str[0].match(/[A-Z]/g));
  

  console.log("=",typeof (str.charCodeAt(1)+13), (str.charCodeAt(1)+13), abc[ (str.charCodeAt(1)+13) - 65] )
  for(let i=0; i<str.length; i++)
  {
    //console.log(str[i]);
    if(str[i] != str[i].match(/[A-Z]/g))
    {
      console.log(str[i]);
    }
    else if((str.charCodeAt(i)+13) > 90 & str[i] == str[i].match(/[A-Z]/g))
    {
      //console.log("większy od 90 ->", (str.charCodeAt(i+13)) );
      console.log(str[i], abc[(str.charCodeAt(i)+13) - 91], ">90");
    }
    else if((str.charCodeAt(i)+13) <= 90  & str[i] == str[i].match(/[A-Z]/g))
    {
      console.log(str[i], abc[(str.charCodeAt(i)+13) - 65], "<90");
    }
    /* else if(str[i] != str[i].match(/[A-Z]/g) )
    {
      console.log("asd", str[i], (str.charCodeAt(i)))
    } */
  }
  return str;
}

rot13("SERR PBQR PNZC");