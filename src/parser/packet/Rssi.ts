/// <reference path='IParsePacket.ts' />
/// <reference path='Result.ts' />

/**
 * RSSI
 */
class Rssi implements IParsePacket {
    /**
     * 結果コード
     */
    //protected static const RESULT_CODE : number = 0x84;
    public static RESULT_CODE : number = 0x84;

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
     * RSSI
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
        return Rssi.RESULT_CODE;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return Rssi.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    public canParse() : boolean {
        return this.result != null && this.result.resultCode == Rssi.RESULT_CODE;
    }

    /**
     * RSSI値を取得する
     * 受信RSSI内容(dBm値で出力) -128~0
     *
     * @return RSSI値
     */
    public getRssi() : number {
        return this.result.datas[0] | ~0xFF;
    }
}
