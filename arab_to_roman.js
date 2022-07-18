//funkcja zamienia liczby arabskie na rzymskie
function convertToRoman(num) 
{
  //console.log(num);
  /* console.log(num%10);
  console.log(Math.floor(num/10%10)*10);
  console.log(Math.floor(num/100%10)*100);
  console.log(Math.floor(num/1000%10)*1000); */

  //ustawienie zmiennych pomoczniczych do rozbicia liczby na składniki setki, dziesiatki jedności itp...
  let skladnik = 1;
  let tab = [];
  //w pętli do tablicy tab dodaje element na poczatku tablicy
  //pętla ograniczona do liczb czterocyfrowych
  for(let i=0; i<5; i++)
  {
    //Math.floor zaokragla w dół
    //console.log(Math.floor(num/skladnik%10)*skladnik);
    if( (Math.floor(num/skladnik%10)*skladnik) > 0)
    {
      tab.unshift((Math.floor(num/skladnik%10)*skladnik))
    }
    skladnik = skladnik * 10;
  }
  //console.log(tab)
  //ustawiamy liczby rzymskie w obiekt roman_num
  const roman_num = { 3000: "MMM",
                        2000: "MM",
                        1000: "M", 
                        900: "CM",
                        800: "DCCC",
                        700: "DCC",
                        600: "DC",
                        500: "D",
                        400: "CD",
                        300: "CCC",
                        200: "CC",
                        100: "C",
                        90: "XC",
                        80: "LXXX",
                        70: "LXX",
                        60: "LX",
                        50: "L",
                        40: "XL",
                        30: "XXX",
                        20: "XX",
                        10: "X",
                        9: "IX",
                        8: "VIII",
                        7: "VII",
                        6: "VI",
                        5: "V",
                        4: "IV",
                        3: "III",
                        2: "II",
                        1: "I"};
  //console.log(Object.keys(roman_num).length)
  //console.log(roman_num[1], Object.keys(roman_num)[7]);
  let result = "";
  //w pętli sprawdzamy tyle i le jest składników w tab
  for(let i=0; i<tab.length; i++)
  {
    //jażeli w obiekcie roman_num jest dana właściwość (czyli numer)
    if( roman_num.hasOwnProperty(tab[i]) )
    {
      //console.log(roman_num[tab[i]]);
      //to łączymy string
      result = result + roman_num[tab[i]];
    }
  }
  //wypisujemy rezultat
  console.log(num, " = ", result);
  return result;
}

convertToRoman(1004);
convertToRoman(798); // should return the string DCCXCVIII