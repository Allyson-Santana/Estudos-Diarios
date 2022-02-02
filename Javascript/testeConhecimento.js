const quotos = 'aAc';
console.log(quotos.indexOf('b' && 'c'));

const hasUpper = (str) => (/[A-Z]/).test(str);
const hasLower = (str) => (/[a-z]/).test(str);
const hasNumber = (str) =>(/[0-9]/).test(str);

console.log(hasUpper('vc'));
console.log(hasLower('VC'));
console.log(hasNumber('abjnb'));