function smallestCommons(arr) {

    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
  
    let smallestCommon = lcm(min, min + 1);
  
    while(min < max) {
      min++;
      smallestCommon = lcm(smallestCommon, min);
    }
  
    return smallestCommon;
  }

function gcd(a, b) {
    while (b > 0) {
      let tmp = a;
      a = b;
      b = tmp % b;
    }
    return a;
  }
  
  
function lcm(a, b) {
    return (a * b / gcd(a, b));
  }
  
smallestCommons([1,5]);