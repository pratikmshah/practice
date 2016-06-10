// in node.js the whole application is under the global object
// run node.js apps in terminal via: node filename.js
// the .js is optional

// require allows you to import other nodejs modules
// path module gives tools for working with paths
var path = require("path")

// variables are not in the global object so global.hello is invalid
var hello = "Hello World";

// you can use ES6 (Emacs) functions in your javascript
var justNode = hello.slice(5);

// you can create a string and interpolate a variable using the ${varName}
console.log(`This is how you can put variable${justNode}`);

// use path module to pluck only the filename from
console.log(`Pluck the filename ${path.basename(__filename)}`);

// full directory path
console.log(__dirname);

// full filename path
console.log(__filename);