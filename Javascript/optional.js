function addTogether() {    

    if(!validateNum(...arguments)){
        return undefined;
    }

    if(arguments.length == 2){
        return arguments[0] + arguments[1];
    } else {
        let x = arguments[0];
        return function (y) {
            if(!validateNum(y)){
                return undefined;
            }
            return x + y;
        }
    }
    
}

function validateNum(){
    for(let i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] !== 'number') {
            return false;
        }
    }    
    return true;
}

console.log(addTogether("http://bit.ly/IqT6zt"));