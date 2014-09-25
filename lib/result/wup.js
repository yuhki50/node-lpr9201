/* jslint node: true */
"use strict"

/**
 * リザルト Wup
 */

exports.Wup = Wup;

/**
 * 結果コード
 */
Wup.RESULT_CODE = 0x86;

/**
 * データ長バイトサイズ
 */
Wup.DATA_LENGTH_BYTE_SIZE = 1; // byte

/**
 * @param {Result} result
 */
function Wup(result) {
  this.result = result;
}

/**
 * パース可能か
 * @param {Result} result
 */
Wup.canParse = function(result) {
  return result !== null && result.resultCode === Wup.RESULT_CODE;
}
