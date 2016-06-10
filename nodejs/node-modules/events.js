// Event Object allows you to create custom events to be handled asynchronously

// var events = require('events');

// // create a new event emitter object
// var emitter = new events.EventEmitter();

// emitter.on('customEvent', function(message, status) {
//   console.log(`${status}: ${message}`);
// });

// // run customEvent and pass message and status
// emitter.emit('customEvent', "Hello World", "200");

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
  this.name = name
}

// person object inherits all of EventEmitters functionality
util.inherits(Person, EventEmitter);

var ben = new Person("Pratik Shah");

ben.on('speak', function(said) {
  console.log(`${this.name}: ${said}`);
});

ben.emit('speak', "You may delay, but time will not.");