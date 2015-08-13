package com.yuhki50.lpr9201.parser.packet;

/**
 * 接続通知
 */
public class ConnectionNotification implements IParsePacket {
    /**
     * 結果コード
     */
    protected static final int RESULT_CODE = 0x91;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * 受信したリザルトデータ
     */
    protected Result result;

    /**
     * 接続通知
     *
     * @param result 結果クラス
     */
    public ConnectionNotification(Result result) {
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
     * 子のIEEEアドレスを取得する
     * ビックエンディアン
     *
     * @return 子のIEEEアドレス
     */
    public int[] getChildIeeeAddressBytes() {
        return this.result.datas;
    }
}
