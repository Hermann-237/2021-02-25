const child_process = require("child_process");
child_process.exec(
  "echo bonjour hermann comment tu vas",
  function (error, result) {
    console.log("dit moi bonjour:", result);
  }
);
console.log("-end-of-the-program-");
