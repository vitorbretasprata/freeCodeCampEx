function telephoneCheck(str) {
    let regex = /(1{1} )|(\(*5{3}\)*)|(5{4})/g
    return str.match(regex);
}
  
console.log(telephoneCheck("1 555 555-5555"));