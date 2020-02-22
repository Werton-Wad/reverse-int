module.exports = function reverse (n) {
    let str = String(n);
    if (str[0] === '-') return str.substring(1, str[str.length]).split('').reverse().join('');
    return str.split('').reverse().join('');
}
