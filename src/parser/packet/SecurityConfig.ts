/// <reference path='IParsePacket.ts' />
/// <reference path='Result.ts' />

/**
 * セキュリティ状態取得
 */
class SecurityConfig implements IParsePacket {
    /**
     * 結果コード
     */
    //protected static const RESULT_CODE : number = 0x93;
    protected static RESULT_CODE : number = 0x93;

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
     * セキュリティ状態取得
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
        return SecurityConfig.RESULT_CODE;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return SecurityConfig.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    public canParse() : boolean {
        return this.result != null && this.result.resultCode == SecurityConfig.RESULT_CODE;
    }

    /**
     * セキュリティ状態を取得する
     *
     * @return セキュリティ状態
     */
    public getSecurityState() : boolean {
        return this.result.datas[0] == 0x01;
    }
}
