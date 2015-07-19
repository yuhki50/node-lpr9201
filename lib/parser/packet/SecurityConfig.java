package com.yuhki50.lpr9201.parser.packet;

/**
 * セキュリティ状態取得
 */
public class SecurityConfig implements IParsePacket {
    /**
     * 結果コード
     */
    protected static final int RESULT_CODE = 0x93;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * 受信したリザルトデータ
     */
    protected Result result;

    /**
     * セキュリティ状態取得
     *
     * @param result 結果クラス
     */
    public SecurityConfig(Result result) {
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
     * セキュリティ状態を取得する
     *
     * @return セキュリティ状態
     */
    public boolean getSecurityState() {
        return this.result.datas[0] == 0x01;
    }
}
