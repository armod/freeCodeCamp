//funkcja sprawdzająca czy dane słowo jest palindromem
function palindrome(str) 
{
  //str wejsciowy zmianiamy na małe litery i wyrażeniem regularnym usuwamy nie-alfanumeryczne znaki
  let str2 = str.toLowerCase().match(/[A-Za-z0-9]/g);
  //console.log("str2",str2, str2.length);
  //ustawiamy zmienna ile dla pentli, żeby wiedzieć ile razy iterować
  let ile = 0;
  //jeżeli słowo ma parzysta ilość znaków
  if(str2.length % 2 === 0)
  {
    ile = str2.length / 2;
  }
  //lub ma nieparzystą ilość znaków
  else
  {
    //zaokrąglamy w dół
    ile = Math.floor(str2.length / 2);
  }
  console.log(ile);
  //w pętli ustawiamy dwie zmienne startowe jedną i - na pierwszym znaku i druga j - na ostatni znak
  //przechodzimy tyle razy pętle i ile ustawiliśmy w zmiennej "ile"
  for(let i=0, j=str2.length-1; i<ile; i++, j--)
  {
    //w pierwszym wywołaniu sprawdzamy czy znak na poczatku jest taki sam jak na końcu
    //jeśli tak, wypisujemy go i przechodzimy do następnych dwóch
    if(str2[i] === str2[j])
    {
      console.log("str[",i, "]", str2[i], " = ", "str[", j, "]", str2[j]);
    }
    //jeśli są różne, zatrzymujemy pętlę i zwracamy false
    else
    {
      console.log("Słowo nie jest palindromem.");
      return false;
    }
  }
  //po przejściu całej pętli słowo jest palindromem
  console.log("Słowo jest palindromem.");
  return true;
}

palindrome("eye");
palindrome("not a palindrome");
palindrome("_eyE.");
palindrome("A man, a plan, a canal. Panama");
palindrome("race car");