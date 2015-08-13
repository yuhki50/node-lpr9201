package com.yuhki50.lpr9201.parser.packet;

import com.yuhki50.lpr9201.util.ByteUtil;

/**
 * プロファイルパラメータ確認
 */
public class ProfileParameter implements IParsePacket {
    /**
     * 結果コード
     */
    protected static final int RESULT_CODE = 0x85;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * 受信したリザルトデータ
     */
    protected Result result;

    /**
     * プロファイルパラメータ確認
     *
     * @param result 結果クラス
     */
    public ProfileParameter(Result result) {
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
     * プロファイルパラメーター値を取得する
     *
     * @return プロファイルパラメーター値
     */
    public int getValueInt() {
        return (int) ByteUtil.mergeBigEndian(this.result.datas);
    }

    /**
     * プロファイルパラメーター値を取得する
     *
     * @return プロファイルパラメーター値
     */
    public long getValueLong() {
        return ByteUtil.mergeBigEndian(this.result.datas);
    }

    /**
     * プロファイルパラメーター値を取得する
     *
     * @return プロファイルパラメーター値
     */
    public int[] getValueBytes() {
        return this.result.datas;
    }
}
