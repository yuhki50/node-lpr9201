package com.teamlab.communication.wireless.lpr9201;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * プロファイルパラメーターのパラメータ番号管理
 */
public class ProfileParameter {
	/**
	 * PAN ID
	 * PAN IDを設定
	 * size 2
	 * 0x0001 ~ 0x3FFF
	 * default 0x0001
	 */
	public static final int PAN_ID = 0x01;

	/**
	 * ノードアドレス
	 * 自ノードアドレスを設定
	 * size 2
	 * 0x0000 ~ 0xFFFD
	 * default 0x0000
	 */
	public static final int NODE_ADDRESS = 0x02;

	/**
	 * チャンネル
	 * 送受信するチャンネルを設定
	 * size 1
	 * 0, 33 ~ 61
	 * default 0
	 */
	public static final int CHANNEL = 0x03;

	/**
	 * 送信出力
	 * 送信する出力を設定 0: 1mW, 1: 10mW, 2: 20mW
	 * size 1
	 * 0 ~ 2
	 * default 2
	 */
	public static final int TRANSMISSION_POWER = 0x04;

	/**
	 * 転送レート
	 * 転送レートを設定 1: 50kbps, 2: 100kbps
	 * size 1
	 * 1 ~ 2
	 * default 1
	 */
	public static final int TRANSFER_RATE = 0x05;

	/**
	 * 再送回数
	 * 送信失敗時に再度送信する回数
	 * size 1
	 * 0 ~ 5
	 * default 1
	 */
	public static final int RETRY_COUNT = 0x06;

	/**
	 * ボーレート
	 * UARTのボーレート設定 0: 9600bps, 1: 19200bps, 2: 38400bps, 3: 57600bps, 4: 115200bps, 5: 230400bps
	 * size 1
	 * 0 ~ 5
	 * default 0
	 */
	public static final int BAUDRATE = 0x08;

	/**
	 * フロー制御
	 * UARTのフロー制御設定 0: フロー制御無し, 1: ハードウェアフロー
	 * size 1
	 * 0 ~ 1
	 * default 0
	 */
	public static final int FLOW_CONTROL = 0x09;

	/**
	 * ブロードキャスト受信
	 * ブロードキャスト受信設定 0: ブロードキャスト受信しない, 1: ブロードキャスト受信許可
	 * size 1
	 * 0 ~ 1
	 * default 0
	 */
	public static final int RECEIVE_BROADCAST = 0x0A;

	/**
	 * マルチホップenable
	 * 0: マルチホップ送信しない, 1: マルチホップ送信許可
	 * size 1
	 * 0 ~ 1
	 * default 0
	 */
	public static final int MULTIHOP_ENABLE = 0x0B;

	/**
	 * マルチホップ送信先数
	 * マルチホップ送信先のノードID数 最大5件
	 * size 1
	 * 0 ~ 5
	 * default 0
	 */
	public static final int MULTIHOP_DESTINATION_COUNT = 0x0C;

	/**
	 * マルチホップ送信先1
	 * マルチホップ送信先1のノードアドレス
	 * size 2
	 * 0x0001 ~ 0xFFFD
	 * default 0x0001
	 */
	public static final int MULTIHOP_DESTINATION1 = 0x0D;

	/**
	 * マルチホップ送信先2
	 * マルチホップ送信先2のノードアドレス
	 * size 2
	 * 0x0001 ~ 0xFFFD
	 * default 0x0001
	 */
	public static final int MULTIHOP_DESTINATION2 = 0x0E;

	/**
	 * マルチホップ送信先3
	 * マルチホップ送信先3のノードアドレス
	 * size 2
	 * 0x0001 ~ 0xFFFD
	 * default 0x0001
	 */
	public static final int MULTIHOP_DESTINATION3 = 0x0F;

	/**
	 * マルチホップ送信先4
	 * マルチホップ送信先4のノードアドレス
	 * size 2
	 * 0x0001 ~ 0xFFFD
	 * default 0x0001
	 */
	public static final int MULTIHOP_DESTINATION4 = 0x10;

	/**
	 * マルチホップ送信先5
	 * マルチホップ送信先5のノードアドレス
	 * size 2
	 * 0x0001 ~ 0xFFFD
	 * default 0x0001
	 */
	public static final int MULTIHOP_DESTINATION5 = 0x11;

	/**
	 * デフォルトプロファイル
	 * デフォルトで使用するプロファイル番号
	 * size 1
	 * 0 ~ 1
	 * default 0
	 */
	public static final int DEFAULT_PROFILE = 0x12;

	/**
	 * 受信許可
	 * 送信中/Sleep中以外、受信動作許可設定 0: 受信する, 1: 受信しない
	 * size 1
	 * 0 ~ 1
	 * default 0
	 */
	public static final int ACCEPT_RECEIVE = 0x13;

	/**
	 * 受信通知
	 * データ受信した場合のHOSTへの通知方法 0: RING信号で通知, 1: UARTのリザルトで通知
	 * size 1
	 * 0 ~ 1
	 * default 0
	 */
	public static final int RECEIVE_NOTIFICATION = 0x14;

	/**
	 * 親IEEEアドレス
	 * 親IEEEアドレスを設定
	 * size 8
	 * 0x0000_0000_0000_0001 ~ 0xFFFF_FFFF_FFFF_FFFF
	 * default 0x0000_0000_0000_0001
	 */
	public static final int PARENT_IEEE_ADDRESS = 0x15;

	/**
	 * 自IEEEアドレス
	 * IEEE拡張アドレスは工場出荷時に書き込まれたアドレスを使用しますので、書換えはできません
	 * size 8
	 * 0x0000_0000_0000_0001 ~ 0xFFFF_FFFF_FFFF_FFFF
	 * default 0x0000_0000_0000_0001
	 */
	public static final int UNIQUE_IEEE_ADDRESS = 0x16;

	/**
	 * 親ショートアドレス
	 * 親ショートアドレスを設定 0:の場合0xAA00に設定（TBD） FIXME 最新のドキュメントをもらった方がいいかも
	 * size 2
	 * 0x0000 ~ 0xFFFD
	 * default 0x0000
	 */
	public static final int PARENT_SHORT_ADDRESS = 0x17;

	/**
	 * デバイスタイプ
	 * 0: コーディネータ, 1: エンドデバイス
	 * size 1
	 * 0 ~ 1
	 * default 0
	 */
	public static final int DEVICE_TYPE = 0x18;

	/**
	 * LIFE
	 * マルチホップ時のLIFE値
	 * size 1
	 * 1 ~ 10
	 * default 10
	 */
	public static final int LIFE = 0x19;

	/**
	 * 各プロファイルパラメーターのデータ長をまとめたマップ
	 */
	public static final Map<Integer, Integer> DATA_LENGTH_MAP;

	static {
		Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        map.put(PAN_ID, 2);
        map.put(NODE_ADDRESS, 2);
        map.put(CHANNEL, 1);
        map.put(TRANSMISSION_POWER, 1);
        map.put(TRANSFER_RATE, 1);
        map.put(RETRY_COUNT, 1);
        map.put(BAUDRATE, 1);
        map.put(FLOW_CONTROL, 1);
        map.put(RECEIVE_BROADCAST, 1);
        map.put(MULTIHOP_ENABLE, 1);
        map.put(MULTIHOP_DESTINATION_COUNT, 1);
        map.put(MULTIHOP_DESTINATION1, 2);
        map.put(MULTIHOP_DESTINATION2, 2);
        map.put(MULTIHOP_DESTINATION3, 2);
        map.put(MULTIHOP_DESTINATION4, 2);
        map.put(MULTIHOP_DESTINATION5, 2);
        map.put(DEFAULT_PROFILE, 1);
        map.put(ACCEPT_RECEIVE, 1);
        map.put(RECEIVE_NOTIFICATION, 1);
        map.put(PARENT_IEEE_ADDRESS, 8);
		map.put(UNIQUE_IEEE_ADDRESS, 8);
		map.put(PARENT_SHORT_ADDRESS, 2);
		map.put(DEVICE_TYPE, 1);
		map.put(LIFE, 1);
		DATA_LENGTH_MAP = Collections.unmodifiableMap(map);
	}


	private ProfileParameter() {

	}
}

