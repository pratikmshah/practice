var Person = require("Person");

var ben = new Person("Pratik Shah");

ben.on('speak', function(said) {
  console.log(`${this.name}: ${said}`);
});

ben.emit('speak', "You may delay, but time will not.");