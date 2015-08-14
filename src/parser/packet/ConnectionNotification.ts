/// <reference path='IParsePacket.ts' />
/// <reference path='Result.ts' />

/**
 * 接続通知
 */
class ConnectionNotification implements IParsePacket {
    /**
     * 結果コード
     */
    //protected static const RESULT_CODE : number = 0x91;
    protected static RESULT_CODE : number = 0x91;

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
     * 接続通知
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
        return ConnectionNotification.RESULT_CODE;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return ConnectionNotification.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    public canParse() : boolean {
        return this.result != null && this.result.resultCode == ConnectionNotification.RESULT_CODE;
    }

    /**
     * 子のIEEEアドレスを取得する
     * ビックエンディアン
     *
     * @return 子のIEEEアドレス
     */
    public getChildIeeeAddressBytes() : number[] {
        return this.result.datas;
    }
}
