// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  data = data.replace(/\s+/g, " ");
  fs.writeFile("data.txt", data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(data);
});
