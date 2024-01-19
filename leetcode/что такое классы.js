function Foo(inParam) {
    this.a = 1;
    this.b = inParam;
}

const a = new Foo(45);

// console.log(a instanceof Foo)
// console.log(a.__proto__ === Foo.prototype)
const newProto = {
    v: 10,
};

// a.__proto__.constructor = Date;
// const b = new a.__proto__.constructor();
a.__proto__ = newProto;

// console.log(a instanceof Foo)
// console.log(a instanceof newProto)
// console.log(a.v)
// var bb
for (var bb = 1; bb < 10; bb++) {
    const bb2 = bb;
    setTimeout(() => console.log(bb2), 1000);
}

// class User {
//     constructor(name) { this.name = name; }
//     sayHi() { alert(this.name); }
//   }

//   // доказательство: User - это функция
//   alert(typeof User); // function
