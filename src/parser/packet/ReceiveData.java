package com.yuhki50.lpr9201.parser.packet;

import java.util.Arrays;

/**
 * 受信データ
 */
public class ReceiveData implements IParsePacket {
    /**
     * 結果コード
     */
    protected static final int RESULT_CODE = 0x83;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 2;

    /**
     * 受信したリザルトデータ
     */
    protected Result result;

    /**
     * 受信データ
     *
     * @param result 結果クラス
     */
    public ReceiveData(Result result) {
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
     * データを取得する
     *
     * @return データ
     */
    public int[] getDatas() {
        int[] datas = this.result.datas;
        return Arrays.copyOf(datas, datas.length);
    }
}
