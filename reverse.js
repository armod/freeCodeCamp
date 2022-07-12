function odwroc(str)
{
    let arr = [];
    arr = str.split("");
    console.log(str.split(""),typeof str,typeof arr);
    let str2 = arr.reverse().join("");
    console.log(str2);
    return arr;
}

odwroc("Ala ma kota");

//console.log(odwroc("Ala ma kota"))