/* jslint node: true */
"use strict"

/**
 * リザルト ConnectionConfirmation
 */

exports.ConnectionConfirmation = ConnectionConfirmation;

/**
 * 結果コード
 */
ConnectionConfirmation.RESULT_CODE = 0x00;

/**
 * データ長バイトサイズ
 */
ConnectionConfirmation.DATA_LENGTH_BYTE_SIZE = 1; // byte

/**
 * @param {Result} result
 */
function ConnectionConfirmation(result) {
  this.result = result;
}

/**
 * パース可能か
 * @param {Result} result
 */
ConnectionConfirmation.canParse = function(result) {
  return result !== null && result.resultCode === ConnectionConfirmation.RESULT_CODE;
}
