function convertToRoman(num) {

    let roman;
    let M = ["", "M", "MM", "MMM"];
    let C = ["", "C","CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let X = ["", "X","XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let I = ["", "I","II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    return roman = M[Math.floor(num/1000)] + C[Math.floor((num%1000)/100)] + X[Math.floor((num%100)/10)] + I[num % 10];
}
   
console.log(convertToRoman(400));
