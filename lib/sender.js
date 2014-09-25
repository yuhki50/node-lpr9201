/* jslint node: true */
"use strict"

/**
 * Module dependencies.
 */
var Command = require('./command');
var ProfileParameter = require('./profile_parameter');

/**
 * Module exports.
 */
module.exports = Sender;

/** private */
var START_BYTE1 = 0x5A;
var START_BYTE2 = 0xA5;

/**
 * データ送信
 */
function Sender() {
}

/**
 * @param {Function} callback
 */
Sender.prototype.setSender = function(callback) {
  this.senderFunc = callback;
};

/**
 * 接続確認 接続の確認用
 */
Sender.prototype.connectionConfirmation = function() {
  // データ長
  // final int length = 0x00;

  // 結果（成功時）
  // final int resultSuccess = 0x00;

  this.send(Command.CONNECTION_CONFIRMATION);
};

/**
 * データ送信 データ送信
 * 
 * @param {Integer} address 送信先（マルチホップ送信時は最終送信先）のアドレス
 * @param {Integer[]} data 送信するデータ 最大長は500オクテット
 * @param {Boolean} ack ACKの有り/無し
 * @param {Boolean} multihop マルチホップ送信の有り/無し
 * @param {Boolean} broadcast ブロードキャスト送信の有り/無し
 */
Sender.prototype.dataTransmission = function(address, data, ack, multihop, broadcast) {
  // 結果（送信成功時ACK）
  // ACK有り送信時は送信先からACK受信時、ACK無し送信時は送信完了時
  // final int resultSuccess = 0x81;

  // 結果（送信失敗時NACK）
  // ACK有り送信時は送信先からACK受信できず、再送リトライアウト時また、その他エラー発生時
  // final int resultFail = 0x82;

  // オプションデータを作成
  var option = 0x00;
  option |= ack ? (0x01 << 0) : 0x00; // ack
  option |= multihop ? (0x01 << 1) : 0x00; // multihop
  option |= broadcast ? (0x01 << 2) : 0x00; // broadcast

  var datas = [
    option, // オプション
    (address >>> 8) & 0xFF, // 送信先アドレス(Hi)
    (address >>> 0) & 0xFF // 送信先アドレス(Low)
  ];

  this.send(Command.DATA_TRANSMISSION, datas.concat(data));
};

/**
 * プロファイルパラメータ設定 各種パラメータ設定
 * 
 * @param {Integer} paramNo パラメータNo
 * @param {Long} value 設定値
 */
Sender.prototype.writeProfileParameter = function(paramNo, value) {
  // 結果（保存成功時）
  // final int resultSuccess = 0x81;

  // 結果（保存失敗時）
  // パラメータエラーや、その他エラー発生時
  // final int resultFail = 0x82;

  if (ProfileParameter.DATA_LENGTH_BYTE_SIZE_MAP[paramNo] === undefined) {
    throw new Error('not found paramNo: ' + paramNo);
  }

  var data = [paramNo];

  // 指定されたデータ長の上位1byteづつ切り出す {high, mid... low}
  var dataLength = ProfileParameter.DATA_LENGTH_BYTE_SIZE_MAP[paramNo];
  for (var i = dataLength - 1; i >= 0; i--) {
    data.push((value >>> (8 * i)) & 0xFF);
  }

  this.send(Command.WRITE_PROFILE_PARAMETER, data);
};

/**
 * プロファイルパラメータ読出し 各種パラメータ設定値読出し
 * 
 * @param {Integer} paramNo パラメータNo
 */
Sender.prototype.readProfileParameter = function(paramNo) {
  // 結果（読出し成功時）
  // 設定パラメータ（0x85）
  // final int resultSuccess = 0x85;

  // 結果（送信失敗時NACK）
  // パラメータエラーや、その他エラー発生時
  // final int resultFail = 0x82;

  this.send(Command.READ_PROFILE_PARAMETER, [paramNo]);
};

/**
 * 受信データ読出し 最後に受信したデータ読出し
 */
Sender.prototype.readReceiveData = function() {
  // 結果（読出し成功時）
  // 受信データ（0x85）
  // final int resultSuccess = 0x83;

  // 結果（送信失敗時NACK）
  // パラメータエラーや、その他エラー発生時
  // final int resultFail = 0x82;

  this.send(Command.READ_RECEIVE_DATA);
};

/**
 * RSSIデータ読出し 最後に受信したデータ読出し
 */
Sender.prototype.readRssiData = function() {
  // 結果（読出し成功時）
  // RSSI
  // final int resultSuccess = 0x84;

  // 結果（読出し失敗時NACK）
  // パラメータエラーや、その他エラー発生時
  // final int resultFail = 0x82;

  this.send(Command.READ_RSSI_DATA);
};

/**
 * プロファイル保存 各種設定値のプロファイル保存
 * 
 * @param {Integer} profileNo 保存するプロファイル番号 0 ~ 1
 */
Sender.prototype.writeProfile = function(profileNo) {
  // 結果（保存成功時）
  // final int resultSuccess = 0x81;

  // 結果（保存失敗時）
  // パラメータエラーや、その他エラー発生時
  // final int resultFail = 0x82;

  this.send(Command.WRITE_PROFILE, [profileNo]);
};

/**
 * プロファイル読出し 保存しているプロファイルの読出し
 * 
 * @param {Integer} profileNo 読み出すプロファイル番号 0 ~ 1
 */
Sender.prototype.readProfile = function(profileNo) {
  // 結果（読出し成功時）
  // final int resultSuccess = 0x81;

  // 結果（読出し失敗時）
  // パラメータエラーや、その他エラー発生時
  // final int resultFail = 0x82;

  this.send(Command.READ_PROFILE, [profileNo]);
};

/**
 * プロファイルパラメータ初期化 各種設定値を工場出荷状態に戻します
 */
Sender.prototype.resetProfile = function() {
  // 結果（成功時）
  // final int resultSuccess = 0x81;

  // 結果（失敗時）
  // パラメータエラーや、その他エラー発生時
  // final int resultFail = 0x82;

  this.send(Command.RESET_PROFILE);
};

/**
 * Sleep設定 モジュールをSleep状態にします
 */
Sender.prototype.sleep = function() {
  // 結果（成功時）
  // なし（Sleep状態に入ります）
  // WakeUp信号で復帰後、WUPリザルトを返します
  // すでにSleep解除後でもWakeUp信号入力でWUPリザルトを返します

  // 結果（失敗時）
  // パラメータエラーや、その他エラー発生時
  // final int resultFail = 0x82;

  this.send(Command.SLEEP);
};

/**
 * 指定時間Sleep設定 モジュールを指定時間Sleep状態にします。解除後、指定された時間受信を行います。
 * 
 * @param {Integer} sleepTime Sleep状態に設定する時間（単位秒） 1 ~ 65535秒
 * @param {Integer} receiveTime Sleep解除後に受信動作を行う時間（単位ミリ秒） 1 ~ 255ミリ秒
 */
Sender.prototype.sleepInterval = function(sleepTime, receiveTime) {
  // 結果（成功時）
  // なし（Sleep状態に入ります）
  // WakeUp信号で復帰後、WUPリザルトを返します
  // すでにSleep解除後でもWakeUp信号入力でWUPリザルトを返します

  // 結果（失敗時）
  // パラメータエラーや、その他エラー発生時
  // final int resultFail = 0x82;

  this.send(Command.SLEEP_INTERVAL, [(sleepTime >>> 8) & 0xFF, (sleepTime >>> 0) & 0xFF, receiveTime]);
};

/**
 * 起動要求 無線通信を可能にします
 */
Sender.prototype.activateRequest = function() {
  // 結果（成功時）
  // final int resultSuccess = 0x81;

  // 結果（失敗時）
  // パラメータエラーや、その他エラー発生時
  // final int resultFail = 0x82;

  this.send(Command.ACTIVATE_REQUEST);
};

/**
 * EDスキャン 全チャンネルのRSSI値を取得します
 */
Sender.prototype.edScan = function() {
  // 結果（成功時）
  // EDスキャン結果
  // final int resultSuccess = 0x8C;

  // 結果（失敗時）
  // パラメータエラーや、その他エラー発生時
  // final int resultFail = 0x82;

  this.send(Command.ED_SCAN);
};

/**
 * リセット ソフトウェアリセットの実施
 */
Sender.prototype.reset = function() {
  // 結果（成功時）
  // なし（リセット実施）

  // 結果（失敗時）
  // パラメータエラーや、その他エラー発生時
  // final int resultFail = 0x82;

  this.send(Command.RESET);
};

/**
 * パケットを送信
 * 
 * @param {Integer} command
 * @param {Integer[]} data (optional)
 * @api private
 */
Sender.prototype.send = function(command, data) {
  data = Array.isArray(data) ? data : [];

  var packet = [
    // start
    START_BYTE1,
    START_BYTE2,

    // command
    command
  ];

  // data length
  if (Command.DATA_LENGTH_MAP[command] !== undefined) {
    // 指定されたデータ長の上位1byteづつ切り出す {high, mid... low}
    for (var i = Command.DATA_LENGTH_MAP[command] - 1; i >= 0; i--) {
      packet.push((data.length >>> (8 * i)) & 0xFF);
    }
  } else {
    throw new Error('IllegalStateException');
  }

  // data
  packet = packet.concat(data);

  // checksum
  var checksum = 0;
  for (var i = 0; i < packet.length; i++) {
    checksum ^= packet[i];
  }
  packet.push(checksum);

  if (this.senderFunc !== undefined) {
    this.senderFunc(packet);
  }
};
