function sentensify(str) {
    // Only change code below this line
    //let arr = [];
    return str.split(/\W/).join(" ");
    /* for(let i=0; i<str.length; i++)
    {
      arr[i] = str[i];
    } */
    //return arr.join("-");
    //return str;
    // Only change code above this line
  }
  console.log(sentensify("May-the-force-be-with-you"));
  sentensify("May-the-force-be-with-you");