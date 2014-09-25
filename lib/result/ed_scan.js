/* jslint node: true */
"use strict"

/**
 * リザルト EdScan
 */

exports.EdScan = EdScan;

/**
 * 結果コード
 */
EdScan.RESULT_CODE = 0x8C;

/**
 * データ長バイトサイズ
 */
EdScan.DATA_LENGTH_BYTE_SIZE = 1; // byte


/**
 * Rate1のチャンネル数
 */
var RATE1_LENGTH = 0x1D;

/**
 * Rate2のチャンネル数
 */
var RATE2_LENGTH = 0x0E;

/**
 * 開始チャンネル番号
 */
var START_CH = 33;


/**
 * @param {Result} result
 */
function EdScan(result) {
  this.result = result;
  this.value = {};

  if (result.datas.length === RATE1_LENGTH) {
    for (var i = 0; i < result.datas.length; i++) {
      this.value[START_CH + i] = result.datas[i];
    }
  } else if (result.datas.length === RATE2_LENGTH) {
    var offset = 0;
    for (var i = 0; i < result.datas.length; i++) {
      this.value[START_CH + offset + i] = result.datas[i];
      this.value[START_CH + offset + i + 1] = result.datas[i];
      offset++;
    }
  }
}

/**
 * パース可能か
 * @param {Result} result
 */
EdScan.canParse = function(result) {
  return result !== null && result.resultCode === EdScan.RESULT_CODE;
}
