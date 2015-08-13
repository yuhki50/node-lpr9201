package com.yuhki50.lpr9201.parser.packet;

import com.yuhki50.lpr9201.parser.option.AutoStartupErrorType;
import com.yuhki50.lpr9201.parser.option.DeviceType;

/**
 * 接続確認
 */
public class ConnectionConfirmation implements IParsePacket {
    /**
     * 結果コード
     */
    protected static final int RESULT_CODE = 0x00;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * 受信したリザルトデータ
     */
    protected Result result;

    /**
     * 接続確認
     *
     * @param result 結果クラス
     */
    public ConnectionConfirmation(Result result) {
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
     * エラー種別を取得
     *
     * @return エラー種別
     */
    public AutoStartupErrorType getErrorType() {
        if (!this.hasErrorType()) {
            throw new RuntimeException("Error type not found");
        }

        return AutoStartupErrorType.getEnumByErrorCode(this.result.datas[0]);
    }

    /**
     * エラー種別を取得できるか
     *
     * @return エラー種別を取得出来る時はtrue
     */
    public boolean hasErrorType() {
        return this.result.datas.length == 1;
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
     * @return 自ノードアドレスを取得出来る場合はtrue
     */
    public boolean hasNodeAddress() {
        return this.result.datas.length == 2;
    }

    /**
     * デバイスタイプを取得する
     *
     * @return デバイスタイプ
     */
    public DeviceType getDeviceType() {
        int length = this.result.datas.length;

        if (length == 1) {
            return DeviceType.COORDINATOR;
        }

        if (length == 2) {
            return DeviceType.END_DEVICE;
        }

        return DeviceType.UNKNOWN;
    }
}
