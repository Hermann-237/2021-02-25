let add = function (a, b) {
  return `la somme de ces deux nombres est ${a + b}`;
};

let sub = function (a, b) {
  return `la soustraction des  deux nombres est ${a - b}`;
};
let mult = function (a, b) {
  return `la multiplication de ces deux nombres est ${a * b}`;
};
module.exports = { add, sub, mult };

/* export { add, sub, mult }; */
/* 
module.exports.add = add;
module.exports.sub = sub;
module.exports.mult = mult; */
