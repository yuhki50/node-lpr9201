package com.teamlab.communication.wireless.lpr9201.result;

/**
 * リザルト Ring
 */
public class Ring extends Result {
	/**
	 * 
	 */
	public static final int RESULT_CODE = 0x87;

	/**
	 * 
	 */
	public static final int DATA_LENGTH_SIZE = 1; // byte

	/**
	 * 
	 * @param datas
	 */
	public Ring(int[] datas) {
		super(RESULT_CODE, DATA_LENGTH_SIZE, datas);
	}
}
