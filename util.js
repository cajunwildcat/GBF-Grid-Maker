function truncToDigit(num, digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
    m = num.toString().match(re);
    return m ? parseFloat(m[1]) : num.valueOf();
}

function decimalToBase62(num) {
    const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (num === 0) return charset[0];
    
    let result = "";
    while (num > 0) {
        result = charset[num % 62] + result;
        num = Math.floor(num / 62);
    }
    
    return result;
}

function base62ToDecimal(str) {
    const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result = result * 62 + charset.indexOf(str[i]);
    }
    
    return result;
}

function getSetLocalStorage(key, value = null) {
    if (value === null) return JSON.parse(localStorage.getItem(key));
    localStorage.setItem(key, JSON.stringify(value));
}