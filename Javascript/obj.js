function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    arr = collection.filter(x => x.hasOwnProperty(Object.keys(source)))

    // Only change code above this line

    return arr.filter(y => Object.values(y).includes(Object.values(source)));
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", re: null },
  { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));