/* jslint node: true */
"use strict"

/**
 * リザルト ProfileParameter
 */

exports.ProfileParameterResult = ProfileParameterResult;

/**
 * 結果コード
 */
ProfileParameterResult.RESULT_CODE = 0x85;

/**
 * データ長バイトサイズ
 */
ProfileParameterResult.DATA_LENGTH_BYTE_SIZE = 1; // byte

/**
 * @param {Result} result
 */
function ProfileParameterResult(result) {
  this.result = result;

  if (result.datas.length < 8) {
    for (var i = 0, il = result.datas.length; i < il; i++) {
      this.value |= result.datas[i] << (8 * (result.datas.length - i - 1));
    }

    this.valueHigh = 0;
    this.valueLow = this.value;
  } else {
    // high
    for (var i = 0, il = 4; i < il; i++) {
      this.valueHigh |= result.datas[i] << (8 * (result.datas.length - i - 1));
    }

    // low
    for (var i = 4, il = result.datas.length; i < il; i++) {
      this.valueLow |= result.datas[i] << (8 * (result.datas.length - i - 1));
    }
  }
}

/**
 * パース可能か
 * @param {Result} result
 */
ProfileParameterResult.canParse = function(result) {
  return result !== null && result.resultCode === ProfileParameterResult.RESULT_CODE;
}
