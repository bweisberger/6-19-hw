for (let i = 1; i <= 20; i++) {
  console.log(i);
}

for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}


const catTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
for (let i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    //log a variable in catTalk using Math.floor(Math.random()*3)
    console.log(catTalk[Math.floor(Math.random()*3)]);
  } else {
    console.log("Love me, pet me! HSSSSS!");
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz") ;
  }
  else {
    console.log(i);
  }
}
