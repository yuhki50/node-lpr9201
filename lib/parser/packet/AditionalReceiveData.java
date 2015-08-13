package com.yuhki50.lpr9201.parser.packet;

import com.yuhki50.lpr9201.parser.option.ReceiveDataType;

import java.util.Arrays;

/**
 * 付加受信データ
 */
public class AditionalReceiveData implements IParsePacket {
    /**
     * 結果コード
     */
    protected static final int RESULT_CODE = 0x90;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 2;

    /**
     * 受信したリザルトデータ
     */
    protected Result result;

    /**
     * 付加受信データ
     *
     * @param result 結果クラス
     */
    public AditionalReceiveData(Result result) {
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

    /**
     * データ種別を取得する
     *
     * @return データ種別
     */
    public ReceiveDataType getReceiveDataType() {
        return ReceiveDataType.getEnumByOrdinal(this.result.datas[1]);
    }

    /**
     * 送信元アドレスを取得する
     *
     * @return 送信元アドレス
     */
    public int getSourceAddress() {
        int[] datas = this.result.datas;
        return (datas[2] << 8) | datas[3];
    }

    /**
     * 直前送信元アドレスを取得する
     *
     * @return 直前送信元アドレス
     */
    public int getJustBeforeSourceAddress() {
        int[] datas = this.result.datas;
        return (datas[4] << 8) | datas[5];
    }

    /**
     * データを取得する
     *
     * @return データ
     */
    public int[] getDatas() {
        int[] datas = this.result.datas;
        final int START_INDEX = 6;
        return Arrays.copyOfRange(datas, START_INDEX, datas.length);
    }
}
