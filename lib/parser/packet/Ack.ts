/// <reference path='IParsePacket.ts' />
/// <reference path='Result.ts' />

/**
 * ACK
 */
class Ack implements IParsePacket {
    /**
     * 結果コード
     */
    public static RESULT_CODE : number = 0x81;

    /**
     * データ長のバイト数
     */
    public static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * 受信したリザルトデータ
     */
    public result : Result;

    /**
     * Ack
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
        return Ack.RESULT_CODE;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return Ack.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    public canParse() : boolean {
        return this.result != null && this.result.resultCode == Ack.RESULT_CODE;
    }

    /**
     * 自ノードアドレスを取得
     *
     * @return 自ノードアドレス
     */
    public getNodeAddress() : number {
        var datas : number[] = this.result.datas;

        if (!this.hasNodeAddress()) {
            //FIXME
            //throw new RuntimeException("Self node address not found");
        }

        return (datas[0] << 8) | datas[1];
    }

    /**
     * 自ノードアドレスを取得できるか
     *
     * @return ノードアドレスを取得できる場合はtrue
     */
    public hasNodeAddress() : boolean {
        return this.result.datas.length >= 2;
    }
}
