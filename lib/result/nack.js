/* jslint node: true */
"use strict"

/**
 * リザルト Nack
 */

exports.Nack = Nack;

/**
 * 結果コード
 */
Nack.RESULT_CODE = 0x82;

/**
 * データ長バイトサイズ
 */
Nack.DATA_LENGTH_BYTE_SIZE = 1; // byte

/**
 * 理由コードリスト
 */
Nack.Reason = {
  PARAMETER_ERROR: 0x01,  // パラメータエラー
  SEND_RETRYOUT: 0x02,  // 送信リトライ失敗
  NO_RECEIVE_DATA: 0x03,  // 受信データ無し
  NETWORK_ERROR: 0x04,  // ネットワークエラー
  SEND_LIMITING: 0xFA,  // 送信制限中
  OTHER: 0xFF,  // その他の理由
};

/**
 * @param {Result} result
 */
function Nack(result) {
  this.result = result;
  this.reasonCode = result.datas.length > 0 ? result.datas[0] : Nack.Reason.OTHER;
}

/**
 * パース可能か
 * @param {Result} result
 */
Nack.canParse = function(result) {
  return result !== null && result.resultCode === Nack.RESULT_CODE;
}
