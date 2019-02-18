function sumFibs(num) {

    let firstNum = 0;
    let res = 0;
    let secNum = 1;
    while (secNum <= num) {
        if (secNum % 2 !== 0) {
            res += secNum;
        }
        
        console.log("First: " + firstNum);

        secNum = secNum + firstNum;
        console.log("Sec: " + secNum);
        firstNum = secNum - firstNum;    
    }

    return res;
}

console.log(sumFibs(4));


