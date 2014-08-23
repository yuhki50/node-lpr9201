package com.teamlab.communication.wireless.lpr9201.result;

/**
 * リザルト Nack
 */
public class Nack extends Result {
	/**
	 * 
	 */
	public static final int RESULT_CODE = 0x82;

	/**
	 * 
	 */
	public static final int DATA_LENGTH_SIZE = 1; // byte
	

	/**
	 * パラメータエラー
	 */
	public static final int PARAMETER_ERROR = 0x01;

	/**
	 *
	 */
	public static final int SEND_RETRYOUT = 0x02;

	/**
	 * 受信データ無し
	 */
	public static final int NO_RECEIVE_DATA = 0x03;

	/**
	 * ネットワークエラー
	 */
	public static final int NETWORK_ERROR = 0x04;

	/**
	 * 送信制限中
	 */
	public static final int SEND_LIMITING = 0xFA;

	/**
	 * その他の理由
	 */
	public static final int OTHER = 0xFF;

	/**
	 * 
	 */
	private int reasonCode;

	/**
	 * 
	 * @param command
	 * @param datas
	 */
	public Nack(int[] datas) {
		super(RESULT_CODE, DATA_LENGTH_SIZE, datas);
		this.reasonCode = datas.length > 0 ? datas[0] : OTHER;
	}

	/**
	 * 
	 * @return
	 */
	public int getReason() {
		return this.reasonCode;
	}
}
