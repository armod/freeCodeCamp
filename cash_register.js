function checkCashRegister(price, cash, cid) 
{
  let penny = cid[0][1];
  let nickel = cid[1][1];
  let dime = cid[2][1];
  let quarter = cid[3][1];
  let one = cid[4][1];
  let five = cid[5][1];
  let ten = cid[6][1];
  let twenty = cid[7][1];
  let hundred = cid[8][1];

  //quarter = 3;
  console.log("0,01$",penny, " 0,05$",nickel, " 0,1$",dime, " 0,25$",quarter, " 1$",one, " 5$",five, " 10$",ten, " 20$",twenty, " 100$",hundred);
  let roznica = cash - price;
  console.log("Cash(",cash,"$) - price(",price, ") =", roznica,"$");
  let change;
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);