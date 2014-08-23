package com.teamlab.communication.wireless.lpr9201.result;

/**
 * リザルト Rssi
 */
public class Rssi extends Result {
	/**
	 * 
	 */
	public static final int RESULT_CODE = 0x84;

	/**
	 * 
	 */
	public static final int DATA_LENGTH_SIZE = 1; // byte
	
	private int value;

	public Rssi(int[] datas) {
		super(RESULT_CODE, DATA_LENGTH_SIZE, datas);
		this.value = datas.length > 0 ? datas[0] : 0;
	}

	public int getValue() {
		return this.value;
	}
}
