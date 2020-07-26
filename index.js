const Person = require("./references/person");

const rifqi = new Person("Rifqi", 20);

rifqi.greeting();

console.log(__filename, __dirname);
