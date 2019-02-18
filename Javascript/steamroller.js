function steamrollArray(arr) {
    // I'm a steamroller, baby
    let aux = []
    for(let i = 0; i < arr.length; i++) {
        clearArray(arr[i]);
    }
  
    function clearArray(interArr){
      if(!Array.isArray(interArr)){
        aux.push(interArr);  
        
      } else {
        for(let x in interArr){
            clearArray(interArr[x]);
        }
      }
    }
  
    return aux;
}
  
console.log(steamrollArray([1, [2], [3, [[4]]]])); 