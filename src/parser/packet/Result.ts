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
    //public static DATA_LENGTH_BYTE_SIZE_MAP : {[key: number] : number} = {
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
    //};

    /**
     * データ長バイトサイズがあるか
     *
     * @param commandId
     * @return 結果コード
     */
    public static hasDataLengthByteSize(commandId: number) : boolean {
        return Result.getDataLengthByteSize(commandId) != 0;
    }

    /**
     * データ長バイトサイズを取得する
     *
     * @param commandId
     * @return 結果コード
     */
    public static getDataLengthByteSize(commandId : number) : number {
        switch (commandId) {
            case Ack.RESULT_CODE:
                return Ack.DATA_LENGTH_BYTE_SIZE;

            case AditionalReceiveData.RESULT_CODE:
                return AditionalReceiveData.DATA_LENGTH_BYTE_SIZE;

            case ConnectionConfirmation.RESULT_CODE:
                return ConnectionConfirmation.DATA_LENGTH_BYTE_SIZE;

            case ConnectionNotification.RESULT_CODE:
                return ConnectionNotification.DATA_LENGTH_BYTE_SIZE;

            case ConnectionResult.RESULT_CODE:
                return ConnectionResult.DATA_LENGTH_BYTE_SIZE;

            case EdScan.RESULT_CODE:
                return EdScan.DATA_LENGTH_BYTE_SIZE;

            case Nack.RESULT_CODE:
                return Nack.DATA_LENGTH_BYTE_SIZE;

            case ProfileParameter.RESULT_CODE:
                return Nack.DATA_LENGTH_BYTE_SIZE;

            case ReceiveData.RESULT_CODE:
                return ReceiveData.DATA_LENGTH_BYTE_SIZE;

            case Ring.RESULT_CODE:
                return Ring.DATA_LENGTH_BYTE_SIZE;

            case Rssi.RESULT_CODE:
                return Rssi.DATA_LENGTH_BYTE_SIZE;

            case SecurityConfig.RESULT_CODE:
                return SecurityConfig.DATA_LENGTH_BYTE_SIZE;

            case WirelessSecurityError.RESULT_CODE:
                return WirelessSecurityError.DATA_LENGTH_BYTE_SIZE;

            case Wup.RESULT_CODE:
                return Wup.DATA_LENGTH_BYTE_SIZE;

            default:
                return 0;
        }
    }

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
    public constructor(resultCode : number, datas : number[]) {
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
