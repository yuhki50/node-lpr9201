package com.teamlab.communication.wireless.lpr9201.command;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * コマンド一覧
 */
public class Command {
	/**
	 * 接続確認 接続の確認用
	 */
	public static final int CONNECTION_CONFIRMATION = 0x00;

	/**
	 * データ送信 データ送信
	 */
	public static final int DATA_TRANSMISSION = 0x01;

	/**
	 * プロファイルパラメータ設定 各種パラメータ設定
	 */
	public static final int WRITE_PROFILE_PARAMETER = 0x02;

	/**
	 * プロファイルパラメータ読出し 各種パラメータ設定値読出し
	 */
	public static final int READ_PROFILE_PARAMETER = 0x03;

	/**
	 * 受信データ読出し 最後に受信したデータ読出し
	 */
	public static final int READ_RECEIVE_DATA = 0x04;

	/**
	 * RSSIデータ読出し 最後に受信したデータ読出し
	 */
	public static final int READ_RSSI_DATA = 0x05;

	/**
	 * プロファイル保存 各種設定値のプロファイル保存
	 */
	public static final int WRITE_PROFILE = 0x06;

	/**
	 * プロファイル読出し 保存しているプロファイルの読出し
	 */
	public static final int READ_PROFILE = 0x07;

	/**
	 * プロファイルパラメータ初期化 各種設定値を工場出荷状態に戻します
	 */
	public static final int RESET_PROFILE = 0x08;

	/**
	 * Sleep設定 モジュールをSleep状態にします
	 */
	public static final int SLEEP = 0x09;

	/**
	 * 指定時間Sleep設定 モジュールを指定時間Sleep状態にします。解除後、指定された時間受信を行います。
	 */
	public static final int SLEEP_INTERVAL = 0x0A;

	/**
	 * 起動要求 無線通信を可能にします
	 */
	public static final int ACTIVATE_REQUEST = 0x0B;

	/**
	 * EDスキャン 全チャンネルのRSSI値を取得します
	 */
	public static final int ED_SCAN = 0x0C;

	/**
	 * リセット ソフトウェアリセットの実施
	 */
	public static final int RESET = 0x7F;

	/**
	 * 各コマンドのデータ長をまとめたマップ
	 */
	public static final Map<Integer, Integer> DATA_LENGTH_MAP;

	static {
		Map<Integer, Integer> map = new HashMap<Integer, Integer>();
		map.put(CONNECTION_CONFIRMATION, 1);
		map.put(DATA_TRANSMISSION, 2);
		map.put(WRITE_PROFILE_PARAMETER, 1);
		map.put(READ_PROFILE_PARAMETER, 1);
		map.put(READ_RECEIVE_DATA, 1);
		map.put(READ_RSSI_DATA, 1);
		map.put(WRITE_PROFILE, 1);
		map.put(READ_PROFILE, 1);
		map.put(RESET_PROFILE, 1);
		map.put(SLEEP, 1);
		map.put(SLEEP_INTERVAL, 1);
		map.put(ACTIVATE_REQUEST, 1);
		map.put(ED_SCAN, 1);
		map.put(RESET, 1);
		DATA_LENGTH_MAP = Collections.unmodifiableMap(map);
	}


	private Command() {

	}
}
