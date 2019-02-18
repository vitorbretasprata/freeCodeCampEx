function myReplace(str, before, after) {
    const rg = new RegExp(before, "g");

    if(/[A-Z]/.test(before[0])) {
       after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    console.log(after)
    return str.replace(rg, after);
  }
  
  console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));