function smallestCommons(arr) 
{
  arr.sort( function(a, b) {
    return a - b;
  });
  console.log(arr);
  let tab = [];
  for(let i=arr[0]; i<=arr[1]; i++)
  {
      tab.push(i);
  }
  console.log(tab);

  let iloczyn = tab.reduce( (x, y) => x * y, 1);
  console.log(iloczyn);

  return iloczyn;
}

smallestCommons([1,5]);

/* Znajdź najmniejszą wspólną wielokrotność podanych parametrów, którą można równomiernie podzielić przez oba, a także przez wszystkie kolejne liczby w zakresie między tymi parametrami.

Zakres będzie tablicą dwóch liczb, które niekoniecznie będą w kolejności numerycznej.

Na przykład, jeśli dane 1 i 3, znajdź najmniejszą wspólną wielokrotność zarówno 1, jak i 3, która jest również podzielna przez wszystkie liczby z zakresu od 1 do 3. Odpowiedź brzmiałaby tutaj 6. */