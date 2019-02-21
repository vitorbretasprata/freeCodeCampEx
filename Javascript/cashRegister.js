/** In this challenge I've answered using the solution, soon I will use a different approach */

var moneyTable = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
  ];

function checkCashRegister(price, cash, caixa) {
    var change = cash - price;    
    return payMoney(change, caixa);
}
  
function payMoney(change, caixa){  
    
    let reg = caixa.reduce((accumutator, current) => {
        accumutator.total += current[1];
        accumutator[current[0]] = current[1]

        return accumutator;
    }, { total: 0 });

    
    if(reg.total < change) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    if(reg.total === change) {
        return {status: "CLOSED", change: caixa};
    }  
          
    let arr = moneyTable.reduce((accumutator, current) => {
        let value = 0;

        while(reg[current.name] > 0 && change >= current.val){
            change -= current.val;            
            reg[current.name] -= current.val;
            value += current.val;

            change = Math.round(change * 100) / 100;
        }
        
        
        console.log(change)
        if(value > 0) {
            accumutator.push([current.name, value]);
        }

        return accumutator;
    }, []);    
    
    if(arr.length < 1 || change > 0){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    return {status: "OPEN", change: arr};
}
  
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));