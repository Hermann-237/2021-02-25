const express = require("express");
// console.log(server);
let server = express();
server.get("/", function (req, res) {
  res.send("Bonjour hermann");
});
server.listen(5000);
