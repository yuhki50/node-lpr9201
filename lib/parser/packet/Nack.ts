/// <reference path='IParsePacket.ts' />
/// <reference path='Result.ts' />
/// <reference path='../option/NackReason.ts' />

/**
 * NACK
 */
class Nack implements IParsePacket {
    /**
     * 結果コード
     */
    public static RESULT_CODE : number = 0x82;

    /**
     * データ長のバイト数
     */
    public static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * 受信したリザルトデータ
     */
    public result : Result;

    /**
     * NACK
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
        return Nack.RESULT_CODE;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return Nack.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    public canParse() : boolean {
        return this.result != null && this.result.resultCode == Nack.RESULT_CODE;
    }

    /**
     * 理由コードを取得する
     *
     * @return 理由コード
     */
    public getReason() : NackReason {
        try {
            return NackReason.getEnumByReasonCode(this.result.datas[0]);
        } catch (e) {
            return NackReason.OTHER_ERROR;
        }
    }
}
