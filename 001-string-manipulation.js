let str = "example (unwanted thing) example";
// let str = "a(b(c))";
// let str = "(first group) (second group) (third group)";
// var str = "one:two;three";
let str2 = str.split("(").pop().split(")")[0];
console.log(str2);
