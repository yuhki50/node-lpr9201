/*
 * 結果
 * 読出し成功時: SecurityConfig
 * 読出し失敗時: Nack
 */
class GetSecurityState implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x23;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * セキュリティ状態取得
     * セキュリティの状態を取得する
     */
    public GetSecurityState() {

    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return GetSecurityState.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return GetSecurityState.DATA_LENGTH_BYTE_SIZE;
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
