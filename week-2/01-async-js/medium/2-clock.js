// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// - HH:MM::SS (Eg. 13:45:23)

// - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock() {
  setInterval(function () {
    const now = new Date();

    let HH = now.getHours();
    let MM = now.getMinutes();
    let SS = now.getSeconds();

    // Format HH, MM, SS to have leading zeros if needed
    HH = HH < 10 ? "0" + HH : HH;
    MM = MM < 10 ? "0" + MM : MM;
    SS = SS < 10 ? "0" + SS : SS;

    // Display time in HH:MM:SS format
    const time24Format = `${HH}:${MM}:${SS}`;

    // Convert hours to 12-hour format and determine AM/PM
    const ampm = HH < 12 ? "AM" : "PM";
    HH = HH % 12 || 12; // Convert 0 to 12 for 12-hour format

    // Display time in HH:MM:SS AM/PM format
    const time12Format = `${HH}:${MM}:${SS} ${ampm}`;

    console.log("24-Hour Format:", time24Format);
    console.log("12-Hour Format:", time12Format);
  }, 1000);
}

clock();
