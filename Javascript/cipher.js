function rot13(str) { // LBH QVQ VG!
     
    return str.replace(/[A-Z]/g, X => String.fromCharCode((X.charCodeAt(0) % 26) + 65));
  }
  
  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"));