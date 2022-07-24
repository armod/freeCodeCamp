function checkCashRegister(price, cash, cid) 
{
  const cid_kopia = [...cid];
  //console.log(cid_kopia);
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
              status: "",
              change: ["", 0]};

  console.log("Reszta =",reszta);
  //let licznik = 0;
  for(let i=nominaly.length-1; i>=0; i--)
  {
    console.log("cid=",cid[i][1]," nominal=", nominaly[i][1], reszta);
    if(reszta > 0 & reszta > nominaly[i][1])
    {
      if(reszta > cid[i][1] & cid[i][1] != 0 )
      {
        ile = cid[i][1] / nominaly[i][1];
        console.log("par", ile);
        //console.log( Math.floor(reszta / cid[i][1]), cid[i][1]);
        reszta = reszta - (nominaly[i][1] * ile);
        reszta = (Math.round(reszta * 100)/100).toFixed(2);
        cid[i][1] = cid[i][1] - (ile * nominaly[i][1]);
        zmiana.push([cid[i][0], ile * nominaly[i][1]]);
        console.log("ile =", ile," nominal =", nominaly[i][1],"|", cid[i][0], " cid po = ", cid[i][1], "reszta=", reszta);
      }
      else if(reszta <= cid[i][1])
      {
        ile = Math.floor(reszta / nominaly[i][1]);
        
        reszta = reszta - (nominaly[i][1] * ile); 
        
        reszta = (Math.round(reszta * 100)/100).toFixed(2);
        
        cid[i][1] = cid[i][1] - (ile * nominaly[i][1]);
        zmiana.push( [cid[i][0], ile * nominaly[i][1]]);
        console.log("ile =", ile," nominal =", nominaly[i][1],"|", cid[i][0], " cid po = ", cid[i][1], "reszta", reszta);
      }
    }
    kasa.push(cid[i][1]);
  }

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
      console.log("cid every = ", kasa.every( (curr) => curr == 0));
      //change = {status: "CLOSED", change: [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]};
      
      change = cid_kopia;
      console.log("zmiana",zmiana[0][0]);
      for(let i=0; i<cid.length; i++)
      {
        for(let j=0; j<zmiana.length; j++)
        {
          if(cid[i][0] == zmiana[j][0])
          {
            change[i][1] = zmiana[j][1];
          }
        }
      }
      let changer = {status: "CLOSED", change};
      console.log(change = {status: "CLOSED", change});
      return changer; 
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