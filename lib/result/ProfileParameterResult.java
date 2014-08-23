package com.teamlab.communication.wireless.lpr9201.result;

/**
 * リザルト ProfileParameter
 */
public class ProfileParameterResult extends Result {
	/**
	 * 
	 */
	public static final int RESULT_CODE = 0x85;

	/**
	 * 
	 */
	public static final int DATA_LENGTH_SIZE = 1; // byte
	
	protected long value;

	public ProfileParameterResult(int[] datas) {
		super(RESULT_CODE, DATA_LENGTH_SIZE, datas);

		/*
		for (int d : datas) {
			System.out.print(String.format("0x%02X ", d));
		}
		System.out.println();
		*/

		// FIXME 必要なデータ長がない場合の処理を書く
		//this.paramNo = datas[0];

		for (int i = 0; i < datas.length; i++) {
			this.value |= datas[i] << (8 * (datas.length - i - 1));
		}
	}

	public long getValue() {
		return this.value;
	}
}
