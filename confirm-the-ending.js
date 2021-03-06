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


//proste rozwiązania :(
/* 
Solutions
Solution 1 (Click to Show/Hide)
(Declarative approach)
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");
Code Explanation
First we use the slice method copy the string.
In order to get the last characters in str equivalent to the target's length we use the slice method.
The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
For example str.slice(10, 17) would return give me.
In this case we only include one parameter which it will copy everything from the starting index.
We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
Finally we compare the return result of slice to target and check if they have the same characters.
Relevant Links
String.prototype.slice() 1.9k
Solution 2 (Click to Show/Hide)
(using Regular Expression)
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));
Code Explanation
We need to make a pattern from the target variable that exists at the end of the string str.
Since we will use a variable that will change the pattern each time the function is called, we will use the constructor of the regular expression object new RegExp(pattern[, flags]), so we start with: new RegExp(target).
Then we have to check at the end of the string, so we concatenate to the target variable the $ character to match the end: new RegExp(target+'$').
We use the flag i to ignore the case of the pattern and we have our completed RegExp: new RegExp(target+'$','i'), or we can ommit the flag entirely.
Finally, we are using our regular expression with the test method to the given string, to check if the string ends with the pattern and return true or false accordingly.
Relevant Links
RegExp 812
RegExp.prototype.test() 374
Solution 3 (Click to Show/Hide)
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");

Code Explanation
If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string. */