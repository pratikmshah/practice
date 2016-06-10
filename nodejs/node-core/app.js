/* SAMPLE TERMINAL ARGUMENTS
nodejs [nodejs]:> node app --user George --greeting "Good"
[ '/usr/local/Cellar/node/5.4.0/bin/node',
  '/Users/Pratik/Documents/Pratik/Work/practice/nodejs/app',
  '--user',
  'George',
  '--greeting',
  'Good' ]
*/

// process.argv will display all the initial arguments inputed in the command line
console.log(process.argv);

// create a function that will look to see if any args were passed and get the next element (message)
function grab(flag) {
  var index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index + 1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if (!user || !greeting) {
  console.log("You Blew it!");
} else {
  console.log(`Welcome ${user}, ${greeting}`);
}

// This is good to make our app specify certain ports or files to be used in the beginning