const build = require("./factory");
const fn = build();
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  const result = fn(line);

  if (result) {
    console.log(result);
  }
});
