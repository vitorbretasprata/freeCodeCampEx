function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }

    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");

    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }

 return strArr.join("")+"ay";
}

translatePigLatin("consonant");