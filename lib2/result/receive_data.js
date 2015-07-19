/* jslint node: true */
"use strict"

/**
 * リザルト ReceiveData
 */

exports.ReceiveData = ReceiveData;

/**
 *  結果コード
 */
ReceiveData.RESULT_CODE = 0x83;

/**
 * データ長バイトサイズ
 */
ReceiveData.DATA_LENGTH_BYTE_SIZE = 2; // byte

/**
 * @param {Result} result
 */
function ReceiveData(result) {
  this.result = result;
  this.datas = result.datas;
}

/**
 * パース可能か
 * @param {Result} result
 */
ReceiveData.canParse = function(result) {
  return result !== null && result.resultCode === ReceiveData.RESULT_CODE;
}
