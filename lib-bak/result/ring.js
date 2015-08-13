/* jslint node: true */
"use strict"

/**
 * リザルト Ring
 */

exports.Ring = Ring;

/**
 * 結果コード
 */
Ring.RESULT_CODE = 0x87;

/**
 * データ長バイトサイズ
 */
Ring.DATA_LENGTH_BYTE_SIZE = 1; // byte

/**
 * @param {Result} result
 */
function Ring(result) {
  this.result = result;
}

/**
 * パース可能か
 * @param {Result} result
 */
Ring.canParse = function(result) {
  return result !== null && result.resultCode === Ring.RESULT_CODE;
}
