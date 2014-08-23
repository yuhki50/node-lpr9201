package com.teamlab.communication.wireless.lpr9201.result;

/**
 * リザルト ReceiveData
 */
public class ReceiveData extends Result {
	/**
	 * 
	 */
	public static final int RESULT_CODE = 0x83;

	/**
	 * 
	 */
	public static final int DATA_LENGTH_SIZE = 2; // byte

	/**
	 * 
	 * @param datas
	 */
	public ReceiveData(int[] datas) {
		super(RESULT_CODE, DATA_LENGTH_SIZE, datas);
	}
}
