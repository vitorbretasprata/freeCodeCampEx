function checkCashRegister(price, cash, caixa) {
    var change = cash - price;
    
    return payMoney(change, caixa);
}
  
  function payMoney(change, caixa){
    let moneyArr = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]
     
    let balance = change;    
           
    for(let i = moneyArr.length-1; i >= 0; i--){
        if(moneyArr[i][1] < balance){
            balance -= moneyArr[i][1];

            if(moneyArr[i][1] > caixa[i][1] && i !== 0){
                for(let j = i-1; j = 0; j--){
                    console.log(moneyArr[j][1] + " - " + caixa[j][1])
                    if(moneyArr[j][1] > caixa[j][1] && j === 0){
                        return {status: "INSUFFICIENT_FUNDS", change: []};
                    } else {
                        caixa[j][1] = caixa[j][1] - moneyArr[j][1];
                        console.log("3123")
                        break;
                    }
                }
            } 
            
            caixa[i][1] = caixa[i][1] - moneyArr[i][1];             
            break;      
        }    
    }   

    if(balance > 0){
        let x = payMoney(balance, caixa)
        return x;
    } else {
        return {status: "OPEN", change: [...balance]}
    }
  }

  function loop(i, ){

  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));