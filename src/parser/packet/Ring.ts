/// <reference path='IParsePacket.ts' />
/// <reference path='Result.ts' />

/**
 * RING
 */
class Ring implements IParsePacket {
    /**
     * 結果コード
     */
    //protected static const RESULT_CODE : number = 0x87;
    public static RESULT_CODE : number = 0x87;

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
     * RING
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
        return Ring.RESULT_CODE;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return Ring.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    public canParse() : boolean {
        return this.result != null && this.result.resultCode == Ring.RESULT_CODE;
    }
}
