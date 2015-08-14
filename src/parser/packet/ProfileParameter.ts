/// <reference path='IParsePacket.ts' />
/// <reference path='Result.ts' />
/// <reference path='../../util/ByteUtil.ts' />

/**
 * プロファイルパラメータ確認
 */
class ProfileParameter implements IParsePacket {
    /**
     * 結果コード
     */
    //protected static const RESULT_CODE : number = 0x85;
    protected static RESULT_CODE : number = 0x85;

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
     * プロファイルパラメータ確認
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
        return ProfileParameter.RESULT_CODE;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return ProfileParameter.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    public canParse() : boolean {
        return this.result != null && this.result.resultCode == ProfileParameter.RESULT_CODE;
    }

    /**
     * プロファイルパラメーター値を取得する
     *
     * @return プロファイルパラメーター値
     */
    public getValueInt() : number {
        return ByteUtil.mergeBigEndian(this.result.datas);
    }

    /**
     * プロファイルパラメーター値を取得する
     *
     * @return プロファイルパラメーター値
     */
    public getValueLong() : number {
        return ByteUtil.mergeBigEndian(this.result.datas);
    }

    /**
     * プロファイルパラメーター値を取得する
     *
     * @return プロファイルパラメーター値
     */
    public getValueBytes() : number[] {
        return this.result.datas;
    }
}
