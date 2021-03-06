/* jslint node: true */
"use strict"

var ConnectionConfirmation = exports.ConnectionConfirmation = require('./connection_confirmation').ConnectionConfirmation;
var Ack = exports.Ack = require('./ack').Ack;
var Nack = exports.Nack = require('./nack').Nack;
var ReceiveData = exports.ReceiveData = require('./receive_data').ReceiveData;
var Rssi = exports.Rssi = require('./rssi').Rssi;
var ProfileParameterResult = exports.ProfileParameterResult = require('./profile_parameter_result').ProfileParameterResult;
var Wup = exports.Wup = require('./wup').Wup;
var Ring = exports.Ring = require('./ring').Ring;
var EdScan = exports.EdScan = require('./ed_scan').EdScan;

exports.Result = Result;


/**
 * リザルト
 */

/**
 * データ長バイトサイズ一覧
 */
exports.DATA_LENGTH_BYTE_SIZE_MAP = {};
exports.DATA_LENGTH_BYTE_SIZE_MAP[ConnectionConfirmation.RESULT_CODE] = ConnectionConfirmation.DATA_LENGTH_BYTE_SIZE;
exports.DATA_LENGTH_BYTE_SIZE_MAP[Ack.RESULT_CODE] = Ack.DATA_LENGTH_BYTE_SIZE;
exports.DATA_LENGTH_BYTE_SIZE_MAP[Nack.RESULT_CODE] = Nack.DATA_LENGTH_BYTE_SIZE;
exports.DATA_LENGTH_BYTE_SIZE_MAP[ReceiveData.RESULT_CODE] = ReceiveData.DATA_LENGTH_BYTE_SIZE;
exports.DATA_LENGTH_BYTE_SIZE_MAP[Rssi.RESULT_CODE] = Rssi.DATA_LENGTH_BYTE_SIZE;
exports.DATA_LENGTH_BYTE_SIZE_MAP[ProfileParameterResult.RESULT_CODE] = ProfileParameterResult.DATA_LENGTH_BYTE_SIZE;
exports.DATA_LENGTH_BYTE_SIZE_MAP[Wup.RESULT_CODE] = Wup.DATA_LENGTH_BYTE_SIZE;
exports.DATA_LENGTH_BYTE_SIZE_MAP[Ring.RESULT_CODE] = Ring.DATA_LENGTH_BYTE_SIZE;
exports.DATA_LENGTH_BYTE_SIZE_MAP[EdScan.RESULT_CODE] = EdScan.DATA_LENGTH_BYTE_SIZE;


/**
 * @param {int} resultCode 結果コード
 * @param {int} dataLengthSize データ長バイトサイズ
 * @param {int[]} datas 受信データ
 */
function Result(resultCode, datas) {
  this.resultCode = resultCode;
  this.datas = datas;
}

/**
 * 結果コード
 * @return {int}
 */
Result.prototype.getResultCode = function() {
  return this.resultCode;
}

/**
 * 受信データ
 * @return {int[]} the datas
 */
Result.prototype.getDatas = function() {
  return this.datas;
}
