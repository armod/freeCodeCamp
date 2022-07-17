function truthCheck(collection, pre) 
{
  // Create a counter to check how many are true.
  let counter = 0;
  // Check for each object
  for (let c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
  /* console.log(collection[0]);

  for(let i=0; i<collection.length; i++)
  {
    console.log();
    for(let j=0; j<3; j++)
    {
      //console.log(collection[i][j]);
      if(collection[i][j] == pre)
      {
        console.log(collection[i][j]);
        return false;
      }
    }
  }
  return true; */
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");


/* 
Sprawdź, czy predykat (drugi argument) jest prawdziwy we wszystkich elementach kolekcji (pierwszy argument).

Innymi słowy, otrzymujesz tablicę kolekcji obiektów. Predykat pre będzie własnością obiektu i musisz zwrócić true, jeśli jego wartość jest prawdziwa. W przeciwnym razie zwróć fałsz.

W JavaScript wartości true są wartościami, które przekładają się na true, gdy są oceniane w kontekście logicznym.

Pamiętaj, że możesz uzyskać dostęp do właściwości obiektu za pomocą notacji kropkowej lub notacji []. 

Podpowiedź 1
Pamiętaj, aby przejść przez pierwszy argument, aby sprawdzić każdy obiekt.

Podpowiedź 2
Tylko jeśli wszystkie są zgodne z prawdą, zwrócimy prawdę, więc upewnij się, że wszystkie sprawdzają.

Podpowiedź 3
Możesz użyć pętli lub funkcji zwrotnych, istnieje wiele sposobów rozwiązania tego problemu.

*/