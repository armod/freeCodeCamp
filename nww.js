function smallestCommons(arr) 
{
  let tab_pom = [];
  arr.sort( function(a, b) {
    return a - b;
  });
  console.log(arr);

  //obliczenie iloczynu
  let iloczyn = 1;
  for(let x=1; x<=arr[1]; x++)
  {
    iloczyn *= x;
  }
  //iloczyn = 20;
  let tab = [];
  for(let i=arr[0]; i<=arr[1]; i++)
  {
    for(let j=1; j<=iloczyn; j++)
    {
      tab.push(i*j);
      if(tab[j-1] >= iloczyn)
      {
        break;
      }
    }
    tab_pom.push(tab);
    tab = [];
  }
  console.log("tab=",tab, "tab_pom=", tab_pom);

  /* let iloczyn = tab_pom[0].reduce( (x, y) => x * y, 1);*/
  console.log(iloczyn); 

  return iloczyn;
}

smallestCommons([1,5]);

/* Znajdź najmniejszą wspólną wielokrotność podanych parametrów, którą można równomiernie podzielić przez oba, a także przez wszystkie kolejne liczby w zakresie między tymi parametrami.

Zakres będzie tablicą dwóch liczb, które niekoniecznie będą w kolejności numerycznej.

Na przykład, jeśli dane 1 i 3, znajdź najmniejszą wspólną wielokrotność zarówno 1, jak i 3, która jest również podzielna przez wszystkie liczby z zakresu od 1 do 3. Odpowiedź brzmiałaby tutaj 6. */