package com.teamlab.communication.wireless.lpr9201.result;

/**
 * リザルト Ack
 */
public class Ack extends Result {
	/**
	 * 
	 */
	public static final int RESULT_CODE = 0x81;

	/**
	 * 
	 */
	public static final int DATA_LENGTH_SIZE = 1; // byte

	/**
	 * 
	 * @param datas
	 */
	public Ack(int[] datas) {
		super(RESULT_CODE, DATA_LENGTH_SIZE, datas);
	}
}
