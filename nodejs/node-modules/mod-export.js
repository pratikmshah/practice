// Create a module that can be used over and over
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
  this.name = name
}

util.inherits(Person, EventEmitter);

module.exports = Person;  // use module.exports to use the model else where