/*
 * 結果
 * 読出し成功時: Rssi
 * 読出し失敗時: Nack
 *
 * 最後に受信した自ノード宛の有効なデータの RSSI 値を返します。 マルチホップの中継機として使用した場合、中継データの RSSI 値は保存されません。
 */
class ReadRssiData implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x05;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * RSSI データ読出し
     * 最後に受信したデータの RSSI データを読出す
     */
    public ReadRssiData() {

    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return ReadRssiData.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return ReadRssiData.DATA_LENGTH_BYTE_SIZE;
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
