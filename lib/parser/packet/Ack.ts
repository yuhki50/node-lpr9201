package com.yuhki50.lpr9201.parser.packet;

/**
 * ACK
 */
public class Ack implements IParsePacket {
    /**
     * 結果コード
     */
    protected static final int RESULT_CODE = 0x81;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * 受信したリザルトデータ
     */
    protected Result result;

    /**
     * Ack
     *
     * @param result 結果クラス
     */
    public Ack(Result result) {
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
     * 自ノードアドレスを取得
     *
     * @return 自ノードアドレス
     */
    public int getNodeAddress() {
        int[] datas = this.result.datas;

        if (!this.hasNodeAddress()) {
            throw new RuntimeException("Self node address not found");
        }

        return (datas[0] << 8) | datas[1];
    }

    /**
     * 自ノードアドレスを取得できるか
     *
     * @return ノードアドレスを取得できる場合はtrue
     */
    public boolean hasNodeAddress() {
        return this.result.datas.length >= 2;
    }
}
