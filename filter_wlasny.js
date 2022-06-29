//Implement the filter Method on a Prototype

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
    
  //this.forEach(a => newArray.push(callback(a)));
  for(let i=0; i<this.length; i++)
  {
    console.log(callback(this[i]));
    if(callback(this[i]) == true)
    {
      newArray.push(this[i]);
      console.log(newArray);
    }
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});


