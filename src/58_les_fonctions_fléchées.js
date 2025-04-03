// const a = (param, param2) => {
//     console.log(param);
//     console.log(param2);

// };

// a("a", "b");

// const a = (b, c) => ({
//     b,
//     c,
// total: b + c
// });

// console.log(a(1, 2));

// const a = () => {
//   console.log(this);
// };

// a();

// const b = {
//   foo: "bar"
// };

// a.call(b);

const a = {
  foo: "bar",
  fn() {
    const fn2 = () => {
      console.log(this);
    };
    fn2();
  },
};

a.fn();
