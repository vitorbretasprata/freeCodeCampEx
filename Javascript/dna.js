function pairElement(str) {
    let DNA = str.split('');
    return DNA.map(x => {        
        switch(x) {
            case 'T':
                return [x , "A"]
            case 'A':
                return [x , "T"]
            case 'G':            
                return [x , "C"]
            case 'C':
                return [x , "G"]
            default: 
                x = x
                break;
        }    
    });
}
  
console.log(pairElement("GCG"));