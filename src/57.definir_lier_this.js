// const a = {
//     foo: "not bar"
// };

const b = {
  name: "Jean",
  lastName: "Louis",
  // fn() {
  //     function c(){
  //         console.log(this);
  //     }
  //     c.call(this);
  // }
};

function bonjour(lang) {
  if (lang === "fr") {
    console.log(`bonjour:  ${this.name + this.lastName}`);
  } else {
    console.log(`hello:  ${this.name + this.lastName}`);
  }
}

const c = bonjour.bind(b);
c("fr");

// bonjour.call(b, "en");

// function a() {}

// a.foo = "bar"

// console.log(a.foo);
