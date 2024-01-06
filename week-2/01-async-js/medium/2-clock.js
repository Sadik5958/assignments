// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// - HH:MM::SS (Eg. 13:45:23)

// - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock() {
  let hh = 0;
  let mm = 0;
  let ss = 0;

  setInterval(function () {
    ss++;
    // console.log(ss);
  }, 1000);

  setInterval(function () {
    mm++;
    //console.log(mm);
  }, 60000);

  setInterval(function () {
    hh++;
    //console.log(hh);
  }, 360000);

  console.log(ss + "::" + mm + "::" + hh);
}

clock();
