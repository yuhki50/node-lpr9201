/*
 * 結果
 * 読出し成功時: Ack
 * 読出し失敗時: Nack
 */
class SecurityConfig implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x20;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * セキュリティのON/OFF
     */
    public enable : boolean;

    /**
     * セキュリティ設定
     * セキュリティのON/OFF
     */
    public SecurityConfig(enable : boolean) {
        this.enable = enable;
    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return SecurityConfig.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return SecurityConfig.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * 構築したパケットをシリアライズしたデータ列を取得する
     *
     * @return 構築したパケットをシリアライズしたデータ列
     */
    public serialize() : number[] {
        return [this.enable ? 0x01 : 0x00];
    }
}
