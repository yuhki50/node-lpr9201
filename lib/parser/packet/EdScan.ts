/// <reference path='IParsePacket.ts' />
/// <reference path='Result.ts' />
/// <reference path='../option/RateType.ts' />

/**
 * EDスキャン結果
 */
class EdScan implements IParsePacket {
    /**
     * 結果コード
     */
    public static RESULT_CODE : number = 0x8C;

    /**
     * データ長のバイト数
     */
    public static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * 受信したリザルトデータ
     */
    public result : Result;

    /**
     * Rate1のチャンネル数
     */
    private static RATE1_LENGTH : number = 0x1D;

    /**
     * Rate2のチャンネル数
     */
    private static RATE2_LENGTH : number = 0x0E;

    /**
     * 開始チャンネル番号
     */
    private static START_CH : number = 33;

    /**
     * EDスキャン結果
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
        return EdScan.RESULT_CODE;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return EdScan.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    public canParse() : boolean {
        return this.result != null && this.result.resultCode == EdScan.RESULT_CODE;
    }

    /**
     * 全チャンネルのRSSI値を取得する
     *
     * @return 全チャンネルのRSSI値
     */
    public getRssis() : {[key : number] : number} {
        var rssis : {[key : number] : number} = {};
        var length = this.result.datas.length;

        if (length == EdScan.RATE1_LENGTH) {
            for (var i = 0; i < length; i++) {
                rssis[EdScan.START_CH + i] = this.result.datas[i] | ~0xFF;
            }
        } else if (length == EdScan.RATE2_LENGTH) {
            var offset = 0;
            for (var i = 0; i < length; i++) {
                rssis[EdScan.START_CH + offset + i] = this.result.datas[i] | ~0xFF;
                rssis[EdScan.START_CH + offset + i + 1] = this.result.datas[i] | ~0xFF;
                offset++;
            }
        } else {
            //FIXME
            //throw new RuntimeException("not found rate");
        }

        return rssis;
    }

    /**
     * 転送レートを取得する
     *
     * @return 転送レート
     */
    public getRate() : RateType {
        var length = this.result.datas.length;

        if (length == EdScan.RATE1_LENGTH) {
            return RateType.Rate1;
        }
        if (length == EdScan.RATE2_LENGTH) {
            return RateType.Rate2;
        }
        //FIXME
        //throw new RuntimeException("not found rate");
    }
}
