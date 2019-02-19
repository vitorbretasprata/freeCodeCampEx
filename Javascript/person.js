var Person = function(firstAndLast) {
    
    let Name = firstAndLast;
  
    this.getFullName = function() {
      return Name;
    };
  
    this.getFirstName = function() {
      return Name.split(' ')[0];
    };
  
    this.getLastName = function() {
      return Name.split(' ')[1];
    };
  
    this.setFirstName = function(first) {
      return Name = first + " " + Name.split(" ")[1];
    };
  
    this.setLastName = function(last) {
      return Name = Name.split(" ")[0] + " " + last;
    };
  
    this.setFullName = function(firstAndLast) {
      return Name = firstAndLast;
    };
  
    return Name;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();