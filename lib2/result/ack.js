/* jslint node: true */
"use strict"

/**
 * リザルト Ack
 */

exports.Ack = Ack;

/**
 * 結果コード
 */
Ack.RESULT_CODE = 0x81;

/**
 * データ長バイトサイズ
 */
Ack.DATA_LENGTH_BYTE_SIZE = 1; // byte

/**
 * @param {Result} result
 */
function Ack(result) {
  this.result = result;
}

/**
 * パース可能か
 * @param {Result} result
 */
Ack.canParse = function(result) {
  return result !== null && result.resultCode === Ack.RESULT_CODE;
}
