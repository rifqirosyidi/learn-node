const url = require("url");

const myUrl = new URL("https://website.com:8000/hello.html?id=100&stat=active");

console.log(myUrl.href);
console.log(myUrl.toString());

// host with port
console.log(myUrl.host);

console.log(myUrl.hostname);

console.log(myUrl.pathname);

console.log(myUrl.search);
console.log(myUrl.searchParams);
