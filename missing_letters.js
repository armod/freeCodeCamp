function fearNotLetter(str) 
{
  let abc = "abcdefghijklmnopqrstuvwxyz";
  if (str === abc)
  {
    return undefined;
  }
  else
  {
    let suma = 0;
    for(let i= 0; i<str.length; i++)
    {
        suma = suma + str.charCodeAt(i);
        console.log(str[i], str.charCodeAt(i))
    }
    console.log("Suma", str, "=",suma, str[0], str[0].charCodeAt());


    let suma2 = 0;
    let str2 = abc.substring(str[0].charCodeAt()-97, str[0].charCodeAt()-97 + str.length+1 )
    console.log("str2",str2, abc.charCodeAt(19),str[0].charCodeAt(), str.length+1);
    
    for(let i= 0; i<str2.length; i++)
    {
        suma2 += str2[i].charCodeAt();
        console.log(suma2);
    }
    console.log("Suma2 =", suma2);
    console.log("Rożnica=", suma2-suma, "=", String.fromCharCode(suma2- suma));
    return String.fromCharCode(suma2 - suma);
    //console.log(String.fromCharCode(65, 66, 67));  // "ABC"
    //console.log(str.charCodeAt())
  }
}

fearNotLetter("stvwx");/* 
fearNotLetter("a");

fearNotLetter("stvwx")
fearNotLetter("stuvwx") */