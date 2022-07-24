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
  let zmiana = [];
  let change = {
              status: "OPEN",
              change: ["nominal", ile]};

  console.log("Reszta =",reszta);
  let licznik = 0;
  for(let i=nominaly.length-1; i>=0; i--)
  {
    console.log("cid=",cid[i][1], nominaly[i][1]);
    if(reszta > 0 & reszta > nominaly[i][1])
    {
      if(reszta > cid[i][1])
      {
        ile = cid[i][1] / nominaly[i][1];
        console.log(Math.floor(reszta / cid[i][1]), cid[i][1]);
        reszta = reszta - (nominaly[i][1] * ile);
        reszta = (Math.round(reszta * 100)/100).toFixed(2);
        cid[i][1] = cid[i][1] - (ile * nominaly[i][1]);
        zmiana.push([cid[i][0], ile * nominaly[i][1]]);
        console.log("ile =", ile," nominal =", nominaly[i][1],"|", cid[i][0], " cid po = ", cid[i][1], "reszta", reszta);
      }
      else if(reszta < cid[i][1])
      {
        ile = Math.floor(reszta / nominaly[i][1]);
        
        reszta = reszta - (nominaly[i][1] * ile); 
        
        reszta = (Math.round(reszta * 100)/100).toFixed(2);
        
        cid[i][1] = cid[i][1] - (ile * nominaly[i][1]);
        zmiana.push([cid[i][0], ile * nominaly[i][1]]);
        console.log("ile =", ile," nominal =", nominaly[i][1],"|", cid[i][0], " cid po = ", cid[i][1], "reszta", reszta);
      }
    }
    kasa.push(cid[i][1]);
  }

  
  const obj = {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]};
  console.log(obj);

  console.log("Kasa",kasa);
  if(reszta > 0)
  {
    change= {status: "INSUFFICIENT_FUNDS", change: []};
    //console.log("Insufficient funds - niewystraczające środki!");
    return change;
  }
  if(reszta == 0)
  {
    console.log("reszta =", reszta);
    if((kasa.every( (curr) => curr == 0)) == true)
    {
      console.log("cid every = ",cid.every( (curr) => curr == 0));
      change = {status: "CLOSED", change: [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]};
      return change;
    }
    else
    {
      change = zmiana;
      let changer = {status: "OPEN", change};
      console.log(change = {status: "OPEN", change});
      return changer;
    }
  }
}
//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
 
//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
/*
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); */

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);