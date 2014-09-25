/* jslint node: true */
"use strict"

/**
 * プロファイルパラメーターのパラメータ番号管理
 */

/**
 * PAN ID
 * PAN IDを設定
 * size 2
 * 0x0001 ~ 0x3FFF
 * default 0x0001
 */
exports.PAN_ID = 0x01;

/**
 * ノードアドレス
 * 自ノードアドレスを設定
 * size 2
 * 0x0000 ~ 0xFFFD
 * default 0x0000
 */
exports.NODE_ADDRESS = 0x02;

/**
 * チャンネル
 * 送受信するチャンネルを設定
 * size 1
 * 0, 33 ~ 61
 * default 0
 */
exports.CHANNEL = 0x03;

/**
 * 送信出力
 * 送信する出力を設定 0: 1mW, 1: 10mW, 2: 20mW
 * size 1
 * 0 ~ 2
 * default 2
 */
exports.TRANSMISSION_POWER = 0x04;

/**
 * 転送レート
 * 転送レートを設定 1: 50kbps, 2: 100kbps
 * size 1
 * 1 ~ 2
 * default 1
 */
exports.TRANSFER_RATE = 0x05;

/**
 * 再送回数
 * 送信失敗時に再度送信する回数
 * size 1
 * 0 ~ 5
 * default 1
 */
exports.RETRY_COUNT = 0x06;

/**
 * ボーレート
 * UARTのボーレート設定 0: 9600bps, 1: 19200bps, 2: 38400bps, 3: 57600bps, 4: 115200bps, 5: 230400bps
 * size 1
 * 0 ~ 5
 * default 0
 */
exports.BAUDRATE = 0x08;

/**
 * フロー制御
 * UARTのフロー制御設定 0: フロー制御無し, 1: ハードウェアフロー
 * size 1
 * 0 ~ 1
 * default 0
 */
exports.FLOW_CONTROL = 0x09;

/**
 * ブロードキャスト受信
 * ブロードキャスト受信設定 0: ブロードキャスト受信しない, 1: ブロードキャスト受信許可
 * size 1
 * 0 ~ 1
 * default 0
 */
exports.RECEIVE_BROADCAST = 0x0A;

/**
 * マルチホップenable
 * 0: マルチホップ送信しない, 1: マルチホップ送信許可
 * size 1
 * 0 ~ 1
 * default 0
 */
exports.MULTIHOP_ENABLE = 0x0B;

/**
 * マルチホップ送信先数
 * マルチホップ送信先のノードID数 最大5件
 * size 1
 * 0 ~ 5
 * default 0
 */
exports.MULTIHOP_DESTINATION_COUNT = 0x0C;

/**
 * マルチホップ送信先1
 * マルチホップ送信先1のノードアドレス
 * size 2
 * 0x0001 ~ 0xFFFD
 * default 0x0001
 */
exports.MULTIHOP_DESTINATION1 = 0x0D;

/**
 * マルチホップ送信先2
 * マルチホップ送信先2のノードアドレス
 * size 2
 * 0x0001 ~ 0xFFFD
 * default 0x0001
 */
exports.MULTIHOP_DESTINATION2 = 0x0E;

/**
 * マルチホップ送信先3
 * マルチホップ送信先3のノードアドレス
 * size 2
 * 0x0001 ~ 0xFFFD
 * default 0x0001
 */
exports.MULTIHOP_DESTINATION3 = 0x0F;

/**
 * マルチホップ送信先4
 * マルチホップ送信先4のノードアドレス
 * size 2
 * 0x0001 ~ 0xFFFD
 * default 0x0001
 */
exports.MULTIHOP_DESTINATION4 = 0x10;

/**
 * マルチホップ送信先5
 * マルチホップ送信先5のノードアドレス
 * size 2
 * 0x0001 ~ 0xFFFD
 * default 0x0001
 */
exports.MULTIHOP_DESTINATION5 = 0x11;

/**
 * デフォルトプロファイル
 * デフォルトで使用するプロファイル番号
 * size 1
 * 0 ~ 1
 * default 0
 */
exports.DEFAULT_PROFILE = 0x12;

/**
 * 受信許可
 * 送信中/Sleep中以外、受信動作許可設定 0: 受信する, 1: 受信しない
 * size 1
 * 0 ~ 1
 * default 0
 */
exports.ACCEPT_RECEIVE = 0x13;

/**
 * 受信通知
 * データ受信した場合のHOSTへの通知方法 0: RING信号で通知, 1: UARTのリザルトで通知
 * size 1
 * 0 ~ 1
 * default 0
 */
exports.RECEIVE_NOTIFICATION = 0x14;

/**
 * 親IEEEアドレス
 * 親IEEEアドレスを設定
 * size 8
 * 0x0000_0000_0000_0001 ~ 0xFFFF_FFFF_FFFF_FFFF
 * default 0x0000_0000_0000_0001
 */
exports.PARENT_IEEE_ADDRESS = 0x15;

/**
 * 自IEEEアドレス
 * IEEE拡張アドレスは工場出荷時に書き込まれたアドレスを使用しますので、書換えはできません
 * size 8
 * 0x0000_0000_0000_0001 ~ 0xFFFF_FFFF_FFFF_FFFF
 * default 0x0000_0000_0000_0001
 */
exports.UNIQUE_IEEE_ADDRESS = 0x16;

/**
 * 親ショートアドレス
 * 親ショートアドレスを設定 0:の場合0xAA00に設定（TBD） FIXME 最新のドキュメントをもらった方がいいかも
 * size 2
 * 0x0000 ~ 0xFFFD
 * default 0x0000
 */
exports.PARENT_SHORT_ADDRESS = 0x17;

/**
 * デバイスタイプ
 * 0: コーディネータ, 1: エンドデバイス
 * size 1
 * 0 ~ 1
 * default 0
 */
exports.DEVICE_TYPE = 0x18;

/**
 * LIFE
 * マルチホップ時のLIFE値
 * size 1
 * 1 ~ 10
 * default 10
 */
exports.LIFE = 0x19;

/**
 * 各プロファイルパラメーターのデータ長をまとめたマップ
 */
exports.DATA_LENGTH_BYTE_SIZE_MAP = {};
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.PAN_ID] = 2;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.NODE_ADDRESS] = 2;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.CHANNEL] = 1;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.TRANSMISSION_POWER] = 1;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.TRANSFER_RATE] = 1;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.RETRY_COUNT] = 1;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.BAUDRATE] = 1;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.FLOW_CONTROL] = 1;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.RECEIVE_BROADCAST] = 1;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.MULTIHOP_ENABLE] = 1;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.MULTIHOP_DESTINATION_COUNT] = 1;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.MULTIHOP_DESTINATION1] = 2;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.MULTIHOP_DESTINATION2] = 2;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.MULTIHOP_DESTINATION3] = 2;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.MULTIHOP_DESTINATION4] = 2;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.MULTIHOP_DESTINATION5] = 2;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.DEFAULT_PROFILE] = 1;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.ACCEPT_RECEIVE] = 1;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.RECEIVE_NOTIFICATION] = 1;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.PARENT_IEEE_ADDRESS] = 8;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.UNIQUE_IEEE_ADDRESS] = 8;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.PARENT_SHORT_ADDRESS] = 2;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.DEVICE_TYPE] = 1;
exports.DATA_LENGTH_BYTE_SIZE_MAP[exports.LIFE] = 1;
