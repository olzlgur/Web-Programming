var fs = require("fs");

console.log("Going to oget file info!");
fs.stat('input.txt', function (err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log(stats);
  console.log("Got file info successfully!");

  console.log("isFile? " + stats.isFile() );
  console.log("isDirectiory ? " + stats.isDirectory());
})