// Standard I/O (Input and Output)

// Using process object and then the stdout's write method we can
// write to the console. You must specify \n for new line.
process.stdout.write("Hello ");

process.stdout.write("World \n\n\n\n");

var questions = [
  "What is your name?",
  "What is your fav hobby?",
  "What is your programming language?"
];

var answers = [];

function ask(i) {
  process.stdout.write(`${questions[i]}`);
  process.stdout.write("  >  ");
}

// listen to user input and when data is entered exec the function which echos the data back.
process.stdin.on('data', function(data) {
  // process.stdout.write('\n' + data.toString().trim() + '\n');
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit(); // exits the program
  }

});

// listen for an exit event and then echo back the answers
process.on('exit', function() {
  process.stdout.write("\n\n\n");
  process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);
  process.stdout.write("\n\n\n");
});

ask(0);


















