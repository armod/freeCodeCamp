function checkCashRegister(price, cash, cid) 
{
  const kasa = [];
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
  let change = {
              status: "OPEN",
              change: ["nominal", ile]};

  console.log("Reszta =",reszta, typeof cid);

  for(let i=nominaly.length-1; i>=0; i--)
  {
    //console.log(cid[i][1], nominaly[i][1]);
    if(reszta >= nominaly[i][1] & reszta <= cid[i][1])
    {
      ile = reszta / nominaly[i][1];
      reszta = reszta - (nominaly[i][1] * ile);
      cid[i][1] = cid[i][1] - (ile * nominaly[i][1]);
      
      console.log("ile =", ile," nominal =", nominaly[i][1],"|", cid[i][0], " cid po = ", cid[i][1]);
    }
    kasa.push(cid[i][1]);
  }
  console.log(kasa);
  if(ile == 0)
  {
    change = {status: "INSUFFICIENT_FUNDS", change: []};
    console.log("Insufficient funds - niewystraczające środki!");
    return change;
  }
  if(ile > 0)
  {
    if((kasa.every( (curr) => curr == 0)) == true)
    {
      console.log("cid every = ",cid.every( (curr) => curr == 0));
      change = {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]};
      return change;
    }    
  }
  //console.log(change, kasa,cid);
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);