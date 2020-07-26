const path = require("path");

console.log(__filename);

// Basename
console.log(path.basename(__filename));

// Dirname
console.log(path.dirname(__filename));

// File Extension
console.log(path.extname(__filename));

// Parse FIlename
console.log(path.parse(__filename));
console.log(path.parse(__filename).name);

// Concatenate Path
console.log(path.join(__dirname, "test", "hello.html"));
