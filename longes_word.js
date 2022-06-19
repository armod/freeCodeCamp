function findLongestWordLength(str) 
{
  var tab= [];
  var licznik=0;
  console.log(str.length);
  for(var i=0; i<str.length; i++)
  {
    if(str[i] != " ")
    {
      licznik++;
      //console.log(str[i], licznik);
      //console.log(i);
      tab.push(licznik);
    }
    else if (str[i] == " ")
    {
      tab.push(licznik);
      //console.log(tab, i);
      licznik = 0;
    }
  }
  console.log("Max=",Math.max(...tab));
  return Math.max(...tab);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");