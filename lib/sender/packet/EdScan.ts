/*
 * 結果
 * 成功時: EdScan
 * 失敗時: Nack
 *
 * マルチホップ動作中、ED スキャンは行ってはいけない
 */
class EdScan implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x0C;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * EDスキャン
     * 全チャンネルのRSSI値を取得する
     */
    public EdScan() {

    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return EdScan.COMMAND_ID;
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
     * 構築したパケットをシリアライズしたデータ列を取得する
     *
     * @return 構築したパケットをシリアライズしたデータ列
     */
    public serialize() : number {
        return [];
    }
}
