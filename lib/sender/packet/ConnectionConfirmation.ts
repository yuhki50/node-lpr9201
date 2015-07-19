/*
 * 結果
 * 成功時: ConnectionConfirmation
 */
class ConnectionConfirmation implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x00;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * 接続確認
     * 正常に UART 接続出来ているか確認する
     */
    public ConnectionConfirmation() : void {
    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return ConnectionConfirmation.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return ConnectionConfirmation.DATA_LENGTH_BYTE_SIZE;
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
