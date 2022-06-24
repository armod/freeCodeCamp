function chunkArrayInGroups(arr, size) 
{
  let tab = [];
  let licznik = 0;
  for(let i=0; i<arr.length/size; i++)
  {
    tab[i] = arr.slice(0 + licznik, size + licznik);
    licznik = licznik + size;
    //console.log(licznik, size, tab[i]);
  }
  console.log(tab);
  return tab;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);