/*
 * 結果
 * 設定成功時: Ack
 * 設定失敗時: Nack
 */
class SecurityKeyConfig implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number= 0x22;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * セキュリティレベル    0x01 ~ 0x07
     */
    public securityLevel : number;

    /**
     * セキュリティキー情報
     */
    public securityKey : number[];

    /**
     * キー情報設定
     * セキュリティのキー情報を設定する
     *
     * @param securityLevel セキュリティレベル  0x01 ~ 0x07
     * @param securityKey   セキュリティキー情報
     */
    public SecurityKeyConfig(securityLevel : number, securityKey : number[]) {
        this.securityLevel = securityLevel;
        this.securityKey = securityKey;
    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return SecurityKeyConfig.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return SecurityKeyConfig.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * 構築したパケットをシリアライズしたデータ列を取得する
     *
     * @return 構築したパケットをシリアライズしたデータ列
     */
    public serialize() : number[] {
        var datas : number[] = [];
        datas = datas.concat(this.securityKey);
        datas.push(this.securityLevel);
        return datas;
    }
}
