package com.teamlab.communication.wireless.lpr9201.result;

import java.util.HashMap;
import java.util.Map;

/**
 * リザルト EdScan
 */
public class EdScan extends Result {
	/**
	 * 
	 */
	public static final int RESULT_CODE = 0x8C;

	/**
	 * 
	 */
	public static final int DATA_LENGTH_SIZE = 1; // byte

	private static final int RATE1_LENGTH = 0x1D;
	private static final int RATE2_LENGTH = 0x0E;
	private static final int START_CH = 33;

	private Map<Integer, Integer> value = new HashMap<Integer, Integer>();

	public EdScan(int[] datas) {
		super(RESULT_CODE, DATA_LENGTH_SIZE, datas);

		if (datas.length == RATE1_LENGTH) {
			for (int i = 0; i < datas.length; i++) {
				value.put(START_CH + i, datas[i]);
			}
		} else if (datas.length == RATE2_LENGTH) {
			int offset = 0;
			for (int i = 0; i < datas.length; i++) {
				value.put(START_CH + offset + i, datas[i]);
				value.put(START_CH + offset + i + 1, datas[i]);
				offset++;
			}
		}
	}

	public Map<Integer, Integer> getRssis() {
		return this.value;
	}
}
