function translatePigLatin(str) 
{
  let pig = ""; 
  //jeżeli pierwsza jest samogłoską
  if(str[0] == str.match(/^[aeiuo]/))
  {
    //do zmiennej pig wstaw str + "way"
    pig = str + "way";
    console.log("samo", pig);
    return pig;
  }
  else //jeżeli pierwsza jest spółgłoską
  {
    let spol = "";
    let licznik = 0;
    //w pętli sprawdzaj każda literę
    for(let i=0; i<str.length; i++)
    {
      //jeżeli jest spółgłoską
      if(str[i] != str.match(/[aeiuo]/))
      {
        //do zmiennej spol dodaj i-tą litere
        spol = spol + str.substr(i, 1);
        licznik++;
        console.log(licznik, spol, i, str.length);
        //wykonuj, aż znajdziesz samogłoskę
        //jeżeli nie ma to po przejściu wszystkich liter dodaj "ay" na koncu
        if(i == str.length-1)
        {
          pig = spol + "ay";
        }
        //
      }
      //jeżeli po drodze jest samogłoska, przerwij pętle i złącz skrócony o liczbę samogłosek stri dodaj do niego zlepek spółgosek i dodaj "ay"
      else
      {
        //
        console.log("zlepek=", spol);
        pig = str.substr(licznik) + spol + "ay";
        console.log(pig);
        return pig;
      }
    }
    //console.log(pig);
    //return pig + "ay";
  }
  //console.log(pig );
  return pig;
}
/* 
translatePigLatin("glove");
translatePigLatin("paragraphs");
translatePigLatin("algorithm"); */
translatePigLatin("rhythm");
