/// <reference path='IParsePacket.ts' />
/// <reference path='Result.ts' />
/// <reference path='../option/AutoStartupErrorType.ts' />
/// <reference path='../option/DeviceType.ts' />

/**
 * 接続確認
 */
class ConnectionConfirmation implements IParsePacket {
    /**
     * 結果コード
     */
    //protected static const RESULT_CODE : number = 0x00;
    protected static RESULT_CODE : number = 0x00;

    /**
     * データ長のバイト数
     */
    //protected static const DATA_LENGTH_BYTE_SIZE : number = 1;
    protected static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * 受信したリザルトデータ
     */
    protected result : Result;

    /**
     * 接続確認
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
        return ConnectionConfirmation.RESULT_CODE;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return ConnectionConfirmation.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    public canParse() : boolean {
        return this.result != null && this.result.resultCode == ConnectionConfirmation.RESULT_CODE;
    }

    /**
     * エラー種別を取得
     *
     * @return エラー種別
     */
    public getErrorType() : AutoStartupErrorType {
        if (!this.hasErrorType()) {
            throw new Error("Error type not found");
        }

        return _AutoStartupErrorType.getEnumByErrorCode(this.result.datas[0]);
    }

    /**
     * エラー種別を取得できるか
     *
     * @return エラー種別を取得出来る時はtrue
     */
    public hasErrorType() : boolean {
        return this.result.datas.length == 1;
    }

    /**
     * 自ノードアドレスを取得
     *
     * @return 自ノードアドレス
     */
    public getNodeAddress() : number {
        var datas = this.result.datas;

        if (!this.hasNodeAddress()) {
            throw new Error("Self node address not found");
        }

        return (datas[0] << 8) | datas[1];
    }

    /**
     * 自ノードアドレスを取得できるか
     *
     * @return 自ノードアドレスを取得出来る場合はtrue
     */
    public hasNodeAddress() : boolean {
        return this.result.datas.length == 2;
    }

    /**
     * デバイスタイプを取得する
     *
     * @return デバイスタイプ
     */
    public getDeviceType() : DeviceType {
        var length = this.result.datas.length;

        if (length == 1) {
            return DeviceType.COORDINATOR;
        }

        if (length == 2) {
            return DeviceType.END_DEVICE;
        }

        return DeviceType.UNKNOWN;
    }
}
