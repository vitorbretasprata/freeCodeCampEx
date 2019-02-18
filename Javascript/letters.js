function fearNotLetter(str) {
    const indexLetter = str.charCodeAt(0);
    let ct = 0;
    while(str.charCodeAt(ct) == indexLetter + ct){
      console.log("Char code: " + str.charCodeAt(ct));
      console.log("CT: " + ct);
      ct++;
    }  

    if(ct == str.length){
      console.log(str.length + " - " + ct);
      return undefined;
    }

    return String.fromCharCode(indexLetter + ct);
  }
  
fearNotLetter("abcdfgh");