package com.yuhki50.lpr9201.parser.packet;

/**
 * RSSI
 */
public class Rssi implements IParsePacket {
    /**
     * 結果コード
     */
    protected static final int RESULT_CODE = 0x84;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * 受信したリザルトデータ
     */
    protected Result result;

    /**
     * RSSI
     *
     * @param result 結果クラス
     */
    public Rssi(Result result) {
        this.result = result;
    }

    /**
     * 結果コードを取得する
     *
     * @return 結果コード
     */
    public int getResultCode() {
        return RESULT_CODE;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public int getDataLengthByteSize() {
        return DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    public boolean canParse() {
        return this.result != null && this.result.resultCode == RESULT_CODE;
    }

    /**
     * RSSI値を取得する
     * 受信RSSI内容(dBm値で出力) -128~0
     *
     * @return RSSI値
     */
    public int getRssi() {
        return this.result.datas[0] | ~0xFF;
    }
}
