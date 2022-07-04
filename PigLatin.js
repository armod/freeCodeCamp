function translatePigLatin(str) 
{
  let pig = "";
  if(str[0] == str.match(/^[aeiuo]/))
  {
    pig = str + "way";
    console.log("samo", pig);
  }
  else
  {
    let spol = ""
    for(let i=0; i<str.length; i++)
    {
      if(str[i] != str.match(/[aeiuo]/))
      {
        spol = spol + str.slice(i, str.length-(str.length - (i +1)));
        //console.log(pig, spol);
      }
      else
      {
        console.log(str.slice(i) + str.slice(0, str.length-(str.length - i)));
        pig = str.slice(i) + str.slice(0, str.length-(str.length - i));
        //console.log("społ", pig);
      }
    }
    console.log(pig);
    return pig + "ay";
  }
  console.log(pig );
  return pig;
}

translatePigLatin("glove");
translatePigLatin("paragraphs");
//translatePigLatin("algorithm");
translatePigLatin("rhythm");
