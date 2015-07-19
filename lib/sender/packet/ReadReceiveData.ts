/*
 * 結果
 * 設定成功時: ReceiveData
 * 設定失敗時: Nack
 *
 * 受信データバッファは2段です。 受信データバッファにデータが2段埋まっている場合は、受信した順番でデータを読み出せます。
 */
class ReadReceiveData implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x04;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * 受信データ読出し
     * 最後に受信した受信データを読出す
     */
    public ReadReceiveData() {

    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return ReadReceiveData.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return ReadReceiveData.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * 構築したパケットをシリアライズしたデータ列を取得する
     *
     * @return 構築したパケットをシリアライズしたデータ列
     */
    public serialize() : number[] {
        return [];
    }
}
