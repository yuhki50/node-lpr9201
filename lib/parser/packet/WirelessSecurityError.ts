package com.yuhki50.lpr9201.parser.packet;

import com.yuhki50.lpr9201.parser.option.WirelessSecurityErrorType;

/**
 * 無銭セキュリティエラー通知
 */
public class WirelessSecurityError implements IParsePacket {
    /**
     * 結果コード
     */
    protected static final int RESULT_CODE = 0x94;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * 受信したリザルトデータ
     */
    protected Result result;

    /**
     * 無銭セキュリティエラー通知
     *
     * @param result 結果クラス
     */
    public WirelessSecurityError(Result result) {
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
     * エラー種別を取得する
     *
     * @return エラー種別
     */
    public WirelessSecurityErrorType getErrorType() {
        return WirelessSecurityErrorType.getEnumByErrorCode(this.result.datas[0]);
    }

    /**
     * エラー時の送信元PAN IDを取得する
     *
     * @return エラー時の送信元PAN ID
     */
    public int getSourcePanId() {
        int[] datas = this.result.datas;
        return (datas[1] << 8) | datas[2];
    }

    /**
     * エラー時の送信元アドレスを取得する
     *
     * @return エラー時の送信元アドレス
     */
    public int getSourceAddress() {
        int[] datas = this.result.datas;
        return (datas[3] << 8) | datas[4];
    }

    /**
     * エラー時の送信先PAN IDを取得する
     *
     * @return エラー時の送信先PAN ID
     */
    public int getDestinationPanId() {
        int[] datas = this.result.datas;
        return (datas[5] << 8) | datas[6];
    }

    /**
     * エラー時の送信先アドレスを取得する
     *
     * @return エラー時の送信先アドレス
     */
    public int getDestinationAddress() {
        int[] datas = this.result.datas;
        return (datas[7] << 8) | datas[8];
    }
}
