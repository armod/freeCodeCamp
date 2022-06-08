function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp) == true)
    {
        console.log(obj);
        console.log(checkProp);
        console.log(obj[checkProp]);
      return obj[checkProp];
    }
    else
    {
      return "Not Found";
    }
    // Only change code above this line
  }


  checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");