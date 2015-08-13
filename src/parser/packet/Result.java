package com.yuhki50.lpr9201.parser.packet;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * リザルト
 */
public class Result {
    /**
     * データ長バイトサイズ一覧
     */
    public static final Map<Integer, Integer> DATA_LENGTH_BYTE_SIZE_MAP;

    static {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        map.put(Ack.RESULT_CODE, Ack.DATA_LENGTH_BYTE_SIZE);
        map.put(AditionalReceiveData.RESULT_CODE, AditionalReceiveData.DATA_LENGTH_BYTE_SIZE);
        map.put(ConnectionConfirmation.RESULT_CODE, ConnectionConfirmation.DATA_LENGTH_BYTE_SIZE);
        map.put(ConnectionNotification.RESULT_CODE, ConnectionNotification.DATA_LENGTH_BYTE_SIZE);
        map.put(ConnectionResult.RESULT_CODE, ConnectionResult.DATA_LENGTH_BYTE_SIZE);
        map.put(EdScan.RESULT_CODE, EdScan.DATA_LENGTH_BYTE_SIZE);
        map.put(Nack.RESULT_CODE, Nack.DATA_LENGTH_BYTE_SIZE);
        map.put(ProfileParameter.RESULT_CODE, Nack.DATA_LENGTH_BYTE_SIZE);
        map.put(ReceiveData.RESULT_CODE, ReceiveData.DATA_LENGTH_BYTE_SIZE);
        map.put(Ring.RESULT_CODE, Ring.DATA_LENGTH_BYTE_SIZE);
        map.put(Rssi.RESULT_CODE, Rssi.DATA_LENGTH_BYTE_SIZE);
        map.put(SecurityConfig.RESULT_CODE, SecurityConfig.DATA_LENGTH_BYTE_SIZE);
        map.put(WirelessSecurityError.RESULT_CODE, WirelessSecurityError.DATA_LENGTH_BYTE_SIZE);
        map.put(Wup.RESULT_CODE, Wup.DATA_LENGTH_BYTE_SIZE);
        DATA_LENGTH_BYTE_SIZE_MAP = Collections.unmodifiableMap(map);
    }

    /**
     * 結果コード
     */
    protected int resultCode;

    /**
     * 受信データ
     */
    protected int[] datas;

    /**
     * @param resultCode 結果コード
     * @param datas      受信データ
     */
    public Result(int resultCode, int[] datas) {
        this.resultCode = resultCode;
        this.datas = datas;
    }

    /**
     * 結果コードを取得する
     *
     * @return 結果コード
     */
    public int getResultCode() {
        return this.resultCode;
    }
}
