// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }
//
// for (let i = 0; i <= 200; i += 2) {
//   console.log(i);
// }
//
//
// const catTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     //log a variable in catTalk using Math.floor(Math.random()*3)
//     console.log(catTalk[Math.floor(Math.random()*3)]);
//   } else {
//     console.log("Love me, pet me! HSSSSS!");
//   }
// }
//
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   }
//   else if (i % 3 === 0) {
//     console.log("Fizz");
//   }
//   else if (i % 5 === 0) {
//     console.log("Buzz") ;
//   }
//   else {
//     console.log(i);
//   }
// }

// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];
//
// kenny.shift();
// kenny.unshift("Gameboy");
// console.log(kenny);
//
// ++jimClark[1];
// console.log(jimClark[1]);
//
// ryan[2] = "Denver";
// console.log(ryan[2]);
//
// reuben.pop();
// reuben.push("Chicago");
// console.log(reuben);
//
// jimHaff.pop();
// jimHaff.push("Chicago", "New Orleans", "Milan");
// console.log(jimHaff);
//
// jimHaff.splice(-3, 1)
// console.log(jimHaff);

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for (let i = 0; i < ninjaTurtles.length; i++) {
//   console.log(ninjaTurtles[i].toUpperCase());
// }
//
// let camelName = ""
// for (let i = 0; i < ninjaTurtles.length; i++) {
//   let name = ninjaTurtles[i];
//   for (let j = 0; j < name.length; j++) {
//     if (j%2 === 0) {
//       camelName += name[j].toUpperCase();
//     }
//     else {
//       camelName += name[j].toLowerCase();
//     }
//   }
//   console.log(camelName);
//   camelName = "";
// }
