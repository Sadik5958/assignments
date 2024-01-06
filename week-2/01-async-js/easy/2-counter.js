// Counter without setInterval.
// without using setInterval, try to code a counter in Javascript.
// There is a hint at the bottom of the file if you get stuck.

// Hint :- setTimeout

function counter() {
  let counter = 0;

  function increment() {
    counter++;
    console.log(counter);
    setTimeout(increment, 1000);
  }

  setTimeout(increment, 1000);
}

counter();
