/// <reference path='Ack.ts' />
/// <reference path='AditionalReceiveData.ts' />
/// <reference path='ConnectionConfirmation.ts' />
/// <reference path='ConnectionNotification.ts' />
/// <reference path='ConnectionResult.ts' />
/// <reference path='EdScan.ts' />
/// <reference path='Nack.ts' />
/// <reference path='ProfileParameter.ts' />
/// <reference path='ReceiveData.ts' />
/// <reference path='Ring.ts' />
/// <reference path='Rssi.ts' />
/// <reference path='SecurityConfig.ts' />
/// <reference path='WirelessSecurityError.ts' />
/// <reference path='Wup.ts' />

/**
 * リザルト
 */
class Result {
    /**
     * データ長バイトサイズ一覧
     */
    //public static final Map<Integer, Integer> DATA_LENGTH_BYTE_SIZE_MAP;
    public static DATA_LENGTH_BYTE_SIZE_MAP : {[key: number] : number} = {
        //Ack.getResultCode(): Ack.getDataLengthByteSize(),
        //AditionalReceiveData.getResultCode(): AditionalReceiveData.getDataLengthByteSize(),
        //ConnectionConfirmation.getResultCode(): ConnectionConfirmation.getDataLengthByteSize(),
        //ConnectionNotification.getResultCode(): ConnectionNotification.getDataLengthByteSize(),
        //ConnectionResult.getResultCode(): ConnectionResult.getDataLengthByteSize(),
        //EdScan.getResultCode(): EdScan.getDataLengthByteSize(),
        //Nack.getResultCode(): Nack.getDataLengthByteSize(),
        //ProfileParameter.getResultCode(): Nack.getDataLengthByteSize(),
        //ReceiveData.getResultCode(): ReceiveData.getDataLengthByteSize(),
        //Ring.getResultCode(): Ring.getDataLengthByteSize(),
        //Rssi.getResultCode(): Rssi.getDataLengthByteSize(),
        //SecurityConfig.getResultCode(): SecurityConfig.getDataLengthByteSize(),
        //WirelessSecurityError.getResultCode(): WirelessSecurityError.getDataLengthByteSize(),
        //Wup.getResultCode(): Wup.getDataLengthByteSize(),
    };

    /**
     * 結果コード
     */
    //protected resultCode : number;
    public resultCode : number;

    /**
     * 受信データ
     */
    //protected datas : number[];
    public datas : number[];

    /**
     * @param resultCode 結果コード
     * @param datas      受信データ
     */
    public Result(resultCode : number, datas : number[]) {
        this.resultCode = resultCode;
        this.datas = datas;
    }

    /**
     * 結果コードを取得する
     *
     * @return 結果コード
     */
    /*
    public getResultCode() : number {
        return this.resultCode;
    }
    */
}
