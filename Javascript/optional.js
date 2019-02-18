function addTogether() {
    
    if(validateNum(...arguments)) {
        return undefined;
    }

    if(arguments.length != 2) {
        let x = arguments[0];
        return function(y){

            return x + y;
        }
    }

    return arguments[0] + arguments[1];
}

function validateNum(){
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] !== parseInt(arguments[i], 10)) {
            return false;
        }
    }    
    return true;
}


  
console.log(addTogether('dad')(3));