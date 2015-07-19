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
    public static DATA_LENGTH_BYTE_SIZE_MAP : {[key : number] : number} = {
        /*
        Ack.RESULT_CODE: Ack.DATA_LENGTH_BYTE_SIZE,
        AditionalReceiveData.RESULT_CODE:  AditionalReceiveData.DATA_LENGTH_BYTE_SIZE,
        ConnectionConfirmation.RESULT_CODE: ConnectionConfirmation.DATA_LENGTH_BYTE_SIZE,
        ConnectionNotification.RESULT_CODE: ConnectionNotification.DATA_LENGTH_BYTE_SIZE,
        ConnectionResult.RESULT_CODE: ConnectionResult.DATA_LENGTH_BYTE_SIZE,
        EdScan.RESULT_CODE: EdScan.DATA_LENGTH_BYTE_SIZE,
        Nack.RESULT_CODE: Nack.DATA_LENGTH_BYTE_SIZE,
        ProfileParameter.RESULT_CODE: Nack.DATA_LENGTH_BYTE_SIZE,
        ReceiveData.RESULT_CODE: ReceiveData.DATA_LENGTH_BYTE_SIZE,
        Ring.RESULT_CODE: Ring.DATA_LENGTH_BYTE_SIZE,
        Rssi.RESULT_CODE: Rssi.DATA_LENGTH_BYTE_SIZE,
        SecurityConfig.RESULT_CODE: SecurityConfig.DATA_LENGTH_BYTE_SIZE,
        WirelessSecurityError.RESULT_CODE: WirelessSecurityError.DATA_LENGTH_BYTE_SIZE,
        Wup.RESULT_CODE: Wup.DATA_LENGTH_BYTE_SIZE,
        */
    };

    /**
     * 結果コード
     */
    public resultCode : number;

    /**
     * 受信データ
     */
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
    public getResultCode() : number {
        return this.resultCode;
    }
}
