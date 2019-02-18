function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let newArr = arr1.slice(0, arr1.length);
    for(let i = 0; i < arr1.length; i++){
        arr2.splice(n+i, 0 , newArr[i]);
    }
    console.log(arr2);
    return arr2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);