/* jslint node: true */
"use strict"

/**
 * Module dependencies.
 */
var Result = require('./result');

/**
 * Module exports.
 */
module.exports = Parser;

/** private */
var START_BYTE1 = 0x5A;
var START_BYTE2 = 0xA5;
var START_BYTE_LENGTH = 2;

var COMMAND_BYTE_LENGTH = 1;
var CHECKSUM_BYTE_LENGTH = 1;

var RECEIVE_DATA_BUFFER_LENGTH = 512;

/**
 * データパース
 * @api public
 */
function Parser() {
  this.receiveData = new Array(RECEIVE_DATA_BUFFER_LENGTH);
  this.receiveDataLength = 0;
  this.isStart = false;
}

/**
 * パケットを受信
 * @param {Integer} data
 * @return {Result}
 */
Parser.prototype.parse = function(data) {
  var result = null;

  // header check
  if (this.receiveData[0] == START_BYTE1 && data == START_BYTE2 && !this.isStart) {
    this.receiveDataLength = 1;
    this.isStart = true;
  }

  this.receiveData[this.receiveDataLength] = data;

  if (this.isStart) {
    this.receiveDataLength++;

    if (this.receiveDataLength > RECEIVE_DATA_BUFFER_LENGTH) {
      this.receiveDataLength = 0;
      this.isStart = false;
    }

    if (this.receiveDataLength > START_BYTE_LENGTH) {
      var command = this.receiveData[2];

      if (Result.DATA_LENGTH_BYTE_SIZE_MAP[command] !== undefined) {
        var dataLengthByteSize = Result.DATA_LENGTH_BYTE_SIZE_MAP[command];

        if (this.receiveDataLength > START_BYTE_LENGTH + dataLengthByteSize) {
          var dataLength = 0;
          for (var i = 0; i < dataLengthByteSize; i++) {
            var byteData = this.receiveData[START_BYTE_LENGTH + COMMAND_BYTE_LENGTH + i];
            var shiftCount = 8 * (dataLengthByteSize - i - 1);
            dataLength |= byteData << shiftCount;
          }

          if (this.receiveDataLength >= START_BYTE_LENGTH + COMMAND_BYTE_LENGTH + dataLengthByteSize + dataLength + CHECKSUM_BYTE_LENGTH) {
            // calculate checksum
            var checksum = 0;
            for (var i = 0; i < this.receiveDataLength - 1; i++) {  // checksumは除く
              checksum ^= this.receiveData[i];
            }

            // check checksum
            if (checksum == this.receiveData[this.receiveDataLength - 1]) {
              result = new Result.Result(command, this.receiveData.slice(START_BYTE_LENGTH + COMMAND_BYTE_LENGTH + dataLengthByteSize, this.receiveDataLength - CHECKSUM_BYTE_LENGTH));
            }

            this.receiveDataLength = 0;
            this.isStart = false;
          }
        }
      } else {
        this.receiveDataLength = 0;
        this.isStart = false;
      }
    }
  }

  return result;
}
