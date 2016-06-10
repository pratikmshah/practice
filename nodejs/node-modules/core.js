// import path module from core nodejs library
var path = require("path");
var util = require("util");
var v8 = require('v8');

console.log( path.basename(__filename) );

var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

console.log(dirUploads);  // join directory paths

util.log(dirUploads);     // log with timestamps

util.log(v8.getHeapStatistics()); // return memory usage stats