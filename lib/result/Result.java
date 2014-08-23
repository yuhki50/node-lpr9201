package com.teamlab.communication.wireless.lpr9201.result;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * リザルト
 */
public abstract class Result {
	/**
	 * 
	 */
	public static final Map<Integer, Integer> DATA_LENGTH_MAP;

	static {
		Map<Integer, Integer> map = new HashMap<Integer, Integer>();
		map.put(ConnectionConfirmation.RESULT_CODE, ConnectionConfirmation.DATA_LENGTH_SIZE);
		map.put(Ack.RESULT_CODE, Ack.DATA_LENGTH_SIZE);
		map.put(Nack.RESULT_CODE, Nack.DATA_LENGTH_SIZE);
		map.put(ReceiveData.RESULT_CODE, ReceiveData.DATA_LENGTH_SIZE);
		map.put(Rssi.RESULT_CODE, Rssi.DATA_LENGTH_SIZE);
		map.put(ProfileParameterResult.RESULT_CODE, ProfileParameterResult.DATA_LENGTH_SIZE);
		map.put(Wup.RESULT_CODE, Wup.DATA_LENGTH_SIZE);
		map.put(Ring.RESULT_CODE, Ring.DATA_LENGTH_SIZE);
		map.put(EdScan.RESULT_CODE, EdScan.DATA_LENGTH_SIZE);
		DATA_LENGTH_MAP = Collections.unmodifiableMap(map);
	}

	/**
	 * 
	 */
	protected int resultCode;

	/**
	 * 
	 */
	protected int dataLengthSize;

	/**
	 * 
	 */
	protected int[] datas;

	/**
	 * 
	 * @param resultCode
	 * @param dataLengthSize
	 * @param datas
	 */
	public Result(int resultCode, int dataLengthSize, int[] datas) {
		this.resultCode = resultCode;
		this.dataLengthSize = dataLengthSize;
		this.datas = datas;
	}

	/**
	 * @return the command
	 */
	public int getResultCode() {
		return this.resultCode;
	}

	public int getDataLengthSize() {
		return this.dataLengthSize;
	}

	/**
	 * @return the datas
	 */
	public int[] getDatas() {
		return this.datas;
	}
}
