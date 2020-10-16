let ip1 = "10.0.0.0";
let ip2 = "10.0.0.50";

let hasil1 = ip1.split(".");
let h11 = "";
hasil1.forEach((h1) => {
  h11 += h1;
});
let h111 = parseInt(h11);
console.log(h111);
// 2
let hasil2 = ip2.split(".");
let h22 = "";
hasil2.forEach((h2) => {
  h22 += h2;
});
let h222 = parseInt(h22);
console.log(h222);
