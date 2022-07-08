function convertHTML(str) 
{
  var temp = str.split("");
  //console.log(temp);
  for(let i=0; i<temp.length; i++)
  {
    if(temp[i] == "\&")
    {
      //console.log(i, str.length)
      temp[i] = "&amp;";
      //temp.replaceAll(temp[i], "&amp;");
      //console.log(temp.replaceAll(temp[i], "&amp;"));
    }
    if(temp[i] == "<")
    {
      temp[i] = "&lt;";
      //temp.replaceAll(temp[i], "&lt;")
      //console.log(temp.replaceAll(temp[i], "&lt;"))
    }
    if(temp[i] == ">")
    {
      temp[i] = "&gt;";
      //temp.replaceAll(temp[i], "&gt;")
      //console.log(temp.replaceAll(temp[i], "&gt;"))
    }
    if(temp[i] == "\'")
    {
      temp[i] = "&apos;";
    }
    if(temp[i] == '\"')
    {
      temp[i] = "&quot;";
      //temp.replaceAll(temp[i], "&gt;")
      //console.log(temp.replaceAll(temp[i], "&gt;"))
    }
    //console.log("\"temp");
  }
  //console.log(typeof str);
  temp = temp.join("");
  console.log(temp);
  return temp;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Schindler's List");
convertHTML("<>");
convertHTML('Stuff in "quotation marks"')