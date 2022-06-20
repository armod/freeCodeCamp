function confirmEnding(str, target) 
{
  let tab = [];
  let tab2 = [];
  let licznik = 0;
  console.log(str.length);
  for(let i = 0; i < target.length; i++)
  {
    tab.unshift(str[str.length - 1 - i]);
    tab2.push(target[i]);
    //console.log(tab);
  }
  console.log(tab, target, tab2, tab.length); 
  for(let i=0; i<tab.length; i++)
  {
    if (tab[i] === tab2[i])
    {
      console.log("Równe", tab.length);
    }
    else
    {
        console.log("Nie równe", tab.length);
      return false;
    }
  }
  return true;
}

confirmEnding("Bastian", "an");
confirmEnding("Connor", "n");