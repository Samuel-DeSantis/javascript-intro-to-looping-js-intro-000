let i = 0;

function incrementVariable() {return i++}

function forLoop(array) {
  var new_array =[];
  for(let i = 0; i < 25; i++) {
    new_array[i] = (`\"I am ${i} strange loop${i === 0 ? '' : 's'}.\" `);
  }
  return new_array;
}
console.log(new_array)
/*
function whileLoop(n) {
  while(n > 0) {
    console.log(n);
    n--;
  }
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.")
  } while (num === 0 ? pass : incrementVariable() < 10)
}
