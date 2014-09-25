/* jslint node: true */
"use strict"

/**
 * コマンド一覧
 */

/**
 * 接続確認 接続の確認用
 */
exports.CONNECTION_CONFIRMATION = 0x00;

/**
 * データ送信 データ送信
 */
exports.DATA_TRANSMISSION = 0x01;

/**
 * プロファイルパラメータ設定 各種パラメータ設定
 */
exports.WRITE_PROFILE_PARAMETER = 0x02;

/**
 * プロファイルパラメータ読出し 各種パラメータ設定値読出し
 */
exports.READ_PROFILE_PARAMETER = 0x03;

/**
 * 受信データ読出し 最後に受信したデータ読出し
 */
exports.READ_RECEIVE_DATA = 0x04;

/**
 * RSSIデータ読出し 最後に受信したデータ読出し
 */
exports.READ_RSSI_DATA = 0x05;

/**
 * プロファイル保存 各種設定値のプロファイル保存
 */
exports.WRITE_PROFILE = 0x06;

/**
 * プロファイル読出し 保存しているプロファイルの読出し
 */
exports.READ_PROFILE = 0x07;

/**
 * プロファイルパラメータ初期化 各種設定値を工場出荷状態に戻します
 */
exports.RESET_PROFILE = 0x08;

/**
 * Sleep設定 モジュールをSleep状態にします
 */
exports.SLEEP = 0x09;

/**
 * 指定時間Sleep設定 モジュールを指定時間Sleep状態にします。解除後、指定された時間受信を行います。
 */
exports.SLEEP_INTERVAL = 0x0A;

/**
 * 起動要求 無線通信を可能にします
 */
exports.ACTIVATE_REQUEST = 0x0B;

/**
 * EDスキャン 全チャンネルのRSSI値を取得します
 */
exports.ED_SCAN = 0x0C;

/**
 * リセット ソフトウェアリセットの実施
 */
exports.RESET = 0x7F;

/**
 * 各コマンドのデータ長をまとめたマップ
 */
exports.DATA_LENGTH_MAP = {};
exports.DATA_LENGTH_MAP[exports.CONNECTION_CONFIRMATION] = 1;
exports.DATA_LENGTH_MAP[exports.DATA_TRANSMISSION] = 2;
exports.DATA_LENGTH_MAP[exports.WRITE_PROFILE_PARAMETER] = 1;
exports.DATA_LENGTH_MAP[exports.READ_PROFILE_PARAMETER] = 1;
exports.DATA_LENGTH_MAP[exports.READ_RECEIVE_DATA] = 1;
exports.DATA_LENGTH_MAP[exports.READ_RSSI_DATA] = 1;
exports.DATA_LENGTH_MAP[exports.WRITE_PROFILE] = 1;
exports.DATA_LENGTH_MAP[exports.READ_PROFILE] = 1;
exports.DATA_LENGTH_MAP[exports.RESET_PROFILE] = 1;
exports.DATA_LENGTH_MAP[exports.SLEEP] = 1;
exports.DATA_LENGTH_MAP[exports.SLEEP_INTERVAL] = 1;
exports.DATA_LENGTH_MAP[exports.ACTIVATE_REQUEST] = 1;
exports.DATA_LENGTH_MAP[exports.ED_SCAN] = 1;
exports.DATA_LENGTH_MAP[exports.RESET] = 1;
