const fs = require("fs");
const path = require("path");

// Create Folder
fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder Created...");
});

// Write File - Overwrite
fs.writeFile(path.join(__dirname, "test", "hello.txt"), "Hello", (err) => {
  if (err) throw err;
  console.log("File Created...");
});

// AppendFile - Append to bottom line
fs.appendFile(
  path.join(__dirname, "test", "hello.txt"),
  "Love NodeJS",
  (err) => {
    if (err) throw err;
    console.log("Append File ...");
  }
);

// Read File
fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename File
fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "hello-world.txt"),
  (err, data) => {
    if (err) throw err;
    console.log("File Renamed");
  }
);
