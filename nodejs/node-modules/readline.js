// The readline module handles the input and output for us
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout); // realine should handle input and output

// create object real person
var realPerson = {
  name: '',
  sayings: []
}

// ask user for person and set the name of that person
// ask user for quotes from that person
// prompt user input
// if they type exit close the readline else continue
rl.question("What is the name of a real person? ", function(answer) {
  realPerson.name = answer;
  rl.setPrompt(`What would ${realPerson.name} say? `);
  rl.prompt();
  rl.on('line', function(saying) {

    realPerson.sayings.push(saying.trim());

    if (saying.toLowerCase().trim() === 'exit') {
      rl.close();
    } else {
      rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
      rl.prompt();
    }
  });
});

rl.on('close', function() {
  console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
  process.exit(); // close application
});