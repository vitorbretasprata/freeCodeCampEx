function uniteUnique(arr) {

    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    arr = [...arguments];
    newArr = []
    arr.map(x => {
        for(let i = 0; i < x.length; i++) {
            newArr.push(x[i]);
        }
    });
    return newArr.filter( onlyUnique );
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));



/* 
        Alternative

        
function uniteUnique(...arrays) {

  
  const flatArray = [].concat(...arrays);

  
  return [...new Set(flatArray)];
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


*/