/// <reference path='IParsePacket.ts' />
/// <reference path='Result.ts' />
/// <reference path='../option/ChildConnectionResult.ts' />

/**
 * 接続結果
 */
class ConnectionResult implements IParsePacket {
    /**
     * 結果コード
     */
    public static RESULT_CODE : number = 0x92;

    /**
     * データ長のバイト数
     */
    public static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * 受信したリザルトデータ
     */
    public result : Result;

    /**
     * 接続結果
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
        return ConnectionResult.RESULT_CODE;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return ConnectionResult.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    public canParse() : boolean {
        return this.result != null && this.result.resultCode == ConnectionResult.RESULT_CODE;
    }

    /**
     * 子接続の結果を取得する
     *
     * @return 子接続の結果
     */
    public getChildConnectionResult() : ChildConnectionResult {
        return ChildConnectionResult.getEnumByResultCode(this.result.datas[0]);
    }
}
