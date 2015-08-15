/// <reference path='IParsePacket.ts' />
/// <reference path='Result.ts' />
/// <reference path='../option/WirelessSecurityErrorType.ts' />

/**
 * 無銭セキュリティエラー通知
 */
class WirelessSecurityError implements IParsePacket {
    /**
     * 結果コード
     */
    //protected static const RESULT_CODE : number = 0x94;
    public static RESULT_CODE : number = 0x94;

    /**
     * データ長のバイト数
     */
    //protected static const DATA_LENGTH_BYTE_SIZE : number = 1;
    public static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * 受信したリザルトデータ
     */
    protected result : Result;

    /**
     * 無銭セキュリティエラー通知
     *
     * @param result 結果クラス
     */
    public constructor(result : Result) {
        this.result = result;
    }

    /**
     * 結果コードを取得する
     *
     * @return 結果コード
     */
    public getResultCode() : number {
        return WirelessSecurityError.RESULT_CODE;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return WirelessSecurityError.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    public canParse() : boolean {
        return this.result != null && this.result.resultCode == WirelessSecurityError.RESULT_CODE;
    }

    /**
     * エラー種別を取得する
     *
     * @return エラー種別
     */
    public getErrorType() : WirelessSecurityErrorType {
        return _WirelessSecurityErrorType.getEnumByErrorCode(this.result.datas[0]);
    }

    /**
     * エラー時の送信元PAN IDを取得する
     *
     * @return エラー時の送信元PAN ID
     */
    public getSourcePanId() : number {
        var datas = this.result.datas;
        return (datas[1] << 8) | datas[2];
    }

    /**
     * エラー時の送信元アドレスを取得する
     *
     * @return エラー時の送信元アドレス
     */
    public getSourceAddress() : number {
        var datas = this.result.datas;
        return (datas[3] << 8) | datas[4];
    }

    /**
     * エラー時の送信先PAN IDを取得する
     *
     * @return エラー時の送信先PAN ID
     */
    public getDestinationPanId() : number {
        var datas = this.result.datas;
        return (datas[5] << 8) | datas[6];
    }

    /**
     * エラー時の送信先アドレスを取得する
     *
     * @return エラー時の送信先アドレス
     */
    public getDestinationAddress() : number {
        var datas = this.result.datas;
        return (datas[7] << 8) | datas[8];
    }
}
