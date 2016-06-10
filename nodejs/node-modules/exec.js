// Child commands

// able to execute commands in js
var exec = require("child_process").exec;

// will open google in browser
//exec("open http://www.google.com");

// open new terminal instance
//exec("open -a Terminal .");

// list files in directory
exec("ls", function(err, stdout) {
  if(err) {
    throw err;
  }

  console.log("Listing Finished");
  console.log(stdout);
});