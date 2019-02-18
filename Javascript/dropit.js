function dropElements(arr, func) {
    // Drop them elements.
    let i = 0;
    while(i < arr.length){
        if(func(arr[i])){
            break;
        }
        arr[i] = 'piroca';
        i++;
    }

    return arr.filter(x => x !== 'piroca');
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));