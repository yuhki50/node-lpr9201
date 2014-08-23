package com.teamlab.communication.wireless.lpr9201.result;

/**
 * リザルト Wup
 */
public class Wup extends Result {
	/**
	 * 
	 */
	public static final int RESULT_CODE = 0x86;

	/**
	 * 
	 */
	public static final int DATA_LENGTH_SIZE = 1; // byte
	
	/**
	 * 
	 * @param datas
	 */
	public Wup(int[] datas) {
		super(RESULT_CODE, DATA_LENGTH_SIZE, datas);
	}
}
