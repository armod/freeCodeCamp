//Funkcja wyszukująca duplikaty z dwóch tablic, zwraca tablicę unikalnych elementów
function diffArray(arr1, arr2) 
{
  let tab1 = [];
  let tab2 = [];
  //sprawdzenie, która tablica ma więcej elementów
  if (arr1.length > arr2.length)
  {
    tab1 = [...arr1];
    tab2 = [...arr2];
  }
  else
  {
    tab1 = [...arr2];
    tab2 = [...arr1];
  }
  console.log("tab1=", tab1, "tab2=", tab2)
  let licznik = 0;
  let wynik = [];
  //porównywanie elementów z wiekszej tablicy z mniejszą
  for(let i=0; i<tab1.length; i++)
  {
    for(let j=0; j<tab2.length; j++)
    {
      //jeżeli w tablicy jest taki sam element
      if(tab1[i] === tab2[j])
      {
        //zwiększa licznik ("sygnalizator" czy jest duplikat w drugiej tablicy)
        licznik++;
        //i usuwa ten element z drugiej tablicy
        tab2.splice(j, 1)
      }
    }
    //po przejściu przez druga tablicę
    //jeżeli licznik jest większy od zera, to znaczy że był duplikat w drugiej tablicy
    if(licznik > 0)
    {
      //to usuwamy aktualnie badany element z pierwszej tablicy
      console.log(i, "remove", tab1[i]);
      tab1.splice(i, 1);
      //i zmniejszamy o jeden aktualnie badany indeks tablicy
      i--;
    }
    //zerujemy licznik, żeby znowu go użyc w kolejnej pętli
    licznik = 0;
  }
  console.log("tab1=", tab1, "tab2=", tab2)
  //"okrojone" tablice łączymy w jedną
  wynik = tab1.concat(tab2);
  console.log(wynik);
  return wynik;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);