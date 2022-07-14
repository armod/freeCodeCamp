function dropElements(arr, func) 
{
  for (let i=0; i<arr.length; i++)
  {
    if(func(arr[i]) != true)
    {
      //console.log(arr[i], i);
      arr.shift();
      i--;
    }
    else
    {
      break;
    }
  }
  console.log(arr);
  return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
//dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
//dropElements([1, 2, 3, 4], function(n) {return n >= 3; });
//dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

/* 
Mając tablicę arr, przeprowadź iterację i usuń każdy element, zaczynając od pierwszego elementu (indeks 0), aż funkcja func zwróci wartość true po przejściu przez nią iterowanego elementu.

Następnie zwróć resztę tablicy, gdy warunek zostanie spełniony, w przeciwnym razie arr powinien zostać zwrócony jako pusta tablica.

Podpowiedź 1
Możesz użyć Array.prototype.shift() lub filtra, z którym powinieneś być bardziej zaznajomiony, aby rozwiązać ten problem w kilku linijkach kodu.

Podpowiedź 2
Shift zwraca element, który został usunięty, którego tak naprawdę nie potrzebujemy, wystarczy nam zmodyfikowana tablica, która pozostała.

Podpowiedź 3
Jeśli nadal nie możesz wymyślić, jak rozwiązać go za pomocą Shift, spróbuj rozwiązać go za pomocą filtra i sprawdź, jak działa filtr, jeśli się z nim zapoznasz, możesz zrobić kod za pomocą Shift. */