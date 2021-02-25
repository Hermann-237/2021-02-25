const http = require("http");
const fs = require("fs");
const port = 3000;
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  if (request.url === "/keyboard" && request.method === "GET") {
    fs.readFile("./keyboard.txt", "utf-8", (err, data) => {
      if (err) throw err;
      response.write(data);
      response.end();
    });
  } else {
    response.write(
      `<p>This page is not found, make sure that you are using this url:localhost:3000/keyboard click <a href="http://localhost:3000/keyboard"> hier<a> to solve the problem</p>`
    );
    response.end();
  }
});
server.listen(port, (err) => {
  if (err) console.log(err);
  console.log("the server is running");
});
