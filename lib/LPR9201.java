package com.teamlab.communication.wireless.lpr9201;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.teamlab.communication.wireless.lpr9201.command.Command;
import com.teamlab.communication.wireless.lpr9201.result.Ack;
import com.teamlab.communication.wireless.lpr9201.result.ConnectionConfirmation;
import com.teamlab.communication.wireless.lpr9201.result.EdScan;
import com.teamlab.communication.wireless.lpr9201.result.Nack;
import com.teamlab.communication.wireless.lpr9201.result.ProfileParameterResult;
import com.teamlab.communication.wireless.lpr9201.result.ReceiveData;
import com.teamlab.communication.wireless.lpr9201.result.Result;
import com.teamlab.communication.wireless.lpr9201.result.Ring;
import com.teamlab.communication.wireless.lpr9201.result.Rssi;
import com.teamlab.communication.wireless.lpr9201.result.Wup;

/**
 * 通信クラス
 */
public class LPR9201 {
	public static final String VERSION = "1.0.0";

	protected IReceiver receiver;
	protected ISender sender;

	private static final int START_BYTE1 = 0x5A;
	private static final int START_BYTE2 = 0xA5;
	private static final int START_BYTE_LENGTH = 2;

	private static final int COMMAND_BYTE_LENGTH = 1;
	private static final int CHECKSUM_BYTE_LENGTH = 1;

	private static final int RECEIVE_DATA_BUFFER_LENGTH = 512;
	private int[] receiveData = new int[RECEIVE_DATA_BUFFER_LENGTH];
	private int receiveDataLength = 0;
	private boolean isStart = false;

	/**
	 * 
	 */
	public LPR9201() {

	}

	/**
	 * @param receiver
	 */
	/*
	public void setReceiver(IReceiver receiver) {
		this.receiver = receiver;
	}
	*/

	/**
	 * @param sender
	 */
	public void setSender(ISender sender) {
		this.sender = sender;
	}

	/**
	 * 接続確認 接続の確認用
	 */
	public void connectionConfirmation() {
		// データ長
		// final int length = 0x00;

		// 結果（成功時）
		// final int resultSuccess = 0x00;

		sender(Command.CONNECTION_CONFIRMATION);
	}

	/**
	 * データ送信 データ送信
	 * 
	 * @param address 送信先（マルチホップ送信時は最終送信先）のアドレス
	 * @param data 送信するデータ 最大長は500オクテット
	 * @param ack ACKの有り/無し
	 * @param multihop マルチホップ送信の有り/無し
	 * @param broadcast ブロードキャスト送信の有り/無し
	 */
	public void dataTransmission(int address, int[] data, boolean ack, boolean multihop, boolean broadcast) {
		// 結果（送信成功時ACK）
		// ACK有り送信時は送信先からACK受信時、ACK無し送信時は送信完了時
		// final int resultSuccess = 0x81;

		// 結果（送信失敗時NACK）
		// ACK有り送信時は送信先からACK受信できず、再送リトライアウト時また、その他エラー発生時
		// final int resultFail = 0x82;

		// オプションデータを作成
		int option = 0x00;
		option |= ack ? (0x01 << 0) : 0x00; // ack
		option |= multihop ? (0x01 << 1) : 0x00; // multihop
		option |= broadcast ? (0x01 << 2) : 0x00; // broadcast

		List<Integer> datas = new ArrayList<Integer>();
		datas.add(option); // オプション
		datas.add((address >>> 8) & 0xFF); // 送信先アドレス(Hi)
		datas.add((address >>> 0) & 0xFF); // 送信先アドレス(Low)

		for (int da : data) {
			datas.add(da);
		}

		sender(Command.DATA_TRANSMISSION, datas);
	}

	/**
	 * プロファイルパラメータ設定 各種パラメータ設定
	 * 
	 * @param paramNo パラメータNo
	 * @param value 設定値
	 */
	public void writeProfileParameter(int paramNo, long value) {
		// 結果（保存成功時）
		// final int resultSuccess = 0x81;

		// 結果（保存失敗時）
		// パラメータエラーや、その他エラー発生時
		// final int resultFail = 0x82;

		if (!ProfileParameter.DATA_LENGTH_MAP.containsKey(paramNo)) {
			throw new IllegalArgumentException("not found paramNo: " + paramNo);
		}

		List<Integer> data = new ArrayList<Integer>();
		data.add(paramNo);

		// 指定されたデータ長の上位1byteづつ切り出す {high, mid... low}
		int dataLength = ProfileParameter.DATA_LENGTH_MAP.get(paramNo);
		for (int i = dataLength - 1; i >= 0; i--) {
			data.add((int) (value >>> (8 * i)) & 0xFF);
		}

		sender(Command.WRITE_PROFILE_PARAMETER, data);
	}

	/**
	 * プロファイルパラメータ読出し 各種パラメータ設定値読出し
	 * 
	 * @param paramNo パラメータNo
	 */
	public void readProfileParameter(int paramNo) {
		// 結果（読出し成功時）
		// 設定パラメータ（0x85）
		// final int resultSuccess = 0x85;

		// 結果（送信失敗時NACK）
		// パラメータエラーや、その他エラー発生時
		// final int resultFail = 0x82;

		sender(Command.READ_PROFILE_PARAMETER, Arrays.asList(paramNo));
	}

	/**
	 * 受信データ読出し 最後に受信したデータ読出し
	 */
	public void readReceiveData() {
		// 結果（読出し成功時）
		// 受信データ（0x85）
		// final int resultSuccess = 0x83;

		// 結果（送信失敗時NACK）
		// パラメータエラーや、その他エラー発生時
		// final int resultFail = 0x82;

		sender(Command.READ_RECEIVE_DATA);
	}

	/**
	 * RSSIデータ読出し 最後に受信したデータ読出し
	 */
	public void readRssiData() {
		// 結果（読出し成功時）
		// RSSI
		// final int resultSuccess = 0x84;

		// 結果（読出し失敗時NACK）
		// パラメータエラーや、その他エラー発生時
		// final int resultFail = 0x82;

		sender(Command.READ_RSSI_DATA);
	}

	/**
	 * プロファイル保存 各種設定値のプロファイル保存
	 * 
	 * @param profileNo 保存するプロファイル番号 0 ~ 1
	 */
	public void writeProfile(int profileNo) {
		// 結果（保存成功時）
		// final int resultSuccess = 0x81;

		// 結果（保存失敗時）
		// パラメータエラーや、その他エラー発生時
		// final int resultFail = 0x82;

		sender(Command.WRITE_PROFILE, Arrays.asList(profileNo));
	}

	/**
	 * プロファイル読出し 保存しているプロファイルの読出し
	 * 
	 * @param profileNo 読み出すプロファイル番号 0 ~ 1
	 */
	public void readProfile(int profileNo) {
		// 結果（読出し成功時）
		// final int resultSuccess = 0x81;

		// 結果（読出し失敗時）
		// パラメータエラーや、その他エラー発生時
		// final int resultFail = 0x82;

		sender(Command.READ_PROFILE, Arrays.asList(profileNo));
	}

	/**
	 * プロファイルパラメータ初期化 各種設定値を工場出荷状態に戻します
	 */
	public void resetProfile() {
		// 結果（成功時）
		// final int resultSuccess = 0x81;

		// 結果（失敗時）
		// パラメータエラーや、その他エラー発生時
		// final int resultFail = 0x82;

		sender(Command.RESET_PROFILE);
	}

	/**
	 * Sleep設定 モジュールをSleep状態にします
	 */
	public void sleep() {
		// 結果（成功時）
		// なし（Sleep状態に入ります）
		// WakeUp信号で復帰後、WUPリザルトを返します
		// すでにSleep解除後でもWakeUp信号入力でWUPリザルトを返します

		// 結果（失敗時）
		// パラメータエラーや、その他エラー発生時
		// final int resultFail = 0x82;

		sender(Command.SLEEP);
	}

	/**
	 * 指定時間Sleep設定 モジュールを指定時間Sleep状態にします。解除後、指定された時間受信を行います。
	 * 
	 * @param sleepTime Sleep状態に設定する時間（単位秒） 1 ~ 65535秒
	 * @param receiveTime Sleep解除後に受信動作を行う時間（単位ミリ秒） 1 ~ 255ミリ秒
	 */
	public void sleepInterval(int sleepTime, int receiveTime) {
		// 結果（成功時）
		// なし（Sleep状態に入ります）
		// WakeUp信号で復帰後、WUPリザルトを返します
		// すでにSleep解除後でもWakeUp信号入力でWUPリザルトを返します

		// 結果（失敗時）
		// パラメータエラーや、その他エラー発生時
		// final int resultFail = 0x82;

		sender(Command.SLEEP_INTERVAL, Arrays.asList((sleepTime >>> 8) & 0xFF, (sleepTime >>> 0) & 0xFF, receiveTime));
	}

	/**
	 * 起動要求 無線通信を可能にします
	 */
	public void activateRequest() {
		// 結果（成功時）
		// final int resultSuccess = 0x81;

		// 結果（失敗時）
		// パラメータエラーや、その他エラー発生時
		// final int resultFail = 0x82;

		sender(Command.ACTIVATE_REQUEST);
	}

	/**
	 * EDスキャン 全チャンネルのRSSI値を取得します
	 */
	public void edScan() {
		// 結果（成功時）
		// EDスキャン結果
		// final int resultSuccess = 0x8C;

		// 結果（失敗時）
		// パラメータエラーや、その他エラー発生時
		// final int resultFail = 0x82;

		sender(Command.ED_SCAN);
	}

	/**
	 * リセット ソフトウェアリセットの実施
	 */
	public void reset() {
		// 結果（成功時）
		// なし（リセット実施）

		// 結果（失敗時）
		// パラメータエラーや、その他エラー発生時
		// final int resultFail = 0x82;

		sender(Command.RESET);
	}

	/**
	 * パケットを受信
	 * @param data
	 */
	public Result receiver(int data) {
		Result result = null;

		// header check
		if (this.receiveData[0] == START_BYTE1 && data == START_BYTE2 && !this.isStart) {
			this.receiveDataLength = 1;
			this.isStart = true;
		}

		this.receiveData[this.receiveDataLength] = data;

		if (this.isStart) {
			this.receiveDataLength++;

			if (receiveDataLength > RECEIVE_DATA_BUFFER_LENGTH) {
				this.receiveDataLength = 0;
				this.isStart = false;
			}

			if (this.receiveDataLength > START_BYTE_LENGTH) {
				int command = this.receiveData[2];

				if (Result.DATA_LENGTH_MAP.containsKey(command)) {
					int dataLengthByteSize = Result.DATA_LENGTH_MAP.get(command);

					if (this.receiveDataLength > START_BYTE_LENGTH + dataLengthByteSize) {
						int dataLength = 0;
						for (int i = 0; i < dataLengthByteSize; i++) {
							int byteData = this.receiveData[START_BYTE_LENGTH + COMMAND_BYTE_LENGTH + i];
							int shiftCount = 8 * (dataLengthByteSize - i - 1);
							dataLength |= byteData << shiftCount;
						}

						if (this.receiveDataLength >= START_BYTE_LENGTH + COMMAND_BYTE_LENGTH + dataLengthByteSize + dataLength + CHECKSUM_BYTE_LENGTH) {
							// calculate checksum
							int checksum = 0;
							for (int i = 0; i < this.receiveDataLength - 1; i++) {  // checksumは除く
								checksum ^= this.receiveData[i];
							}

							// check checksum
							if (checksum == this.receiveData[this.receiveDataLength - 1]) {
								result = parser(command,
										Arrays.copyOfRange(this.receiveData, START_BYTE_LENGTH + COMMAND_BYTE_LENGTH + dataLengthByteSize, this.receiveDataLength - CHECKSUM_BYTE_LENGTH));
							}

							this.receiveDataLength = 0;
							this.isStart = false;
						}
					}
				} else {
					this.receiveDataLength = 0;
					this.isStart = false;
				}
			}
		}

		return result;
	}

	/**
	 * @param command
	 * @param datas
	 */
	protected Result parser(int command, int[] datas) {
		Result result = null;

		switch (command) {
		case ConnectionConfirmation.RESULT_CODE:
			result = new ConnectionConfirmation(datas);
			break;

		case Ack.RESULT_CODE:
			result = new Ack(datas);
			break;

		case Nack.RESULT_CODE:
			result = new Nack(datas);
			break;

		case ReceiveData.RESULT_CODE:
			result = new ReceiveData(datas);
			break;

		case Rssi.RESULT_CODE:
			result = new Rssi(datas);
			break;

		case ProfileParameterResult.RESULT_CODE:
			result = new ProfileParameterResult(datas);
			break;

		case Wup.RESULT_CODE:
			result = new Wup(datas);
			break;

		case Ring.RESULT_CODE:
			result = new Ring(datas);
			break;

		case EdScan.RESULT_CODE:
			result = new EdScan(datas);
			break;
		}

		return result;
	}

	/**
	 * パケットを送信
	 * 
	 * @param command
	 * @param data
	 */
	protected void sender(int command, List<Integer> data) {
		List<Integer> packet = new ArrayList<Integer>();

		// start
		packet.addAll(Arrays.asList(START_BYTE1, START_BYTE2));

		// command
		packet.add(command);

		// data length
		if (Command.DATA_LENGTH_MAP.containsKey(command)) {
			// 指定されたデータ長の上位1byteづつ切り出す {high, mid... low}
			for (int i = Command.DATA_LENGTH_MAP.get(command) - 1; i >= 0; i--) {
				packet.add((int) (data.size() >>> (8 * i)) & 0xFF);
			}
		} else {
			throw new IllegalStateException();
		}

		// data
		packet.addAll(data);

		// checksum
		int checksum = 0;
		for (Integer p : packet) {
			checksum ^= p;
		}
		packet.add(checksum);

		if (sender != null) {
			sender.write(packet.toArray(new Integer[packet.size()]));
		}
	}

	/**
	 * パケットを送信
	 * 
	 * @param command
	 */
	protected void sender(int command) {
		sender(command, new ArrayList<Integer>());
	}
}
