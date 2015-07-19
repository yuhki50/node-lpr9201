/// <reference path='IParsePacket.ts' />
/// <reference path='Result.ts' />

/**
 * 受信データ
 */
class ReceiveData implements IParsePacket {
    /**
     * 結果コード
     */
    public static RESULT_CODE : number = 0x83;

    /**
     * データ長のバイト数
     */
    public static DATA_LENGTH_BYTE_SIZE : number = 2;

    /**
     * 受信したリザルトデータ
     */
    public result : Result;

    /**
     * 受信データ
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
        return ReceiveData.RESULT_CODE;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return ReceiveData.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    public canParse() : boolean {
        return this.result != null && this.result.resultCode == ReceiveData.RESULT_CODE;
    }

    /**
     * データを取得する
     *
     * @return データ
     */
    public getDatas() : number[] {
        return this.result.datas.slice(0);
    }
}
