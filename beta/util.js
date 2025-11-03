function truncToDigit(num, digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
    m = num.toString().match(re);
    return m ? parseFloat(m[1]) : num.valueOf();
}