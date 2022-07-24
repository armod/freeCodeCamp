function checkCashRegister(price, cash, cid) 
{
  const nominaly = [["PENNY", 0.01], 
                    ["NICKEL", 0.05], 
                    ["DIME", 0.1], 
                    ["QUARTER", 0.25], 
                    ["ONE", 1], 
                    ["FIVE", 5], 
                    ["TEN", 10], 
                    ["TWENTY", 20], 
                    ["ONE HUNDRED", 100]];

  let reszta = cash - price;
  let ile = 0;
  console.log("Reszta =",reszta, cid.length);

  for(let i=nominaly.length-1; i>=0; i--)
  {
    //console.log(cid[i][1], nominaly[i][1]);
    if(reszta >= nominaly[i][1])
    {
      ile = reszta / nominaly[i][1];
      reszta = reszta - (nominaly[i][1] * ile)
      console.log("ile =", ile, nominaly[i][1]);
    }
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);