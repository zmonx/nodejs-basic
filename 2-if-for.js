const a = "a";
if (a === "a") {
  console.log("it 's a");
} else {
  console.log("it's not a");
}

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// let i = 1;
// let sum = 0;
// while (i <= 1000) {
//   //   console.log(i);
//   sum = sum + i;
//   i++;
// }
// console.log(sum);

// let a = 1;
// let b = 1.1;
// let c = "hello";
// let d = true;
// let e = false;
let f = ["a", "b", "c"];
f[0] = "f";
f.push("h");
console.log(f);
let h = [];
let student = {
  id: "620001",
  name: "Dang",
  facuty: "science"
};
console.log(student.name);
student.name = "Khow";
console.log(student.name);
