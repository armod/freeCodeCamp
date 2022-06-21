function titleCase(str) 
{
  let wynik = "";
  wynik = str[0].toUpperCase();

  for(let i=1; i<str.length; i++)
  {
    if(str[i] === " ")
    {
      wynik = wynik + " " + str[i+1].toUpperCase()
      //console.log("slice=",str = str.slice(i+1,i+2));
      //console.log("str=",str[i+1].toUpperCase(), str, wordL[i+1]);
      i++;
    }
    else
    {
      wynik += str[i].toLowerCase();
    }
  }
  console.log("Wynik =", wynik);
  return wynik;
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");