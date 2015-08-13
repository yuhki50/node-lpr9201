package com.yuhki50.lpr9201.parser.packet;

import com.yuhki50.lpr9201.parser.option.NackReason;

/**
 * NACK
 */
public class Nack implements IParsePacket {
    /**
     * 結果コード
     */
    protected static final int RESULT_CODE = 0x82;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * 受信したリザルトデータ
     */
    protected Result result;

    /**
     * NACK
     *
     * @param result 結果クラス
     */
    public Nack(Result result) {
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
     * 理由コードを取得する
     *
     * @return 理由コード
     */
    public NackReason getReason() {
        try {
            return NackReason.getEnumByReasonCode(this.result.datas[0]);
        } catch (Exception ex) {
            return NackReason.OTHER_ERROR;
        }
    }
}
