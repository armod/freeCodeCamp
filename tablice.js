/* function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i=0; i<arr.length; i++)
    {
      if (arr[i].indexOf(elem) == -1)
      {
        newArr.push(arr[i]);
        console.log(arr[i]);
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 2));


  //for..in
  const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
    let wynik = 0;
    for(let user in usersObj)
    {
      if (usersObj[user].online === true)
      {
        wynik++;
      }    
    }
    return wynik;
    // Only change code above this line
  } */
  
  //console.log(countOnline(users));


  function reverseString(str) {
    let x = ""
    for (let i=0; i<str.length; i++)
    {
      console.log(str[i]);
      x = push(str[i]);
    }
    return str;
  }
  
  reverseString("hello");