function telephoneCheck(str) 
{
  //tworzymy tablice samych cyfr
  const tab = str.split("").filter(num => num >= 0 & num != " ");
  if(tab.length === 10 | tab.length === 11 )
  {
    console.log("Numer",str,"ma", tab.length, "cyfr.")
    return true;
  }
  else if(tab.length < 10 | tab.length > 11 )
  {
    console.log("Numer",str,"ma", tab.length, "cyfr. BŁĄD")
    return false;
  }
  const number = str.match(/^[0-9]/);
  //console.log(str, number);
  //console.log(tab, tab.length);
}

telephoneCheck("555-555-5555");
telephoneCheck("1 555)555-5555");
telephoneCheck("(6054756961)");
telephoneCheck("10 (757) 622-7382");
telephoneCheck("555-5555");