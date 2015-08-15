/// <reference path='IParsePacket.ts' />
/// <reference path='Result.ts' />
/// <reference path='../option/ReceiveDataType.ts' />

/**
 * 付加受信データ
 */
class AditionalReceiveData implements IParsePacket {
    /**
     * 結果コード
     */
    //protected static const RESULT_CODE : number = 0x90;
    public static RESULT_CODE : number = 0x90;

    /**
     * データ長のバイト数
     */
    //protected static const DATA_LENGTH_BYTE_SIZE : number = 2;
    public static DATA_LENGTH_BYTE_SIZE : number = 2;

    /**
     * 受信したリザルトデータ
     */
    protected result : Result;

    /**
     * 付加受信データ
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
        return AditionalReceiveData.RESULT_CODE;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return AditionalReceiveData.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    public canParse() : boolean {
        return this.result != null && this.result.resultCode == AditionalReceiveData.RESULT_CODE;
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

    /**
     * データ種別を取得する
     *
     * @return データ種別
     */
    public getReceiveDataType() : ReceiveDataType {
        return ReceiveDataType_.getEnumByOrdinal(this.result.datas[1]);
    }

    /**
     * 送信元アドレスを取得する
     *
     * @return 送信元アドレス
     */
    public getSourceAddress() : number {
        var datas = this.result.datas;
        return (datas[2] << 8) | datas[3];
    }

    /**
     * 直前送信元アドレスを取得する
     *
     * @return 直前送信元アドレス
     */
    public getJustBeforeSourceAddress() : number {
        var datas = this.result.datas;
        return (datas[4] << 8) | datas[5];
    }

    /**
     * データを取得する
     *
     * @return データ
     */
    public getDatas() : number[] {
        var datas = this.result.datas;
        //const START_INDEX : number = 6;
        var START_INDEX : number = 6;
        return datas.slice(START_INDEX);
    }
}
