// const c = 'eric'
// const d = 'sure'
// obj = { a: 1, b: 3, [c]: 4, d: 5 }

// console.log(obj);
// console.log(obj.a);
// console.log(obj['a']);
// console.log(obj[c]);
// console.log(obj['c']);
// console.log(obj.d);

const a = {
  path: "/mypath",
  query: {
    module: 666,
  },
};
const b = {
  ...a,
  query: { module: "777ee" },
};
const c = {
  ...b,
  query: { module: "888dd" },
};

console.log(b);
console.log(c);
