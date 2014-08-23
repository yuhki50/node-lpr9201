package com.teamlab.communication.wireless.lpr9201.result;

/**
 * リザルト ConnectionConfirmation
 */
public class ConnectionConfirmation extends Result {
	/**
	 * 
	 */
	public static final int RESULT_CODE = 0x00;

	/**
	 * 
	 */
	public static final int DATA_LENGTH_SIZE = 1; // byte

	/**
	 * 
	 * @param datas
	 */
	public ConnectionConfirmation(int[] datas) {
		super(RESULT_CODE, DATA_LENGTH_SIZE, datas);
	}
}
