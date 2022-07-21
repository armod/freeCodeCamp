function telephoneCheck(str) 
{
  //tworzymy tablice samych cyfr
  const tab = str.split("").filter(num => num >= 0 & num != " ");
  const tab2 = str.split("");
  //console.log(tab2, tab2.length);
  //console.log(tab[0]);
  if(tab.length === 10 | tab.length === 11)
  {
    /* let regex = /\W/g;
    let result = str.match(regex);
    console.log("res",result); */
    for(let i=0; i<tab2.length; i++)
    {
      if(tab2[i] == "?")
      {
        return false;
      }
    }
    let mysl = 0;
    for(let i=0; i<tab2.length; i++)
    {
      if(tab2[i] == "-")
      {
        mysl += 1;
      }
    }
    if(mysl > 2)
    {
      return false;
    }
    if(tab2[0] == "(" & tab2[tab2.length-1] == ")")
    {
      return false;
    }
    if(tab2[0] != 1 & tab.length === 11)
    {
      return false;
    }
    const f1 = tab2.find(element => element == "(");
    const f2 = tab2.find(element => element == ")");
    //console.log(f1, f2);
    if(f1 == "(" & f2 == ")")
    {
      console.log("Numer",str,"ma", tab.length, "cyfr.")
      return true;
    }
    if(f1 == undefined & f2 == undefined)
    {
      console.log("Numer",str,"ma", tab.length, "cyfr.")
      return true;
    }
    else
    {
      console.log(str, "złe nawiasy")
      return false;
    }

  }
  else if(tab.length < 10 | tab.length > 11 )
  {
    console.log("Numer",str,"ma", tab.length, "cyfr. BŁĄD")
    return false;
  }
  //const number = str.match(/^[0-9]/);
  //console.log(str, number);
}
telephoneCheck("(555)5(55?)-5555");
telephoneCheck("(6054756961)");
telephoneCheck("1 555-555-5555");
telephoneCheck("555-555-5555");
telephoneCheck("1 555)555-5555");
telephoneCheck("(6054756961)");
telephoneCheck("10 (757) 622-7382");
telephoneCheck("555-5555");

//inne 
/*  let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
        rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (rex1.test(str)) {
        return true;
    }
    else {
        return rex2.test(str) ? true : false
    } */