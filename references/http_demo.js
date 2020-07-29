const http = require("http");

// Create Server
http
  .createServer((req, res) => {
    res.write("hello World");
    res.end();
  })

  .listen(3000, () => console.log("server run on port 3000..."));
