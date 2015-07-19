/*
 * 結果
 * 読出し成功時: なし (リセット実施)
 * 読出し失敗時: Nack
 */
class Reset implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x7F;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * リセット
     * モジュールをソフトウェアリセットする
     */
    public Reset() {

    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return Reset.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return Reset.DATA_LENGTH_BYTE_SIZE;
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
