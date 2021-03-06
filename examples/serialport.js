/* jslint node: true */
"use strict"

//var LPR9201 = require('lpr9201');
var LPR9201 = require('../lib');
var Result = LPR9201.Result;
var lpr9201Driver = new LPR9201.Driver('/dev/tty.usbserial', {baudrate: 9600}, false);

lpr9201Driver.on('open', function() {
  console.log('open');
  lpr9201Driver.send.connectionConfirmation();
});

lpr9201Driver.on('close', function() {
  console.log('close');
});

lpr9201Driver.on('error', function(error) {
  console.log('error', error);
});

lpr9201Driver.on('data', function(data) {
  if (Result.Ack.canParse(data)) {
    console.log('Ack');

  } else if (Result.ConnectionConfirmation.canParse(data)) {
    console.log('ConnectionConfirmation');
    lpr9201Driver.send.activateRequest();

  } else if (Result.EdScan.canParse(data)) {
    var edScan = new Result.EdScan(data);
    console.log('EdScan', edScan.value);

  } else if (Result.Nack.canParse(data)) {
    var nack = new Result.Nack(data);
    console.log('Nack', nack.reasonCode);

  } else if (Result.ProfileParameterResult.canParse(data)) {
    var profileParameterResult = new Result.ProfileParameterResult(data);
    console.log('ProfileParameterResult', profileParameterResult.value);

  } else if (Result.ReceiveData.canParse(data)) {
    var receiveData = new Result.ReceiveData(data);
    console.log('ReceiveData', receiveData.datas);

  } else if (Result.Ring.canParse(data)) {
    console.log('Ring');
    lpr9201Driver.send.readReceiveData();

  } else if (Result.Rssi.canParse(data)) {
    var rssi = new Result.Rssi(data);
    console.log('Rssi', rssi.value);

  } else if (Result.Wup.canParse(data)) {
    console.log('Wup');
  }
});

lpr9201Driver.open();
