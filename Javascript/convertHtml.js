function convertHTML(str) {
    return str.replace(/[&<>"']/g, function($0) {
        return "&" + {"&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"apos"}[$0] + ";";
    });
}
  
console.log(convertHTML("Schindler's List"));