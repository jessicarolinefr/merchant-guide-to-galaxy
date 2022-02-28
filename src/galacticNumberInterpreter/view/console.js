const build = require("../application/interpreterFactory");
const fn = build();
const readline = require("readline");

const rl = readline.createInterface({
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
