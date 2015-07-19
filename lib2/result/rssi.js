/* jslint node: true */
"use strict"

/**
 * リザルト Rssi
 */

exports.Rssi = Rssi;

/**
 * 結果コード
 */
Rssi.RESULT_CODE = 0x84;

/**
 * データ長バイトサイズ
 */
Rssi.DATA_LENGTH_BYTE_SIZE = 1; // byte


/**
 * @param {Result} result
 */
function Rssi(result) {
  this.result = result;
  this.value = result.datas.length > 0 ? result.datas[0] : 0;
}

/**
 * パース可能か
 * @param {Result} result
 */
Rssi.canParse = function(result) {
  return result !== null && result.resultCode === Rssi.RESULT_CODE;
}
