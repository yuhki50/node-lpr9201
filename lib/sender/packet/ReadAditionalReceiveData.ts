/*
 * 結果
 * 読出し成功時: AditionalReceiveData
 * 読出し失敗時: Nack
 *
 * 受信データバッファは2段です。 受信データバッファにデータが2段埋まっている場合は、受信した順番でデータを読み出せます。
 */
class ReadAditionalReceiveData implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x0E;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * 付加受信データ読出し
     * 最後に受信した付加データ読出す
     */
    public ReadAditionalReceiveData() {

    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return ReadAditionalReceiveData.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return ReadAditionalReceiveData.DATA_LENGTH_BYTE_SIZE;
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
