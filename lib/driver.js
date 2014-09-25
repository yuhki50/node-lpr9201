/* jslint node: true */
"use strict"

/**
 * Module dependencies.
 */
var Parser = require('./parser');
var Sender = require('./sender');
var SerialPort = require('serialport').SerialPort;
var util = require('util');


/**
 * Module exports.
 */
module.exports = Driver;

/** public */
module.exports.VERSION = require('../package.json').version;

/**
 *
 */
function Driver(path, options, openImmediately, callback) {
  var parser = new Parser();

  options.parser = function(emitter, buffer) {
    for (var i = 0, il = buffer.length; i < il; i++) {
      var result = parser.parse(buffer[i]);
      if (result !== null) {
        emitter.emit('data', result);
      }
    }
  };

  SerialPort.call(this, path, options, openImmediately, callback);

  this.send = new Sender();

  var self = this;
  this.send.setSender(function(data) {
    self.write(new Buffer(data));
  });
}

util.inherits(Driver, SerialPort);
