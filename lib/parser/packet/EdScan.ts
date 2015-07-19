package com.yuhki50.lpr9201.parser.packet;

import com.yuhki50.lpr9201.parser.option.RateType;

import java.util.HashMap;
import java.util.Map;

/**
 * EDスキャン結果
 */
public class EdScan implements IParsePacket {
    /**
     * 結果コード
     */
    protected static final int RESULT_CODE = 0x8C;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * 受信したリザルトデータ
     */
    protected Result result;

    /**
     * Rate1のチャンネル数
     */
    private static final int RATE1_LENGTH = 0x1D;

    /**
     * Rate2のチャンネル数
     */
    private static final int RATE2_LENGTH = 0x0E;

    /**
     * 開始チャンネル番号
     */
    private static final int START_CH = 33;

    /**
     * EDスキャン結果
     *
     * @param result 結果クラス
     */
    public EdScan(Result result) {
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
     * 全チャンネルのRSSI値を取得する
     *
     * @return 全チャンネルのRSSI値
     */
    public Map<Integer, Integer> getRssis() {
        Map<Integer, Integer> rssis = new HashMap<Integer, Integer>();
        int length = this.result.datas.length;

        if (length == RATE1_LENGTH) {
            for (int i = 0; i < length; i++) {
                rssis.put(START_CH + i, result.datas[i] | ~0xFF);
            }
        } else if (length == RATE2_LENGTH) {
            int offset = 0;
            for (int i = 0; i < length; i++) {
                rssis.put(START_CH + offset + i, result.datas[i] | ~0xFF);
                rssis.put(START_CH + offset + i + 1, result.datas[i] | ~0xFF);
                offset++;
            }
        } else {
            throw new RuntimeException("not found rate");
        }

        return rssis;
    }

    /**
     * 転送レートを取得する
     *
     * @return 転送レート
     */
    public RateType getRate() {
        int length = this.result.datas.length;

        if (length == RATE1_LENGTH) {
            return RateType.Rate1;
        }
        if (length == RATE2_LENGTH) {
            return RateType.Rate2;
        }
        throw new RuntimeException("not found rate");
    }
}
